# Product Contract

## What This Is

`alex-0d18-test-1` is a static browser clock. It renders a large centered digital clock and updates the displayed local time once per second.

## Current Behavior

- `index.html` loads `styles.css` and deferred `clock.js`.
- The page contains a single clock display element: `#clock`.
- `clock.js` renders the current local time on `DOMContentLoaded`, then updates it every 1000 ms.
- Time is displayed as zero-padded `HH:MM:SS`.
- The layout centers the clock using CSS grid, large monospace typography, and light/dark color-scheme support.

## Architecture

- No application framework or bundler is used; the app is plain HTML, CSS, and JavaScript at the repository root.
- `formatHHMMSS(date)` is a pure function in `clock.js` and is exported for Node tests while also being exposed on `window` in browsers.
- DOM behavior is guarded so requiring `clock.js` in Node does not start browser-only logic.
- The app can be opened directly as `index.html` or served from the repository root.

## Testing

- `npm test` runs all tests.
- Unit tests use Node's built-in test runner and cover midnight, noon, single-digit padding, and end-of-day formatting.
- End-to-end coverage uses Playwright with Chromium.
- Playwright starts a static server with `python3 -m http.server 8080 --bind 0.0.0.0`, loads the page, verifies `#clock` matches `HH:MM:SS`, waits about two seconds, and verifies the displayed time changed.

## Conventions

- Keep runtime code dependency-free unless there is a clear need.
- Keep formatting logic separate from DOM updates.
- Generated directories such as `node_modules/`, `playwright-report/`, and `test-results/` are ignored.
