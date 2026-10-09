import type { AgentContext, InteractionPort, Intent } from "./AgentTypes";

export class InteractionAgent {
  private lastIntent: Intent["type"] | null = null;

  constructor(private readonly port: InteractionPort) {}

  resolve(context: AgentContext): Intent | null {
    if (context.confidence < 0.45) return null;
    if (context.hands >= 2 && context.zoomFactor)
      return { type: "zoom", factor: context.zoomFactor };
    if (context.gesture === "PINCH" && context.component !== undefined)
      return { type: "select", component: context.component };
    if (context.gesture === "POINT" && context.component !== undefined)
      return { type: "select", component: context.component };
    if (context.gesture === "OPEN")
      return { type: "explode", amount: context.openness ?? 1 };
    if (context.gesture === "FIST") return { type: "assemble" };
    if (context.gesture === "PEACE") return { type: "next-model" };
    if (context.gesture === "NONE" && context.movement)
      return { type: "rotate", ...context.movement };
    return { type: "release" };
  }

  dispatch(context: AgentContext): Intent | null {
    const intent = this.resolve(context);
    if (
      !intent ||
      (intent.type === this.lastIntent &&
        !["explode", "rotate", "zoom"].includes(intent.type))
    )
      return null;
    this.lastIntent = intent.type;
    switch (intent.type) {
      case "explode":
        this.port.explode(intent.amount);
        break;
      case "assemble":
        this.port.assemble();
        break;
      case "rotate":
        this.port.rotate(intent.dx, intent.dy);
        break;
      case "select":
        this.port.select(intent.component);
        break;
      case "zoom":
        this.port.zoom(intent.factor);
        break;
      case "next-model":
        this.port.nextModel();
        break;
      case "release":
        this.port.release();
        break;
    }
    return intent;
  }

  reset(): void {
    this.lastIntent = null;
    this.port.release();
  }
}
