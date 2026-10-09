import type {
  GestureObservation,
  GestureName,
  Landmark,
  StableGesture,
} from "./GestureTypes";

const fingerPairs = [
  [8, 5],
  [12, 9],
  [16, 13],
  [20, 17],
] as const;

const distance = (first: Landmark, second: Landmark): number =>
  Math.hypot(first.x - second.x, first.y - second.y);

export function classifyGesture(
  landmarks: readonly Landmark[],
): GestureObservation {
  if (landmarks.length < 21)
    return { name: "NONE", confidence: 0, pinchDistance: 1 };
  const wrist = landmarks[0];
  const palmSize = Math.max(distance(wrist, landmarks[9]), 0.0001);
  const ratios = fingerPairs.map(
    ([tip, mcp]) =>
      distance(landmarks[tip], wrist) / distance(landmarks[mcp], wrist),
  );
  const extended = ratios.map((ratio) => ratio > 1.5);
  const curled = ratios.map((ratio) => ratio < 1.32);
  const pinchDistance = distance(landmarks[4], landmarks[8]) / palmSize;
  const pinch =
    pinchDistance < 0.32 &&
    distance(landmarks[8], wrist) > distance(landmarks[6], wrist) * 0.88;
  let name: GestureName = "NONE";
  if (pinch) name = "PINCH";
  else if (extended.every(Boolean)) name = "OPEN";
  else if (extended[0] && extended[1] && curled[2] && curled[3]) name = "PEACE";
  else if (extended[0] && curled.slice(1).every(Boolean)) name = "POINT";
  else if (curled.every(Boolean)) name = "FIST";
  const confidence =
    name === "NONE"
      ? 0.25
      : Math.min(
          1,
          0.55 +
            Math.abs(
              ratios.reduce((sum, ratio) => sum + ratio, 0) / ratios.length -
                1.32,
            ),
        );
  return { name, confidence, pinchDistance };
}

export class GestureStabilizer {
  private candidate: GestureName = "NONE";
  private stable: GestureName = "NONE";
  private streak = 0;

  constructor(private readonly requiredFrames = 3) {}

  update(observation: GestureObservation): StableGesture {
    if (observation.name === this.candidate) this.streak += 1;
    else {
      this.candidate = observation.name;
      this.streak = 1;
    }
    const changed =
      this.streak >= (observation.name === "PINCH" ? 2 : this.requiredFrames) &&
      this.stable !== this.candidate;
    if (changed) this.stable = this.candidate;
    return { name: this.stable, confidence: observation.confidence, changed };
  }

  reset(): void {
    this.candidate = "NONE";
    this.stable = "NONE";
    this.streak = 0;
  }
}
