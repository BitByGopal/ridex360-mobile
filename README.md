# RideX360

**Smart Mobility. Safer Journeys. Complete Visibility.**

RideX360 is a mobile-first transportation, safety and mobility management platform prototype. It is built as a single, reconfigurable "transport engine" — GPS tracking, routing, scheduling, attendance and safety — that adapts to the organization using it, instead of being a single-purpose school-bus app.

This repository contains a static, front-end-only prototype (no backend required) designed to demonstrate the product experience: live vehicle tracking, route status, attendance/absence handling, and a driver-side view, all wrapped in a real vertical mobile app layout — not a desktop site, and not a phone-shaped mockup graphic.

---

## Features

- **Live vehicle tracking** — a simulated moving vehicle marker, distance and ETA on a route map
- **Route management** — morning/evening route switching, stop sequencing, automatic recalculation when a passenger is marked absent
- **Attendance / absence workflow** — mark a passenger absent and watch their stop disappear from the driver's route in real time
- **Trip history** — past and skipped trips with tappable detail view
- **Driver mode** — a role switch that reveals the route, live passenger list, a **replacement-driver** scenario, and a **traffic re-routing** scenario with a one-tap "Use Alternative Route" action
- **Organization-based configuration** — one interface, seven industries, switchable from a bottom sheet
- **User profile & settings** — notifications, live location sharing, and app mode

## Supported Organizations

RideX360's core engine is reused across:

| Organization | Passenger role |
|---|---|
| Schools | Students (viewed by Parents) |
| Colleges | Students |
| Companies | Employees |
| Hospitals | Staff |
| Factories | Workers |
| Hotels | Employees |
| Industrial campuses | Workers |

Selecting an organization updates terminology, routes, sample passengers, and trip history throughout the whole app — the UI and interaction model stay identical.

## Technology Stack

- **HTML5** — semantic, single-page app shell
- **CSS3** — custom properties (design tokens), no framework/build step
- **Vanilla JavaScript (ES6+)** — app state, rendering, and interactions, no framework dependency
- **Google Fonts** — Fraunces (display), Inter (body), IBM Plex Mono (data/ETA)

No build tooling, bundler, or backend is required — this keeps the prototype easy to read, fork, and deploy anywhere that serves static files.

## Project Structure

```
ridex360-mobile/
├── index.html          # App shell: Home, Track, Trips, Route (driver), Profile screens
├── css/
│   └── styles.css      # Design tokens + all component styling
├── js/
│   └── app.js          # Organization/role data model, state, rendering, interactions
├── assets/             # Reserved for icons/images (none required — emoji used as placeholders)
├── README.md
└── .gitignore
```

## Getting Started

No installation or build step is required — it's a static site.

**Option A — just open it**
Double-click `index.html`, or open it in a browser directly.

**Option B — local static server (recommended, avoids browser file:// restrictions)**
```bash
# Python 3
python3 -m http.server 5500

# or Node (no install needed)
npx serve .
```
Then visit `http://localhost:5500` (or the port shown).

For the truest feel, open it on an actual phone, or shrink your desktop browser window to a narrow width.

## Screenshots

_Add screenshots of the Home, Track, Trips, Driver Route, and Profile screens here before publishing._

```
assets/screenshot-home.png
assets/screenshot-track.png
assets/screenshot-trips.png
assets/screenshot-driver.png
assets/screenshot-profile.png
```

## Live Demo

_Add your deployed URL here once published (see Deployment below)._

## Deployment

This is a static site, so it can be deployed for free with **GitHub Pages**:

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish a URL in the form `https://<your-username>.github.io/<repo-name>/` within a minute or two.

Any other static host (Netlify, Vercel, Cloudflare Pages) works the same way — just point it at the repository root, with no build command.

## Notes on Scope

This is a demonstration prototype, prioritizing UX and product flow over production infrastructure:

- Vehicle position is simulated on a timer, not fed by real GPS hardware.
- Organization, route, and passenger data are static sample data, not a live database.
- Safety and route-optimization features are represented as functioning UI flows (e.g. automatic stop removal, replacement-driver handoff, traffic re-routing) rather than connected to a real backend.

---

Built as a product prototype for demonstration and customer-discovery purposes.
