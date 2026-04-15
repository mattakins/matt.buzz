// Shared topbar and functionality for matt.buzz

// Weather SVG icons
const weatherIcons = {
  sunny: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  'partly-cloudy': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M17.66 17.66l1.41 1.41M2 12h2M6.34 17.66l-1.41 1.41M17.07 4.93l1.41-1.41"/><circle cx="12" cy="10" r="4"/><path d="M15.5 14.5a4 4 0 1 1-7.84 1.5h7.84z"/></svg>',
  cloudy: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
  rainy: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M12 19v3M8 19v3M16 19v3"/></svg>',
  stormy: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 17H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M13 17l-4 5h5l-1 4"/></svg>',
  snowy: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01"/></svg>',
  foggy: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10h18M3 14h18M3 18h18"/></svg>'
};

// Weather mapping
const weatherMapping = {
  0: { icon: 'sunny', desc: 'Clear skies' },
  1: { icon: 'sunny', desc: 'Mostly clear' },
  2: { icon: 'partly-cloudy', desc: 'Partly cloudy' },
  3: { icon: 'cloudy', desc: 'Overcast' },
  45: { icon: 'foggy', desc: 'Foggy' },
  48: { icon: 'foggy', desc: 'Ice fog' },
  51: { icon: 'rainy', desc: 'Light drizzle' },
  53: { icon: 'rainy', desc: 'Drizzle' },
  55: { icon: 'rainy', desc: 'Dense drizzle' },
  61: { icon: 'rainy', desc: 'Light rain' },
  63: { icon: 'rainy', desc: 'Rain' },
  65: { icon: 'rainy', desc: 'Heavy rain' },
  71: { icon: 'snowy', desc: 'Light snow' },
  73: { icon: 'snowy', desc: 'Snow' },
  75: { icon: 'snowy', desc: 'Heavy snow' },
  80: { icon: 'rainy', desc: 'Rain showers' },
  95: { icon: 'stormy', desc: 'Thunderstorm' }
};

// Initialize topbar
function initTopbar(showBackButton = false) {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  // Build topbar HTML
  const backButton = showBackButton ? `
    <a href="index.html" class="topbar__back" aria-label="Go back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </a>
  ` : '';

  topbar.innerHTML = `
    ${backButton}
    <div class="topbar__location">
      <div class="topbar__location-inner">
        <span>Vancouver, WA</span>
        <span class="topbar__dot">•</span>
        <span id="time">--:-- --</span>
        <span class="topbar__dot">•</span>
        <span id="weatherIcon"></span>
        <span id="weatherText"></span>
        <span class="topbar__dot">•</span>
        <span>Vancouver, WA</span>
        <span class="topbar__dot">•</span>
        <span id="time2">--:-- --</span>
        <span class="topbar__dot">•</span>
        <span id="weatherIcon2"></span>
        <span id="weatherText2"></span>
        <span class="topbar__dot">•</span>
      </div>
    </div>
    <button class="topbar__theme" id="themeToggle" aria-label="Toggle theme">
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>
  `;

  // Initialize theme
  initTheme();

  // Initialize weather and time
  initWeather();
  initTime();
}

// Theme toggle
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
}

// Weather display
function setWeatherDisplay(icon, text) {
  document.querySelectorAll('.marquee-weather-icon').forEach(el => {
    el.innerHTML = weatherIcons[icon] || '';
  });
  document.querySelectorAll('.marquee-weather-text').forEach(el => {
    el.textContent = text;
  });
}

function initWeather() {
  // Load cached weather
  const cachedWeather = localStorage.getItem('weather_cache');
  if (cachedWeather) {
    const { icon, text } = JSON.parse(cachedWeather);
    setWeatherDisplay(icon, text);
  }

  // Fetch fresh weather
  fetch('https://api.open-meteo.com/v1/forecast?latitude=45.6387&longitude=-122.6615&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America/Los_Angeles')
    .then(res => res.json())
    .then(data => {
      const temp = Math.round(data.current.temperature_2m);
      const code = data.current.weather_code;
      const weather = weatherMapping[code] || { icon: 'cloudy', desc: '' };
      const text = `${temp}°F ${weather.desc}`;
      setWeatherDisplay(weather.icon, text);
      localStorage.setItem('weather_cache', JSON.stringify({ icon: weather.icon, text }));
    })
    .catch(() => {});
}

// Time with blinking colon
let colonVisible = true;

function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Los_Angeles'
  });
  const [hourMin, ampm] = time.split(' ');
  const [hour, min] = hourMin.split(':');
  const colon = colonVisible ? ':' : '<span style="opacity:0">:</span>';

  document.querySelectorAll('.marquee-time').forEach(el => {
    el.innerHTML = `${hour}${colon}${min} ${ampm}`;
  });
}

function initTime() {
  updateTime();
  setInterval(() => {
    colonVisible = !colonVisible;
    updateTime();
  }, 500);
}

// Clone marquee segments to fill viewport
function initMarquee() {
  const inner = document.querySelector('.topbar__location-inner');
  const segment = document.querySelector('.marquee-segment');
  if (!inner || !segment) return;

  // Clear existing clones (keep original)
  const clones = inner.querySelectorAll('.marquee-segment-clone');
  clones.forEach(c => c.remove());

  // Calculate how many copies needed to fill 2x viewport width
  const segmentWidth = segment.offsetWidth;
  const viewportWidth = window.innerWidth;
  const copiesNeeded = Math.ceil((viewportWidth * 2) / segmentWidth) + 1;

  // Clone segments
  for (let i = 0; i < copiesNeeded; i++) {
    const clone = segment.cloneNode(true);
    clone.classList.add('marquee-segment-clone');
    inner.appendChild(clone);
  }

  // Set animation duration based on content width (constant speed: ~25px/sec - original feel)
  const totalWidth = inner.scrollWidth;
  const pixelsPerSecond = 25;
  const duration = totalWidth / 2 / pixelsPerSecond;
  inner.style.animationDuration = `${duration}s`;
}

// Initialize marquee on load and resize
function setupMarquee() {
  initMarquee();
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initMarquee, 200);
  });
}
