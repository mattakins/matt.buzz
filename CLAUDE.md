# matt.buzz

Personal portfolio site for Matt Akins - Growth & DTC Ecom Leader.

## Tech Stack

- Static HTML/CSS/JS (no build step)
- Hosted on GitHub Pages at matt.buzz
- View Transitions API for page navigation

## File Structure

```
├── index.html        # Homepage with bento grid
├── values.html       # Core values page
├── style.css         # Shared styles
├── shared.js         # Shared JS (weather, time, theme)
├── favicon.svg       # Up-right arrow in purple
└── assets/
    ├── family.mp4    # Looping video (boomerang effect)
    └── Matt Akins - Resume.pdf
```

## Design System

### Colors (CSS Variables in style.css)

**Light mode (default):**
- `--bg`: #f5f5f4
- `--card-bg`: #ffffff
- `--text`: #1a1a1a
- `--text-muted`: #6b6b6b
- `--border`: rgba(0, 0, 0, 0.08)

**Dark mode (`[data-theme="dark"]`):**
- `--bg`: #121212
- `--card-bg`: #1e1e1e
- `--text`: #f5f5f4
- `--text-muted`: #a0a0a0

### Card Colors (Bento Tiles)

```css
.card--linkedin   { background: #0077b5; }
.card--github     { background: #24292f; }
.card--youtube    { background: #CD201F; }
.card--email      { background: #ec4899; }
.card--about      { background: #6366f1; }  /* Values tile */
.card--resume     { background: #10b981; }
```

### Value Icon Colors (values.html)

```css
.value:nth-child(1) .value__icon { background: #ef4444; }  /* No Theater - Red */
.value:nth-child(2) .value__icon { background: #06b6d4; }  /* Simplicity - Cyan */
.value:nth-child(3) .value__icon { background: #f59e0b; }  /* Full-Stack - Amber */
.value:nth-child(4) .value__icon { background: #3b82f6; }  /* Data - Blue */
.value:nth-child(5) .value__icon { background: #8b5cf6; }  /* A-Players - Purple */
.value:nth-child(6) .value__icon { background: #ec4899; }  /* Love - Pink */
```

## Key Components

### Topbar (Marquee)

Both pages share a scrolling marquee topbar with:
- Location: Vancouver, WA
- Live time (blinking colon, PST/PDT)
- Weather icon + temperature + description
- Theme toggle (sun/moon)

The marquee duplicates content for seamless looping with CSS animation.

### Weather

- API: Open-Meteo (no API key needed)
- Location: Vancouver, WA (lat: 45.6387, lng: -122.6615)
- Cached in localStorage as `weather_cache`
- SVG icons for conditions (sunny, cloudy, rainy, snowy, etc.)

### Theme Toggle

- Stored in localStorage as `theme`
- Applied via `data-theme` attribute on `<html>`
- Default: light

### Page Transitions

Uses View Transitions API with slide animations:
- **index.html**: Slides right out, left in (for returning)
- **values.html**: Slides left out, right in (for entering)

```css
@view-transition { navigation: auto; }
```

### Family Video

- Source: `assets/family.mp4`
- Boomerang loop (plays forward then reverse)
- 1.5s source footage, 1.5x slowdown = ~4.5s total loop
- Crop: 1086x1308 at x=240, scaled to 498x600

To regenerate from source video:
```bash
ffmpeg -y -i FullSizeRender.mov -t 1.5 \
  -vf "crop=1086:1308:240:0,scale=498:600" \
  -c:v libx264 -preset fast -crf 18 -an -pix_fmt yuv420p \
  /tmp/family_trim.mp4

ffmpeg -y -i /tmp/family_trim.mp4 -vf "setpts=1.5*PTS" -r 30 \
  -c:v libx264 -preset slow -crf 23 -an -pix_fmt yuv420p \
  /tmp/family_fwd.mp4

ffmpeg -y -i /tmp/family_fwd.mp4 -vf "reverse" \
  -c:v libx264 -preset slow -crf 23 -an -pix_fmt yuv420p \
  /tmp/family_rev.mp4

ffmpeg -y -i /tmp/family_fwd.mp4 -i /tmp/family_rev.mp4 \
  -filter_complex "[0:v][1:v]concat=n=2:v=1:a=0[out]" \
  -map "[out]" -c:v libx264 -preset slow -crf 23 \
  -movflags +faststart -pix_fmt yuv420p \
  assets/family.mp4
```

### Noise Texture

Applied via `body::before` pseudo-element using SVG feTurbulence filter at 30% opacity.

## shared.js Functions

```js
initTheme()      // Initialize theme from localStorage, bind toggle
initWeather()    // Load cached weather, fetch fresh from API
initTime()       // Start blinking colon clock, update every 500ms
```

Both pages call these on load. The topbar HTML is in each page (not injected).

## Layout Structure

### Homepage (index.html)

```
.container
  .topbar (marquee + theme toggle)
  .bento
    .bento__left (family video card)
    .bento__right
      .profile (name, title, bio)
      .bento__cards (6 tiles: email, linkedin, youtube, github, resume, values)
    .modal#emailModal (copy confirmation)
```

### Values Page (values.html)

```
.container
  .topbar (back arrow + marquee + theme toggle)
  .about
    h1.about__title "My Values"
    .about__values
      .value (icon + title + description) x6
```

## Core Values Content

1. **No Theater** - Marketing without measurement is noise
2. **Simplicity Wins** - Can't explain in a sentence? Going to zero
3. **Full-Stack Speed** - Build the landing page, ship the test, own the funnel
4. **Data Over Vibes** - Intuition starts hypotheses, data finishes them
5. **A-Players, Clear Lanes** - Talented people, defined ownership, freedom
6. **Love is the Point** - Family and Jesus, relationships are all we have

## External Links

- LinkedIn: linkedin.com/in/matthewakins
- GitHub: github.com/mattakins
- YouTube: youtube.com/@matt_buzz
- Email: matt@matt.buzz (copies to clipboard on click)

## Adding New Pages

1. Create new HTML file
2. Include shared CSS/JS:
   ```html
   <link rel="stylesheet" href="style.css">
   <script src="shared.js"></script>
   ```
3. Add view transition CSS in `<style>` block
4. Add topbar with back button (copy from values.html)
5. Call `initTheme()`, `initWeather()`, `initTime()` on load
6. Update links from other pages
