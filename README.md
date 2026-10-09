# HoloHand ✋✨

### Interactive 3D Gesture Intelligence Platform

**Explore it. Explode it. Look inside.**

HoloHand is a browser-based 3D visualization workspace that combines real-time hand tracking, gesture-driven interaction, and holographic point-cloud rendering. Explore procedural educational models, separate their components using exploded views, and manipulate virtual objects using natural hand gestures.

Built with **TypeScript, Three.js, WebGL, MediaPipe, and Vite**, HoloHand also supports mouse, touch, and keyboard controls for accessible interaction without a webcam.

---

## 📸 Project Preview

### Main Dashboard

![HoloHand dashboard displaying the exploded Human Brain model](public/images/holohand-dashboard.png)

The dashboard brings together the 3D viewport, model selection, gesture guidance, tracking status, and scene controls in a dark holographic interface.

### Model Visualization

![HoloHand 3D model visualization](public/images/holohand-models.png)

Explore mechanical and anatomical models with animated point clouds, component separation, and visual highlighting.

### Gesture Interaction

![HoloHand hand gesture interaction](public/images/holohand-gestures.png)

Use webcam-based hand tracking to interact with virtual objects, or switch to mouse and keyboard controls whenever needed.

> **Note:** Place the three images in `public/images/` using the filenames shown above. Replace the filenames if your actual images use different names.

---

## 🎬 Demo Video

Watch the HoloHand demonstration to explore the interface, 3D models, exploded-view animations, and gesture-driven interactions.

**▶️ [Watch the HoloHand Demo Video](public/videos/holohand-demo.mp4)**

**Video location:** `public/videos/holohand-demo.mp4`

> **GitHub note:** GitHub may not render an HTML `<video>` element inside a README. The relative link above provides a way to access the repository file, but it is not guaranteed to produce an inline player. For inline playback, upload the video through GitHub's supported video attachment workflow and use the generated URL.

---

## ✨ Features

### 🖐️ Real-Time Hand Tracking

* Webcam-based hand landmark detection using MediaPipe Hand Landmarker.
* Support for zero, one, or two detected hands, where implemented.
* Gesture stabilization to reduce accidental transitions.
* Configurable tracking behavior and sensitivity, where supported.
* Browser-based vision processing without requiring a dedicated application backend.

### 🧠 Gesture-Based Interaction

The intended gesture controls include:

* **Open palm:** Expand the model.
* **Closed fist:** Assemble the model.
* **Hand movement:** Rotate or tilt the scene.
* **Index finger pointing:** Highlight or select components.
* **Pinching:** Grab and drag components.
* **Two-hand movement:** Control zoom.
* **Peace sign:** Switch between models.

Actual behavior depends on the implemented gesture mappings, tracking confidence, lighting, and camera position.

### 🌌 Holographic 3D Rendering

* Three.js and WebGL-based rendering.
* Custom GLSL shader effects.
* Animated point-cloud geometry.
* Exploded and assembled model views.
* Component highlighting and selection.
* Smooth model transitions.
* Interactive camera and scene controls.
* GPU resource management.

### 🧩 Educational 3D Models

HoloHand is designed to support four procedural educational models.

| Model                  | Example Components                                                     |
| ---------------------- | ---------------------------------------------------------------------- |
| Turbofan Jet Engine    | Fan, compressor stages, combustor, turbines, shaft, nozzle             |
| Radial Aircraft Engine | Cylinders, pistons, connecting rods, crankshaft                        |
| Sports Car             | Body, chassis, wheels, brakes, drivetrain, interior                    |
| Human Brain            | Cerebral regions, lobes, cerebellum, brainstem, represented structures |

These models are intended for interactive visualization and education. They are not validated CAD assemblies, engineering simulations, or clinical anatomical models.

### 🖱️ Multiple Input Methods

HoloHand can be used without webcam input.

* Mouse-based rotation and zoom.
* Click or tap to select components.
* Keyboard shortcuts, where implemented.
* Accessible buttons and sliders.
* Manual camera and model controls.

### 🤖 Interaction Agent

The intended interaction architecture separates perception, gesture classification, intent resolution, action validation, and scene execution.

A typed interaction interface can help prevent invalid actions and keep gesture recognition independent of rendering internals. Core interaction functionality is designed not to require a paid LLM API.

---

## 🛠️ Technology Stack

| Technology             | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| TypeScript             | Typed application logic                    |
| JavaScript ES Modules  | Modular browser execution                  |
| Three.js               | 3D scene management and rendering          |
| WebGL / GLSL           | GPU rendering and custom shader effects    |
| MediaPipe Tasks Vision | Hand landmark detection                    |
| WebAssembly            | Vision runtime support                     |
| Vite                   | Development server and production bundling |
| Vitest                 | Unit and integration testing               |
| Playwright             | Browser end-to-end testing                 |
| ESLint                 | Code quality and linting                   |
| Prettier               | Code formatting                            |

The actual dependencies and versions are defined by the project's `package.json` and lockfile.

