# Security and Privacy

- Camera permission is requested only after the user activates **Start camera**.
- Video frames and hand landmarks are processed in the browser and are not recorded, persisted, or uploaded by HoloHand.
- The app has no backend, authentication, telemetry, API keys, or LLM dependency.
- MediaPipe WASM and the hand model are copied to `public/` during installation when the setup download succeeds. The runtime has an explicit CDN fallback for the pinned MediaPipe package and model URL; using that fallback requires network access.
- Camera tracks are stopped when the user stops the camera or the page is hidden/unloaded.
- User-visible errors do not include camera payloads or raw landmark data.

Run the app on `http://localhost` or HTTPS. Report security issues privately to the project maintainer rather than publishing camera or dependency details in an issue.
