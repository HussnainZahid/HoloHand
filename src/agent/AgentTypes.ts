import type { GestureName } from "../gestures/GestureTypes";

export type Intent =
  | { type: "explode"; amount: number }
  | { type: "assemble" }
  | { type: "rotate"; dx: number; dy: number }
  | { type: "select"; component: number }
  | { type: "zoom"; factor: number }
  | { type: "next-model" }
  | { type: "release" };

export interface AgentContext {
  gesture: GestureName;
  confidence: number;
  hands: number;
  movement?: { dx: number; dy: number };
  zoomFactor?: number;
  component?: number;
  openness?: number;
}

export interface InteractionPort {
  explode(amount: number): void;
  assemble(): void;
  rotate(dx: number, dy: number): void;
  select(component: number): void;
  zoom(factor: number): void;
  nextModel(): void;
  release(): void;
}
