export type GestureName =
  "OPEN" | "FIST" | "POINT" | "PINCH" | "PEACE" | "NONE";

export interface Landmark {
  x: number;
  y: number;
  z?: number;
}

export interface GestureObservation {
  name: GestureName;
  confidence: number;
  pinchDistance: number;
}

export interface StableGesture {
  name: GestureName;
  confidence: number;
  changed: boolean;
}
