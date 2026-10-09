# HoloHand Architecture

HoloHand is a browser-only Three.js application. The current visual prototype remains the rendering implementation, while typed modules define the deterministic interaction boundary used by gesture commands.

## Dependency direction

The UI and input loop depend on the scene adapter, gesture engine, and interaction agent. The agent depends only on `AgentTypes` and never reaches into Three.js internals. Model definitions provide data and point samples to the scene; they do not depend on the UI.

## Runtime lifecycle

The page creates the scene and model registry before requesting camera permission. Camera startup is explicit. MediaPipe inference runs only for new video frames and never queues unbounded asynchronous work. `pagehide` stops tracks, closes the landmarker, resets gesture state, and disposes renderer resources.

## Pipelines

Perception flows from `HandTracker` to the existing `GestureEngine`, which smooths landmarks and applies hysteresis. Stabilized observations can be translated by `InteractionAgent` into validated intents. The agent calls only `InteractionPort`, whose implementation is the HoloScene adapter.

The scene owns the Three.js renderer, shader material, cached model geometries, picking samples, explosion offsets, and animation state. Models are procedural and educational approximations, not CAD or medical models.

## Testing

Pure gesture classification, stabilization, and intent priority are tested with synthetic landmarks and a fake interaction port. Playwright smoke tests exercise initial rendering and keyboard model switching without camera hardware.
