# RideInSync App — UI kit

Interactive click-through of the RideInSync iOS app, composed from the design-system components. Open `index.html`.

**Flow:** Splash → Name onboarding → Device connect → Preferences → Voice → Route preview → 3D navigation.

Screens (JSX, each registers to `window`):
- `PhoneFrame.jsx` — 390×844 device shell + status bar
- `Splash.jsx`, `Onboarding.jsx`, `App.jsx` (Connect), `Preferences.jsx`, `Voice.jsx`, `RoutePreview.jsx`, `Navigation.jsx`
- `MiniMap.jsx` — CSS/SVG placeholder map (no real map tiles were provided; route line uses the accent).

Screens compose `Button`, `Input`, `SegmentedControl`, `Stepper`, `BackButton`, `TurnRow`, `TransportBar`, `Card`, `NavInfoCard`, `ConnectionCard`, `VoiceBlob`, `Icon` from the bundle.