---

## 💻 System Requirements

* Node.js 18 or later, or the version required by the installed dependencies.
* npm.
* A modern browser with WebGL support.
* Webcam access for gesture-based interaction.
* `localhost` during development or HTTPS in deployment for camera access.

A dedicated GPU is not mandatory. Integrated graphics may be sufficient for moderate scenes, while hardware acceleration is recommended for smoother rendering and higher particle counts.

Performance depends on the processor, graphics hardware, browser, rendering resolution, and model complexity.

---

## 🚀 Installation and Setup

### 1. Clone the Repository

Replace the placeholder URL with your actual repository URL.

```bash
git clone <YOUR_REPOSITORY_URL>
cd HoloHand-Gesture-Agent-3D
```

If you have already downloaded the project, open a terminal in its root directory instead.

### 2. Install Dependencies

```bash
npm install
```

If the project includes a setup script, run the configured command to prepare the required MediaPipe assets. Network access may be necessary if those assets are not already available locally.

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL printed in your terminal. With the default Vite configuration, it is commonly:

```text
http://localhost:5173
```

### 4. Start Using HoloHand

1. Open the application in your browser.
2. Select **Start Camera**.
3. Grant permission to access your webcam.
4. Wait for the hand-tracking model to initialize.
5. Place your hand within the camera's field of view.
6. Follow the gesture guide to interact with the 3D scene.

Alternatively, select **Use Mouse Instead** or use the manual controls if you do not want to use the webcam.

---

## 🖐️ Gesture Controls

| Gesture                          | Intended Action                      |
| -------------------------------- | ------------------------------------ |
| Open palm                        | Expand the model                     |
| Closed fist                      | Assemble the model                   |
| Move or twist hand               | Rotate or tilt the model             |
| Point with index finger          | Highlight or select a component      |
| Pinch and hold                   | Grab and drag a component            |
| Release pinch                    | Drop the selected component          |
| Move two hands apart or together | Zoom the scene                       |
| Peace sign                       | Switch to the next model             |
| No hand detected                 | Return to a safe, non-dragging state |

Gesture recognition is not perfect. Hand occlusion, poor lighting, camera distance, and ambiguous poses can affect recognition accuracy.

The exact mappings depend on the current application implementation.

---

## ⌨️ Keyboard and Manual Controls

HoloHand also provides manual interaction methods.

| Input        | Intended Action                                 |
| ------------ | ----------------------------------------------- |
| Mouse drag   | Rotate the scene                                |
| Mouse wheel  | Zoom                                            |
| Click or tap | Select or inspect a component                   |
| Space        | Toggle assembled/exploded state, if implemented |
| Arrow keys   | Navigate or control the scene, as implemented   |
| `1`–`4`      | Select a model, if implemented                  |
| `R`          | Reset the view, if implemented                  |

Check the application's help panel and input bindings for the shortcuts supported by your current build.

---

## 🏗️ Architecture Overview

HoloHand is designed around a modular processing pipeline:

```text
┌──────────────────────────┐
│      Webcam / Input      │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ MediaPipe Hand Detection │
│    Landmark Extraction  │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│   Landmark Processing    │
│  Gesture Classification  │
│  Temporal Stabilization  │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│    Interaction Agent     │
│     Intent Resolution    │
│     Action Validation    │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│   Interaction Interface  │
│    Scene State Updates   │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│       Three.js Scene     │
│    Models and Shaders    │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│      WebGL Rendering     │
└──────────────────────────┘
```

### Architectural Responsibilities

* **Vision layer:** Camera management, MediaPipe initialization, and landmark output.
* **Gesture layer:** Landmark geometry, gesture classification, confidence checks, and stabilization.
* **Agent layer:** Intent resolution, action validation, and interaction dispatch.
* **Scene layer:** Camera controls, picking, object manipulation, animation, and scene state.
* **Rendering layer:** Point-cloud generation, shader management, and exploded-view effects.
* **Model layer:** Procedural geometry, component definitions, and model registration.
* **UI layer:** Controls, tracking status, model selection, settings, and error feedback.

See `ARCHITECTURE.md` for implementation-specific details if the file is included in the repository.

---

## 📂 Project Structure

The following is a representative project structure. Your actual repository may differ.

```text
HoloHand-Gesture-Agent-3D/
├── public/
│   ├── images/
│   │   ├── holohand-dashboard.png
│   │   ├── holohand-models.png
│   │   └── holohand-gestures.png
│   ├── videos/
│   │   └── holohand-demo.mp4
│   ├── models/
│   │   └── hand_landmarker.task
│   └── wasm/
├── scripts/
│   └── setup.mjs
├── src/
│   ├── app/
│   ├── vision/
│   ├── gestures/
│   ├── agent/
│   ├── interaction/
│   ├── scene/
│   ├── rendering/
│   ├── models/
│   ├── ui/
│   ├── utils/
│   └── main.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── ARCHITECTURE.md
└── SECURITY.md
```

