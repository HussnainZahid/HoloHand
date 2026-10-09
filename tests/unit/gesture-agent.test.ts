import { describe, expect, it } from "vitest";
import {
  classifyGesture,
  GestureStabilizer,
} from "../../src/gestures/GestureClassifier";
import { InteractionAgent } from "../../src/agent/InteractionAgent";
import type { InteractionPort } from "../../src/agent/AgentTypes";

const landmarks = (tips: number[]): { x: number; y: number }[] => {
  const result = Array.from({ length: 21 }, () => ({ x: 0, y: 0 }));
  result[9] = { x: 0, y: 1 };
  for (const [index, tip] of [8, 12, 16, 20].entries()) {
    result[tip] = { x: 0, y: tips[index] };
    result[[5, 9, 13, 17][index]] = { x: 0, y: 0.5 };
  }
  return result;
};

describe("gesture classification", () => {
  it("classifies an extended hand as open", () => {
    expect(classifyGesture(landmarks([2, 2, 2, 2])).name).toBe("OPEN");
  });

  it("stabilizes a transition over multiple frames", () => {
    const stabilizer = new GestureStabilizer(3);
    const open = { name: "OPEN" as const, confidence: 0.9, pinchDistance: 1 };
    expect(stabilizer.update(open).changed).toBe(false);
    expect(stabilizer.update(open).changed).toBe(false);
    expect(stabilizer.update(open)).toMatchObject({
      name: "OPEN",
      changed: true,
    });
  });
});

describe("interaction agent", () => {
  it("prioritizes two-hand zoom and calls the validated port", () => {
    const calls: string[] = [];
    const port: InteractionPort = {
      explode: () => calls.push("explode"),
      assemble: () => calls.push("assemble"),
      rotate: () => calls.push("rotate"),
      select: () => calls.push("select"),
      zoom: () => calls.push("zoom"),
      nextModel: () => calls.push("next"),
      release: () => calls.push("release"),
    };
    const agent = new InteractionAgent(port);
    agent.dispatch({
      gesture: "OPEN",
      confidence: 0.9,
      hands: 2,
      zoomFactor: 1.2,
      openness: 1,
    });
    expect(calls).toEqual(["zoom"]);
  });
});
