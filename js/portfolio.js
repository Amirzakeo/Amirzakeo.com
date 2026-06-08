const email = 'amirhoseinghs.94@gmail.com';
const toast = document.getElementById('toast');
const themeButtons = document.querySelectorAll('[data-theme-toggle]');
const THEME_KEY = 'amir-portfolio-theme';

function getThemeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('theme') === 'light') return 'light';
  if (params.get('theme') === 'dark') return 'dark';
  return '';
}

function syncThemeLinks(theme) {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || !href.includes('.html')) return;
    const hashIndex = href.indexOf('#');
    const queryIndex = href.indexOf('?');
    const cutIndex = [hashIndex, queryIndex].filter((index) => index >= 0).sort((a, b) => a - b)[0];
    const base = cutIndex === undefined ? href : href.slice(0, cutIndex);
    const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
    link.setAttribute('href', base + '?theme=' + theme + hash);
  });
}

function setTheme(theme) {
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  themeButtons.forEach((button) => {
    const isLight = nextTheme === 'light';
    button.textContent = isLight ? 'Dark theme' : 'White theme';
    button.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to white theme');
    button.setAttribute('aria-pressed', String(isLight));
  });
  syncThemeLinks(nextTheme);
}

try {
  const initialTheme = getThemeFromUrl() || localStorage.getItem(THEME_KEY) || document.documentElement.dataset.theme || 'dark';
  setTheme(initialTheme);
  localStorage.setItem(THEME_KEY, initialTheme);
} catch (error) {
  setTheme(getThemeFromUrl() || document.documentElement.dataset.theme || 'dark');
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied: ' + email);
  } catch (error) {
    showToast('Email: ' + email);
  }
}

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', copyEmail);
});

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try { localStorage.setItem(THEME_KEY, nextTheme); } catch (error) {}
  });
});

const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeaderVisibility() {
    const currentScrollY = Math.max(window.scrollY, 0);
    const delta = currentScrollY - lastScrollY;

    if (currentScrollY <= 8) {
      siteHeader.classList.remove('is-hidden');
    } else if (delta < -1) {
      siteHeader.classList.remove('is-hidden');
    } else if (delta > 6 && currentScrollY > 72) {
      siteHeader.classList.add('is-hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateHeaderVisibility);
  }, { passive: true });
}

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
  const prev = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const dotsWrap = carousel.querySelector('.carousel-dots');
  if (!slides.length) return;

  let index = 0;
  const dots = slides.map((slide, slideIndex) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', 'Show media ' + (slideIndex + 1));
    dot.addEventListener('click', () => showSlide(slideIndex));
    if (dotsWrap) dotsWrap.appendChild(dot);
    return dot;
  });

  function showSlide(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      if (dots[slideIndex]) dots[slideIndex].classList.toggle('is-active', active);
    });
  }

  if (prev) prev.addEventListener('click', () => showSlide(index - 1));
  if (next) next.addEventListener('click', () => showSlide(index + 1));
  showSlide(0);
});

document.querySelectorAll('[data-cv-timeline]').forEach((timeline) => {
  const tabs = Array.from(timeline.querySelectorAll('[data-timeline-tab]'));
  const panels = Array.from(timeline.querySelectorAll('.timeline-panel'));
  if (!tabs.length || !panels.length) return;

  function showTimelinePanel(panelId) {
    tabs.forEach((tab) => {
      const active = tab.dataset.timelineTab === panelId;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });

    panels.forEach((panel) => {
      const active = panel.id === panelId;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => showTimelinePanel(tab.dataset.timelineTab));
  });
});

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const reason = data.get('reason');
    const from = data.get('from');
    const message = data.get('message');
    const subject = encodeURIComponent(reason + ' - portfolio contact');
    const body = encodeURIComponent('From: ' + from + '\n\n' + message);
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    showToast('Opening email draft');
  });
});