Keep this documentation synchronized with your actual repository. Do not create empty directories or placeholder files solely to match this example.

---

## 🧪 Testing and Quality Assurance

Run the quality checks configured in your `package.json`.

```bash
npm run typecheck
npm test
npm run lint
npm run format:check
npm run test:e2e
npm run build
```

Not every repository defines all these scripts. Check `package.json` and use only the commands configured in your project.

To preview a production build locally, if the corresponding script is configured:

```bash
npm run preview
```

### Recommended Test Coverage

* Gesture geometry and classification.
* Gesture stabilization and pinch transitions.
* Model registration and component identifiers.
* Explosion animation and model switching.
* Interaction-agent intent validation.
* Camera initialization and failure recovery.
* Application start/stop lifecycle.
* Resource cleanup.
* Mouse and keyboard interaction.
* Production build and browser rendering.

Use mocks for webcam and MediaPipe dependencies in automated tests. Browser tests should be able to exercise manual controls without requiring a physical camera.

---

## ⚡ Performance

Performance improvements to consider include:

* Reusing geometry buffers and materials.
* Avoiding unnecessary allocations inside animation loops.
* Limiting concurrent hand-tracking inference operations.
* Adjusting particle density to device capabilities.
* Reducing work when the browser tab is hidden.
* Disposing of GPU resources when models or scenes are removed.
* Providing a simplified rendering fallback when necessary.

A target of 60 FPS is useful for development, but actual frame rates must be measured on representative hardware.

---

## 🔒 Privacy and Security

HoloHand is designed around local browser processing. Verify the actual implementation and network behavior before making stronger privacy claims.

Recommended practices include:

* Request webcam access only after a clear user action.
* Explain why camera access is required.
* Stop media tracks when tracking stops or the application is disposed.
* Do not record or upload video unless a separately documented feature explicitly does so.
* Document external MediaPipe asset downloads and CDN fallbacks.
* Never expose private API keys in frontend code.
* Validate external asset sources and handle loading failures.
* Avoid collecting unnecessary personal data.

Review `SECURITY.md` if it is present in the repository.

---

## 🧰 Troubleshooting

### Camera Access Fails

* Use `localhost` or HTTPS.
* Allow camera access in your browser's site settings.
* Check whether another application is using the webcam.
* Confirm that a camera device is available.
* Retry startup or use manual controls.

### MediaPipe Does Not Initialize

* Check the browser console for errors.
* Verify that the hand-landmark model and WASM assets exist.
* Confirm that configured asset URLs are reachable.
* Check your network connection if a CDN fallback is used.
* Retry initialization after resolving the reported error.

### The 3D Scene Is Slow

* Use a current browser.
* Enable hardware acceleration if available.
* Reduce rendering resolution or particle density if supported.
* Close GPU-intensive applications.
* Inspect WebGL and shader errors in the developer console.

### Gesture Recognition Is Unreliable

* Improve lighting.
* Keep your hand fully visible.
* Avoid rapid movements while testing.
* Adjust your distance from the camera.
* Check the tracking status and gesture confidence if available.

### The Demo Video Does Not Play

* Verify that `public/videos/holohand-demo.mp4` exists.
* Confirm that the video has been committed and pushed to the repository.
* Use the relative Markdown link provided in the Demo Video section.
* If GitHub does not render the video inline, upload it through GitHub's supported video attachment workflow and use the generated URL.
* Alternatively, host the video on a video platform and link to it.

### A Script Is Missing

Inspect `package.json` to determine which commands are configured. Install or configure the required tooling before running the associated check.

---

## 🗺️ Roadmap

Potential future improvements include:

* More educational and mechanical models.
* Improved gesture calibration and personalized sensitivity.
* Model quality presets for different hardware.
* Better component descriptions and educational annotations.
* Enhanced accessibility and localization.
* Expanded automated browser testing.
* Optional AI-assisted scene exploration through a validated interaction interface.
* Additional model import formats compatible with the rendering architecture.

Roadmap items are proposals, not guarantees that these features are already implemented.

---

## 🤝 Contributing

Contributions and improvements are welcome.

1. Create a branch for your change.
2. Keep vision, gestures, agent, scene, model, and UI logic separated.
3. Add tests for new functionality and bug fixes.
4. Run the available quality checks.
5. Update documentation when behavior or configuration changes.
6. Document new external dependencies and network behavior.

---

## 📄 License

See the repository's `LICENSE` file for the applicable terms.

If no license file is present, establish the intended license before redistributing the source code or assets.

---

## 🙌 Acknowledgments

HoloHand builds on the broader web graphics and computer-vision ecosystem.

* [Three.js Documentation](https://threejs.org/docs/)
* [MediaPipe Hand Landmarker for Web](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker/web_js)
* [Vite Documentation](https://vite.dev/guide/)
* [Vitest Documentation](https://vitest.dev/guide/)
* [Playwright Documentation](https://playwright.dev/docs/intro)

---

**HoloHand — Explore the invisible structure of things through natural interaction.** ✋✨
