# HoloHand

HoloHand is an interactive browser-based 3D gesture visualization workspace. It renders four procedural educational models as animated point clouds and supports webcam gestures, mouse, touch, keyboard, and accessible controls.

## Features

- Three.js holographic point-cloud rendering with exploded and assembled views.
- Turbofan engine, radial piston engine, sports car, and human brain model definitions.
- MediaPipe Hand Landmarker with zero, one, or two-hand input, local assets first and an explicit CDN fallback.
- Stabilized open palm, fist, pointing, pinch, peace, neutral, and two-hand zoom interactions.
- Typed `InteractionAgent` contract from perception to validated scene actions.
- Manual rotation, zoom, selection, model switching, sliders, and fullscreen controls.
- Camera and GPU cleanup on stop and page teardown.

## Requirements

Node.js 18+ and a current Chromium, Edge, or Firefox browser with WebGL2. Camera access requires `http://localhost` or HTTPS. No backend or API key is required.

## Install and run

```bash
npm install
npm run dev
```

Open the local Vite URL and choose **Start camera**, or choose **Use mouse instead**. Installation runs `scripts/setup.mjs`, which copies MediaPipe WASM and attempts to download the pinned hand model into `public/`. When local assets are unavailable, the application reports the dependency and tries the documented CDN URLs.

## Commands

```bash
npm run typecheck
npm test
npm run lint
npm run format:check
npm run test:e2e
npm run build
npm run preview
```

## Controls

| Input                       | Action                                 |
| --------------------------- | -------------------------------------- |
| Open palm                   | Expand the model                       |
| Fist                        | Assemble the model                     |
| Move hand                   | Rotate and tilt                        |
| Point                       | Highlight a component; dwell to select |
| Pinch                       | Grab and drag a component              |
| Two hands                   | Zoom                                   |
| Peace sign                  | Switch model                           |
| Mouse drag / wheel / click  | Rotate / zoom / inspect                |
| Space, arrows, `1`-`4`, `R` | Assemble/explode, switch, reset        |

## Architecture

The existing renderer owns Three.js resources and procedural models. `HandTracker` provides local perception, `GestureEngine` performs smoothing and gesture transitions, and the typed `InteractionAgent` resolves prioritized intents through `InteractionPort`. See [ARCHITECTURE.md](ARCHITECTURE.md) for dependency direction and lifecycle details.

## Privacy and assets

Webcam frames and landmarks stay in the browser. Camera tracks stop when the camera is stopped or the page is hidden. The only external network behavior is the explicit MediaPipe WASM/model CDN fallback described in [SECURITY.md](SECURITY.md).

## Limitations

Procedural models are visual and educational approximations. Gesture recognition depends on lighting, camera placement, and landmark quality. WebGL and MediaPipe availability vary by browser and device. The production bundle currently emits a size warning because Three.js and MediaPipe are bundled together; runtime correctness is unaffected.

## Troubleshooting

If camera startup fails, use the mouse mode, verify the page is on localhost or HTTPS, allow camera access in the browser address bar, and retry. If the hand model cannot load, run `npm install` with network access or use mouse controls. For WebGL errors, enable hardware acceleration and use a current browser.
# HoloHand
