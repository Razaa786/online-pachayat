# Online Panchayat

A simple, responsive single‑page site (HTML, CSS, JS) for village panchayat services with clean UI, animations, and dark mode.

## How to Run
- Double‑click `index.html`, or on Windows PowerShell:
```powershell
start .\index.html
```

## What’s Inside
- Hero section with animated visuals and village background
- Top navigation (mobile friendly)
- Services grid
- Grievance form with basic validation and toast
- Announcements news ticker
- Meeting schedule and members
- Case status lookup (mock)
- Dark mode toggle (remembers your choice)
- Scroll‑reveal animations

## Customize
- Background image: edit in `styles.css`:
```css
:root { --hero-bg: url('YOUR_IMAGE_URL'); }
```
- Colors/theme: edit variables in `styles.css` under `:root` and `.light`.
- Text/content: update sections in `index.html`.

## Project Structure
```
index.html   # Markup and sections
styles.css   # Styles, themes, animations
script.js    # Interactions and UI behavior
README.md    # This guide
```

## Notes
- Client-side validation is for demo. For production, add a backend and server‑side checks.
