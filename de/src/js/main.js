/**
 * SnappinQuiz - Main JavaScript
 * Handles theme, language, interactivity, animations, and UI components
 */

// ===========================================
// TRANSLATIONS
// ===========================================
const SUPPORTED_LOCALES = ["de", "en"];
const DEFAULT_LOCALE = "de";
const KNOWN_ROUTE_SEGMENTS = new Set(["app", "profile-mockup", "business", "about-us", "courses", "blog", "pricing", "preise", "impressum", "datenschutzerklarung", "faq"]);

const localeMessages = {
  de: {
    "form.error.required": "Bitte füllen Sie alle Pflichtfelder aus.",
    "form.error.email": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    "form.success": "Nachricht erfolgreich gesendet!",
    "courses.results.all": "Alle Kurse",
    "courses.results.count_suffix": "Kurse",
    "courses.results.empty": "Keine Kurse in dieser Kategorie.",
    "courses.results.pending": "Weitere passende Kurse verfuegbar. Scrollen Sie weiter oder laden Sie mehr.",
    "landing.courses.results.empty": "Keine Kurse in dieser Vorschau. Alle Kurse anzeigen.",
    "blog.results.all": "Aktuelle Artikel",
    "blog.results.count_suffix": "Artikel",
    "blog.results.empty": "Keine Artikel in dieser Kategorie.",
    "blog.results.pending": "Weitere passende Artikel verfuegbar. Scrollen Sie weiter oder laden Sie mehr.",
    "newsletter.loading": "Wird gesendet...",
    "newsletter.success": "Nachricht erfolgreich gesendet!",
    "newsletter.error.unavailable": "Newsletter derzeit nicht verfügbar.",
    "newsletter.error.network": "Senden fehlgeschlagen. Bitte später erneut versuchen.",
    "theme.light": "Hellmodus",
    "theme.dark": "Dunkelmodus",
    "auth.forgot_password": "Passwort vergessen?",
    "favorites.add": "Zu Favoriten hinzufÃ¼gen",
    "favorites.remove": "Aus Favoriten entfernen",
    "admin-dashboard": "Admin-Dashboard",
    "organisation-dashboard": "Organisation-Dashboard",
    "teamleader-dashboard": "Teamleader-Dashboard",
    "access.login_required": "Bitte einloggen, um Kurse und Quiz zu starten.",
    "access.login_button": "Zum Login",
    "access.enrollment_required": "Für diesen Kurs brauchst du eine Einschreibung.",
    "access.request_button": "Einschreibung anfragen",
    "access.request_pending": "Anfrage bereits gesendet. Wir informieren dich nach Freigabe.",
    "access.request_success": "Anfrage wurde an das Admin-Team gesendet.",
    "access.request_failed": "Anfrage konnte nicht gesendet werden.",
  },
  en: {
    "form.error.required": "Please fill all required fields.",
    "form.error.email": "Please enter a valid email address.",
    "form.success": "Message sent successfully!",
    "courses.results.all": "All courses",
    "courses.results.count_suffix": "courses",
    "courses.results.empty": "No courses in this category.",
    "courses.results.pending": "More matching courses are available. Keep scrolling or load more.",
    "landing.courses.results.empty": "No courses in this preview. View all courses.",
    "blog.results.all": "Latest articles",
    "blog.results.count_suffix": "articles",
    "blog.results.empty": "No articles in this category.",
    "blog.results.pending": "More matching articles are available. Keep scrolling or load more.",
    "newsletter.loading": "Sending...",
    "newsletter.success": "Message sent successfully!",
    "newsletter.error.unavailable": "Newsletter is currently unavailable.",
    "newsletter.error.network": "Sending failed. Please try again later.",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "auth.forgot_password": "Forgot password?",
    "favorites.add": "Add to favorites",
    "favorites.remove": "Remove from favorites",
    "admin-dashboard": "Admin dashboard",
    "organisation-dashboard": "Organization dashboard",
    "teamleader-dashboard": "Team leader dashboard",
    "access.login_required": "Please log in to start courses and quizzes.",
    "access.login_button": "Go to login",
    "access.enrollment_required": "You need enrollment for this course.",
    "access.request_button": "Request enrollment",
    "access.request_pending": "Request already sent. We will notify you after approval.",
    "access.request_success": "Request was sent to the admin team.",
    "access.request_failed": "Request could not be sent.",
  },
};

function parsePathContext(pathname = window.location.pathname) {
  const rawSegments = pathname.split("/").filter(Boolean);
  const segments = [...rawSegments];

  if (segments[segments.length - 1]?.toLowerCase() === "index.html") {
    segments.pop();
  }

  const context = {
    baseSegments: [],
    locale: null,
    routeSegments: segments,
  };

  if (context.routeSegments[0] && SUPPORTED_LOCALES.includes(context.routeSegments[0])) {
    context.locale = context.routeSegments.shift();
    return context;
  }

  if (context.routeSegments.length > 1 && SUPPORTED_LOCALES.includes(context.routeSegments[1])) {
    context.baseSegments.push(context.routeSegments.shift());
    context.locale = context.routeSegments.shift();
    return context;
  }

  if (
    context.routeSegments.length > 0 &&
    !SUPPORTED_LOCALES.includes(context.routeSegments[0]) &&
    !KNOWN_ROUTE_SEGMENTS.has(context.routeSegments[0])
  ) {
    context.baseSegments.push(context.routeSegments.shift());
    if (context.routeSegments[0] && SUPPORTED_LOCALES.includes(context.routeSegments[0])) {
      context.locale = context.routeSegments.shift();
    }
  }

  return context;
}

function getCurrentLocale(pathname = window.location.pathname) {
  return parsePathContext(pathname).locale;
}

function removeLocalePrefix(pathname = window.location.pathname) {
  const context = parsePathContext(pathname);
  const segments = [...context.baseSegments, ...context.routeSegments];
  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

function buildLocalizedPath(locale, pathname = window.location.pathname, search = window.location.search, hash = window.location.hash) {
  const normalizedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const context = parsePathContext(pathname);
  const pathSegments = [...context.baseSegments, normalizedLocale, ...context.routeSegments];
  const localizedPath = `/${pathSegments.join("/")}`.replace(/\/$/, "") || `/${normalizedLocale}`;
  return `${localizedPath}${search || ""}${hash || ""}`;
}

function getLocalizedOptionLabel(optionElement) {
  if (!optionElement) return "";
  const key = optionElement.getAttribute("data-option-key");
  if (key && typeof LanguageManager?.t === "function") {
    const translated = LanguageManager.t(key);
    if (translated && translated !== key) {
      return translated;
    }
  }
  return optionElement.querySelector("[data-option-label]")?.textContent?.trim() || "";
}

// ===========================================
// THEME MANAGEMENT
// ===========================================
const ThemeManager = {
  STORAGE_KEY: 'snappinquiz-theme',

  readStoredTheme() {
    try {
      return localStorage.getItem(this.STORAGE_KEY);
    } catch (_) {
      return null;
    }
  },

  writeStoredTheme(theme) {
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (_) {
      // no-op if localStorage is unavailable
    }
  },

  init() {
    const savedTheme = this.readStoredTheme();
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.setTheme('light');
    } else {
      this.setTheme('dark');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.readStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });

    this.initToggle();
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    this.writeStoredTheme(theme);
    this.updateToggleUI(theme);
  },

  getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  },

  toggle() {
    const current = this.getTheme();
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  },

  initToggle() {
    const toggleBtns = document.querySelectorAll('[data-theme-toggle]');
    toggleBtns.forEach(btn => {
      if (btn.hasAttribute('data-settings-trigger')) return;
      btn.addEventListener('click', () => this.toggle());
    });

    const optionButtons = document.querySelectorAll('[data-theme-option]');
    optionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme-option');
        if (!theme) return;
        this.setTheme(theme);
        button.closest('[data-settings-menu]')?.removeAttribute('open');
      });
    });
  },

  updateToggleUI(theme) {
    const icons = document.querySelectorAll('[data-theme-icon]');
    icons.forEach(icon => {
      const iconType = icon.getAttribute('data-theme-icon');
      icon.classList.toggle('hidden', iconType !== theme);
    });

    const currentIcons = document.querySelectorAll('[data-theme-current-icon]');
    currentIcons.forEach((icon) => {
      const iconType = icon.getAttribute('data-theme-current-icon');
      icon.classList.toggle('hidden', iconType !== theme);
    });

    document.querySelectorAll('[data-theme-switch-track]').forEach((track) => {
      track.classList.toggle('bg-primary-500/30', theme === 'dark');
      track.classList.toggle('border-primary-400/50', theme === 'dark');
      track.classList.toggle('bg-white/10', theme !== 'dark');
      track.classList.toggle('border-white/20', theme !== 'dark');
    });
    document.querySelectorAll('[data-theme-switch-thumb]').forEach((thumb) => {
      thumb.classList.toggle('translate-x-0', theme === 'light');
      thumb.classList.toggle('translate-x-6', theme === 'dark');
    });

    const selectedOptionLabel = getLocalizedOptionLabel(document.querySelector(`[data-theme-option="${theme}"]`));
    const themeKey = theme === 'light' ? 'theme.light' : 'theme.dark';
    const localizedThemeLabel = LanguageManager.t(themeKey);
    document.querySelectorAll('[data-theme-current-label]').forEach((label) => {
      label.textContent = selectedOptionLabel || (localizedThemeLabel !== themeKey ? localizedThemeLabel : (theme === 'light' ? 'Hellmodus' : 'Dunkelmodus'));
    });

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      if (button.hasAttribute('data-settings-trigger')) return;
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });

    document.querySelectorAll('[data-theme-option]').forEach((button) => {
      const isSelected = button.getAttribute('data-theme-option') === theme;
      button.setAttribute('aria-pressed', String(isSelected));
      button.classList.toggle('bg-white/10', isSelected);
      button.classList.toggle('border-primary-500/40', isSelected);
      button.classList.toggle('text-white', isSelected);
    });
  }
};

// ===========================================
// LANGUAGE MANAGEMENT
// ===========================================
const LanguageManager = {
  STORAGE_KEY: "snappinquiz-lang",
  currentLang: DEFAULT_LOCALE,

  init() {
    const savedLang = localStorage.getItem(this.STORAGE_KEY);
    const pathLang = getCurrentLocale();

    let resolvedLang = pathLang;
    if (!resolvedLang && savedLang && SUPPORTED_LOCALES.includes(savedLang)) {
      resolvedLang = savedLang;
    }

    if (!resolvedLang) {
      const browserLang = navigator.language.split("-")[0];
      resolvedLang = SUPPORTED_LOCALES.includes(browserLang) ? browserLang : DEFAULT_LOCALE;
    }

    if (!pathLang) {
      this.currentLang = resolvedLang;
      document.documentElement.setAttribute("lang", resolvedLang);
      localStorage.setItem(this.STORAGE_KEY, resolvedLang);
      this.initToggle();
      this.updateToggleUI(resolvedLang);
      return;
    }

    if (pathLang !== resolvedLang) {
      this.navigateToLocale(resolvedLang);
      return;
    }

    this.currentLang = resolvedLang;
    document.documentElement.setAttribute("lang", resolvedLang);
    localStorage.setItem(this.STORAGE_KEY, resolvedLang);

    this.initToggle();
    this.updateToggleUI(resolvedLang);
  },

  setLanguage(lang) {
    if (!SUPPORTED_LOCALES.includes(lang)) return;

    this.currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.updateToggleUI(lang);
    this.navigateToLocale(lang);
  },

  getLanguage() {
    return this.currentLang;
  },

  toggle() {
    const current = this.getLanguage();
    this.setLanguage(current === "de" ? "en" : "de");
  },

  t(key) {
    return localeMessages[this.currentLang]?.[key] || key;
  },

  navigateToLocale(lang) {
    const targetPath = buildLocalizedPath(lang);
    const currentPathWithQueryAndHash = `${window.location.pathname}${window.location.search || ""}${window.location.hash || ""}`;

    if (targetPath !== currentPathWithQueryAndHash) {
      window.location.assign(targetPath);
    }
  },

  initToggle() {
    const toggleBtns = document.querySelectorAll("[data-lang-toggle]");
    toggleBtns.forEach((btn) => {
      if (btn.hasAttribute("data-settings-trigger")) return;
      btn.addEventListener("click", () => this.toggle());
    });

    const selects = document.querySelectorAll("[data-lang-select]");
    selects.forEach((select) => {
      select.addEventListener("change", (e) => {
        this.setLanguage(e.target.value);
      });
    });

    const optionButtons = document.querySelectorAll("[data-lang-option]");
    optionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const lang = button.getAttribute("data-lang-option");
        if (!lang) return;
        this.setLanguage(lang);
        button.closest("[data-settings-menu]")?.removeAttribute("open");
      });
    });
  },

  updateToggleUI(lang) {
    const indicators = document.querySelectorAll("[data-lang-indicator]");
    indicators.forEach((el) => {
      const selectedOptionLabel = getLocalizedOptionLabel(document.querySelector(`[data-lang-option="${lang}"]`));
      el.textContent = selectedOptionLabel || lang.toUpperCase();
    });

    const selects = document.querySelectorAll("[data-lang-select]");
    selects.forEach((select) => {
      select.value = lang;
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const isSelected = button.getAttribute("data-lang-option") === lang;
      button.setAttribute("aria-pressed", String(isSelected));
      button.classList.toggle("bg-white/10", isSelected);
      button.classList.toggle("border-primary-500/40", isSelected);
      button.classList.toggle("text-white", isSelected);
    });

    ThemeManager.updateToggleUI(ThemeManager.getTheme());
  },
};

// ===========================================
// PROFILE MENU
// ===========================================
const ProfileMenu = {
  AVATAR_PRESET_IDS: Object.freeze(["cyber-guardian", "pixel-owl", "retro-bot", "neon-fox"]),
  avatarRenderToken: 0,

  init() {
    const profileMenus = document.querySelectorAll('[data-profile-menu]');
    const settingsMenus = document.querySelectorAll('[data-settings-dropdown-menu]');
    this.updateAuthUI();

    if (!profileMenus.length && !settingsMenus.length) return;

    profileMenus.forEach(menu => {
      const trigger = menu.querySelector('[data-profile-trigger]');
      const dropdown = menu.querySelector('[data-profile-dropdown]');
      if (!trigger || !dropdown) return;

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        this.updateAuthUI();
        const isOpen = !dropdown.classList.contains('hidden');
        this.closeAll();
        if (!isOpen) {
          dropdown.classList.remove('hidden');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });

    settingsMenus.forEach((menu) => {
      const trigger = menu.querySelector('[data-settings-dropdown-trigger]');
      const dropdown = menu.querySelector('[data-settings-dropdown]');
      if (!trigger || !dropdown) return;

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = !dropdown.classList.contains('hidden');
        this.closeAll();
        if (!isOpen) {
          dropdown.classList.remove('hidden');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });

    document.addEventListener('click', () => this.closeAll());
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeAll();
      }
    });

    document.querySelectorAll('[data-auth-logout]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent('snappinquiz:logout-request'));
        try {
          localStorage.removeItem('snappinquiz-mock-session');
          localStorage.removeItem('snappinquiz-mock-role');
        } catch (_) {
          // no-op if localStorage is unavailable
        }

        if (document.body) {
          document.body.dataset.authState = 'logged-out';
        }

        window.dispatchEvent(new CustomEvent('snappinquiz:auth-changed', {
          detail: { loggedIn: false, source: 'profile-menu' }
        }));
        this.closeAll();
      });
    });

    // UI-only auth hint refresh; server-side checks must still protect all sensitive routes/APIs.
    window.addEventListener('snappinquiz:auth-changed', () => this.updateAuthUI());
  },

  closeAll() {
    document.querySelectorAll('[data-profile-menu]').forEach(menu => {
      const trigger = menu.querySelector('[data-profile-trigger]');
      const dropdown = menu.querySelector('[data-profile-dropdown]');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
      menu.querySelectorAll('[data-settings-menu]').forEach((details) => {
        details.removeAttribute('open');
      });
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
    document.querySelectorAll('[data-settings-dropdown-menu]').forEach((menu) => {
      const trigger = menu.querySelector('[data-settings-dropdown-trigger]');
      const dropdown = menu.querySelector('[data-settings-dropdown]');
      if (dropdown) {
        dropdown.classList.add('hidden');
        dropdown.querySelectorAll('[data-settings-menu]').forEach((details) => {
          details.removeAttribute('open');
        });
      }
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  },

  // UI hint only. Never use this for authorization decisions.
  isUiLoggedInHint() {
    try {
      if (localStorage.getItem('snappinquiz-mock-session') === '1') {
        return true;
      }
    } catch (_) {
      // no-op if localStorage is unavailable
    }

    return document.body?.dataset.authState === 'logged-in';
  },

  // UI hint only. Never use this for authorization decisions.
  isUiOwnerHint() {
    try {
      if (localStorage.getItem('snappinquiz-mock-role') === 'owner') {
        return true;
      }
    } catch (_) {
      // no-op if localStorage is unavailable
    }
    return document.body?.dataset.authRole === 'owner';
  },

  // UI hint only. Never use this for authorization decisions.
  isUiTeamLeaderHint() {
    try {
      if (localStorage.getItem('snappinquiz-mock-role') === 'team_owner') {
        return true;
      }
    } catch (_) {
      // no-op if localStorage is unavailable
    }
    return document.body?.dataset.authRole === 'team_owner';
  },

  // UI hint only. Never use this for authorization decisions.
  isUiPlatformAdminHint() {
    try {
      if (localStorage.getItem('snappinquiz-mock-role') === 'admin') {
        return true;
      }
    } catch (_) {
      // no-op if localStorage is unavailable
    }
    return document.body?.dataset.authRole === 'admin';
  },

  toInitials(name) {
    return String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "DU";
  },

  sanitizeAvatarPreset(rawValue) {
    const value = String(rawValue || "").trim();
    return this.AVATAR_PRESET_IDS.includes(value) ? value : "";
  },

  sanitizeAvatarUrl(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) return "";
    try {
      const parsed = new URL(value, window?.location?.origin || "https://snappinquiz.local");
      if (parsed.protocol !== "https:") return "";
      const hostname = String(parsed.hostname || "").toLowerCase();
      if (
        hostname === "localhost" ||
        hostname.endsWith(".local") ||
        hostname === "127.0.0.1" ||
        hostname === "::1" ||
        /^10\./.test(hostname) ||
        /^192\.168\./.test(hostname) ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
      ) {
        return "";
      }
      return parsed.toString();
    } catch (_) {
      return "";
    }
  },

  buildAvatarPresetDataUrl(presetId) {
    const sprites = {
      "cyber-guardian": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#12071f"/><rect x="2" y="1" width="8" height="2" fill="#a855f7"/><rect x="1" y="3" width="10" height="5" fill="#1f2937"/><rect x="3" y="4" width="2" height="2" fill="#67e8f9"/><rect x="7" y="4" width="2" height="2" fill="#67e8f9"/><rect x="4" y="7" width="4" height="1" fill="#ec4899"/><rect x="2" y="8" width="8" height="3" fill="#6b21a8"/></svg>`,
      "pixel-owl": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#0f172a"/><rect x="2" y="1" width="8" height="2" fill="#7e22ce"/><rect x="1" y="3" width="10" height="6" fill="#334155"/><rect x="3" y="4" width="2" height="2" fill="#fef08a"/><rect x="7" y="4" width="2" height="2" fill="#fef08a"/><rect x="4" y="7" width="1" height="1" fill="#f97316"/><rect x="7" y="7" width="1" height="1" fill="#f97316"/><rect x="3" y="8" width="6" height="3" fill="#1d4ed8"/></svg>`,
      "retro-bot": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#111827"/><rect x="4" y="1" width="4" height="1" fill="#93c5fd"/><rect x="2" y="2" width="8" height="6" fill="#475569"/><rect x="3" y="3" width="2" height="2" fill="#a5f3fc"/><rect x="7" y="3" width="2" height="2" fill="#a5f3fc"/><rect x="4" y="6" width="4" height="1" fill="#f472b6"/><rect x="2" y="8" width="8" height="3" fill="#7c3aed"/></svg>`,
      "neon-fox": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#1a0b2e"/><rect x="2" y="1" width="2" height="2" fill="#f472b6"/><rect x="8" y="1" width="2" height="2" fill="#f472b6"/><rect x="1" y="3" width="10" height="5" fill="#7e22ce"/><rect x="3" y="4" width="2" height="2" fill="#fef08a"/><rect x="7" y="4" width="2" height="2" fill="#fef08a"/><rect x="5" y="6" width="2" height="1" fill="#22d3ee"/><rect x="2" y="8" width="8" height="3" fill="#db2777"/></svg>`,
    };
    const svg = sprites[presetId];
    return svg ? `data:image/svg+xml,${encodeURIComponent(svg)}` : "";
  },

  buildDefaultAvatarDataUrl() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="sq-avatar-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#ec4899"/></linearGradient></defs><rect width="48" height="48" rx="24" fill="url(#sq-avatar-grad)"/><circle cx="24" cy="18" r="8" fill="#ffffff"/><path d="M10 40c2.7-7.5 9-12 14-12s11.3 4.5 14 12z" fill="#ffffff"/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  },

  readProfileAvatarState(isPrivileged) {
    const fallbackName = isPrivileged ? "Admin User" : "Demo User";
    try {
      const raw = localStorage.getItem('snappinquiz-mock-account');
      if (!raw) {
        return { name: fallbackName, avatarUrl: "", avatarPreset: "" };
      }
      const parsed = JSON.parse(raw);
      return {
        name: String(parsed?.name || fallbackName).trim() || fallbackName,
        avatarUrl: this.sanitizeAvatarUrl(parsed?.avatarUrl),
        avatarPreset: this.sanitizeAvatarPreset(parsed?.avatarPreset),
      };
    } catch (_) {
      return { name: fallbackName, avatarUrl: "", avatarPreset: "" };
    }
  },

  getProfileImageLabel(name) {
    const lang = String(document?.documentElement?.lang || "").toLowerCase();
    const prefix = lang.startsWith("en") ? "Profile image" : "Profilbild";
    const safeName = String(name || "").trim();
    return safeName ? `${prefix} ${safeName}` : prefix;
  },

  updateProfileTriggerAvatar(loggedIn = this.isUiLoggedInHint(), isPrivileged = this.isUiOwnerHint() || this.isUiPlatformAdminHint()) {
    const state = this.readProfileAvatarState(isPrivileged);
    const initials = this.toInitials(state.name);
    const presetUrl = this.buildAvatarPresetDataUrl(state.avatarPreset);
    const defaultUrl = this.buildDefaultAvatarDataUrl();
    const baseUrl = presetUrl || defaultUrl;

    document.querySelectorAll('[data-profile-trigger-avatar]').forEach((avatarNode) => {
      const initialsNode = avatarNode.querySelector('[data-profile-trigger-avatar-initials]');
      const renderToken = String(++this.avatarRenderToken);
      avatarNode.dataset.avatarRenderToken = renderToken;
      const isStale = () => avatarNode.dataset.avatarRenderToken !== renderToken;
      avatarNode.style.backgroundImage = "";
      avatarNode.style.backgroundSize = "";
      avatarNode.style.backgroundPosition = "";
      avatarNode.style.imageRendering = "";
      if (initialsNode) {
        initialsNode.textContent = initials;
        initialsNode.style.color = "";
      }
      avatarNode.setAttribute('aria-label', this.getProfileImageLabel(state.name));

      const applyUrl = (url, { pixelated = false } = {}) => {
        if (isStale()) return;
        avatarNode.style.backgroundImage = `url("${url.replace(/"/g, "%22")}")`;
        avatarNode.style.backgroundSize = "cover";
        avatarNode.style.backgroundPosition = "center";
        avatarNode.style.imageRendering = pixelated ? "pixelated" : "";
        if (initialsNode) {
          initialsNode.style.color = "transparent";
        }
      };

      if (!loggedIn) return;
      applyUrl(baseUrl, { pixelated: Boolean(presetUrl) });

      if (!state.avatarUrl) return;
      const probe = new Image();
      probe.decoding = "async";
      probe.onload = () => applyUrl(state.avatarUrl);
      probe.onerror = () => applyUrl(baseUrl, { pixelated: Boolean(presetUrl) });
      probe.src = state.avatarUrl;
    });
  },

  updateAuthUI() {
    const loggedIn = this.isUiLoggedInHint();
    const isOwner = loggedIn && this.isUiOwnerHint();
    const isTeamLeader = loggedIn && this.isUiTeamLeaderHint();
    const isPlatformAdmin = loggedIn && this.isUiPlatformAdminHint();
    document.querySelectorAll('[data-auth-profile-menu]').forEach((menu) => {
      menu.classList.toggle('hidden', !loggedIn);
      if (!loggedIn) {
        const trigger = menu.querySelector('[data-profile-trigger]');
        const dropdown = menu.querySelector('[data-profile-dropdown]');
        dropdown?.classList.add('hidden');
        trigger?.setAttribute('aria-expanded', 'false');
      }
    });
    document.querySelectorAll('[data-auth-login]').forEach(el => {
      el.classList.toggle('hidden', loggedIn);
    });
    document.querySelectorAll('[data-auth-signup]').forEach(el => {
      el.classList.toggle('hidden', loggedIn);
    });
    document.querySelectorAll('[data-auth-profile]').forEach(el => {
      el.classList.toggle('hidden', !loggedIn);
    });
    document.querySelectorAll('[data-auth-settings]').forEach(el => {
      el.classList.toggle('hidden', !loggedIn);
    });
    document.querySelectorAll('[data-auth-owner]').forEach(el => {
      el.classList.toggle('hidden', !isOwner);
    });
    document.querySelectorAll('[data-auth-admin]').forEach(el => {
      el.classList.toggle('hidden', !isPlatformAdmin);
    });
    document.querySelectorAll('[data-auth-teamleader]').forEach(el => {
      el.classList.toggle('hidden', !isTeamLeader);
    });
    document.querySelectorAll('[data-auth-logout]').forEach(el => {
      el.classList.toggle('hidden', !loggedIn);
    });

    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      const activeControlHidden =
        activeElement.classList.contains('hidden') || Boolean(activeElement.closest('.hidden'));
      if (activeControlHidden) {
        const fallbackControl = document.querySelector(
          '[data-auth-profile-menu]:not(.hidden) [data-profile-trigger], [data-auth-login]:not(.hidden), [data-auth-signup]:not(.hidden), [data-settings-dropdown-trigger]'
        );
        fallbackControl?.focus();
      }
    }
    this.updateProfileTriggerAvatar(loggedIn, isOwner || isPlatformAdmin);
  }
};

// Mockup-only client-side access hints. Production authz must be enforced server-side.
const COURSE_ACCESS_SESSION_KEY = "snappinquiz-mock-session";
const COURSE_ACCESS_ROLE_KEY = "snappinquiz-mock-role";
const COURSE_ACCESS_USER_ID_KEY = "snappinquiz-mock-user-id";
const COURSE_ACCESS_ACCOUNT_KEY = "snappinquiz-mock-account";
const COURSE_ACCESS_USERS_KEY = "snappinquiz-mock-admin-users";
const COURSE_ACCESS_REQUESTS_KEY = "snappinquiz-mock-enrollment-requests";
const COURSE_ACCESS_CATALOG = Object.freeze({
  "it-sicherheit-grundlagen": "IT-Sicherheit Grundlagen",
  "phishing-awareness-pro": "Phishing Awareness Pro",
  "dsgvo-compliance": "DSGVO Compliance",
  "social-engineering-abwehr": "Social Engineering Abwehr",
  "sicheres-home-office": "Sicheres Home-Office",
  "ki-betrug-und-deepfakes": "KI-Betrug & Deepfakes",
});
const COURSE_ACCESS_DEFAULT_USERS = Object.freeze([
  Object.freeze({ id: "u1", name: "Anna M.", email: "anna.m@acme.local", role: "team_owner", active: true, enrolledCourses: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "DSGVO Compliance"] }),
  Object.freeze({ id: "u2", name: "Ben K.", email: "ben.k@acme.local", role: "team_moderator", active: true, enrolledCourses: ["Sicheres Home-Office", "Social Engineering Abwehr"] }),
  Object.freeze({ id: "u3", name: "Chris R.", email: "chris.r@acme.local", role: "user", active: true, enrolledCourses: [] }),
  Object.freeze({ id: "u4", name: "Daria S.", email: "daria.s@acme.local", role: "team_moderator", active: false, enrolledCourses: ["DSGVO Compliance", "IT-Sicherheit Grundlagen"] }),
  Object.freeze({ id: "u5", name: "Emre T.", email: "emre.t@acme.local", role: "team_owner", active: true, enrolledCourses: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "KI-Betrug & Deepfakes", "Social Engineering Abwehr"] }),
]);

function normalizeEmailValue(value) {
  return String(value || "").trim().toLowerCase();
}

function readLocalStorageSafely(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function writeLocalStorageSafely(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    // no-op
  }
}

function readCourseAccessUsers() {
  const raw = readLocalStorageSafely(COURSE_ACCESS_USERS_KEY);
  const fallback = COURSE_ACCESS_DEFAULT_USERS.map((entry) => ({ ...entry, enrolledCourses: [...entry.enrolledCourses] }));
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return fallback;
    return parsed
      .map((entry) => ({
        id: String(entry?.id || "").trim(),
        name: String(entry?.name || "").trim(),
        email: normalizeEmailValue(entry?.email || ""),
        role: String(entry?.role || "user").trim().toLowerCase(),
        active: Boolean(entry?.active),
        enrolledCourses: Array.isArray(entry?.enrolledCourses) ? entry.enrolledCourses.map((course) => String(course || "").trim()).filter(Boolean) : [],
      }))
      .filter((entry) => entry.id && entry.email);
  } catch (_) {
    return fallback;
  }
}

function readCourseAccessRequests() {
  const raw = readLocalStorageSafely(COURSE_ACCESS_REQUESTS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (_) {
    return [];
  }
}

function readCourseAccessContext() {
  const loggedIn = readLocalStorageSafely(COURSE_ACCESS_SESSION_KEY) === "1";
  const role = loggedIn ? String(readLocalStorageSafely(COURSE_ACCESS_ROLE_KEY) || "user").toLowerCase() : "guest";
  const userId = loggedIn ? String(readLocalStorageSafely(COURSE_ACCESS_USER_ID_KEY) || "").trim() : "";
  let accountEmail = "";
  let accountName = "";
  try {
    const rawAccount = readLocalStorageSafely(COURSE_ACCESS_ACCOUNT_KEY);
    if (rawAccount) {
      const parsed = JSON.parse(rawAccount);
      accountEmail = normalizeEmailValue(parsed?.email || "");
      accountName = String(parsed?.name || "").trim();
    }
  } catch (_) {
    accountEmail = "";
    accountName = "";
  }
  const users = readCourseAccessUsers();
  const currentUser = userId
    ? users.find((entry) => entry.id === userId)
    : (accountEmail ? users.find((entry) => normalizeEmailValue(entry.email) === accountEmail) : null);
  return {
    loggedIn,
    role,
    userId,
    users,
    accountEmail,
    accountName,
    currentUser,
  };
}

function buildMockLoginPath() {
  const context = parsePathContext(window.location.pathname || "/");
  const segments = [...context.baseSegments];
  if (context.locale) segments.push(context.locale);
  segments.push("profile-mockup", "login");
  return `/${segments.join("/")}/`;
}

function buildCoursesOverviewPath() {
  const context = parsePathContext(window.location.pathname || "/");
  const segments = [...context.baseSegments];
  if (context.locale) segments.push(context.locale);
  segments.push("courses");
  return `/${segments.join("/")}/`;
}

function resolveCurrentCourseSlug(context) {
  const routeSegments = context?.routeSegments || [];
  if (routeSegments[0] !== "courses") return "";
  if (routeSegments[1] === "quiz" || routeSegments[1] === "chapter") {
    return String(new URLSearchParams(window.location.search).get("course") || "").trim();
  }
  return String(routeSegments[1] || "").trim();
}

function userCanEnterCourse(accessContext, courseSlug) {
  if (!accessContext.loggedIn) return false;
  if (["owner", "team_owner", "team_moderator"].includes(accessContext.role)) return true;
  if (accessContext.role !== "user") return false;
  const courseName = COURSE_ACCESS_CATALOG[courseSlug];
  if (!courseName) return false;
  const enrolled = new Set(accessContext.currentUser?.enrolledCourses || []);
  return enrolled.has(courseName);
}

function createCourseEnrollmentRequest(accessContext, courseSlug) {
  const courseName = COURSE_ACCESS_CATALOG[courseSlug];
  if (!courseName || !accessContext.loggedIn || accessContext.role !== "user") return { ok: false, error: "invalid" };
  if (!accessContext.currentUser) return { ok: false, error: "missing_user" };
  if (!accessContext.currentUser.active) return { ok: false, error: "inactive_user" };
  const enrolled = new Set(accessContext.currentUser.enrolledCourses || []);
  if (enrolled.has(courseName)) return { ok: false, error: "already_enrolled" };
  const requests = readCourseAccessRequests();
  const hasPending = requests.some(
    (entry) =>
      entry?.status === "pending" &&
      String(entry?.userId || "").trim() === accessContext.currentUser.id &&
      String(entry?.courseSlug || "").trim() === courseSlug
  );
  if (hasPending) return { ok: false, error: "pending_exists" };
  const nextRequest = {
    id: `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    userId: accessContext.currentUser.id,
    userName: accessContext.currentUser.name,
    userEmail: accessContext.currentUser.email,
    courseName,
    courseSlug,
    status: "pending",
    createdAt: new Date().toISOString(),
    resolvedAt: "",
  };
  requests.push(nextRequest);
  writeLocalStorageSafely(COURSE_ACCESS_REQUESTS_KEY, JSON.stringify(requests));
  return { ok: true };
}

function disableCourseEntryLinksForAnonymous() {
  const accessContext = readCourseAccessContext();
  if (accessContext.loggedIn) return;
  const links = [...document.querySelectorAll('#courses-grid a[href^="courses/"]')];
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const message = LanguageManager.t("access.login_required");
      showToast(message, "error");
      window.location.assign(buildMockLoginPath());
    });
  });
}

function renderCourseAccessGate({ courseSlug, requireLogin }) {
  const root = document.querySelector("main.content-library-page");
  if (!root) return;
  if (root.querySelector("[data-course-access-gate]")) return;
  const card = document.createElement("section");
  card.dataset.courseAccessGate = "true";
  card.className = "relative space-section-xs";
  const wrapper = document.createElement("div");
  wrapper.className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const box = document.createElement("article");
  box.className = "content-library-card rounded-3xl p-6 md:p-8 space-y-4";
  const title = document.createElement("h2");
  title.className = "text-2xl font-bold text-white";
  title.textContent = requireLogin ? LanguageManager.t("access.login_required") : LanguageManager.t("access.enrollment_required");
  box.appendChild(title);
  if (requireLogin) {
    const loginLink = document.createElement("a");
    loginLink.href = buildMockLoginPath();
    loginLink.className = "inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
    loginLink.textContent = LanguageManager.t("access.login_button");
    box.appendChild(loginLink);
  } else {
    const status = document.createElement("p");
    status.className = "text-sm text-gray-300";
    status.dataset.courseRequestStatus = "idle";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    status.setAttribute("aria-atomic", "true");
    const requestButton = document.createElement("button");
    requestButton.type = "button";
    requestButton.className = "inline-flex min-h-11 items-center justify-center rounded-xl border border-primary-400/40 bg-primary-500/15 px-5 py-3 text-sm font-semibold text-primary-200 hover:bg-primary-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
    requestButton.textContent = LanguageManager.t("access.request_button");
    requestButton.addEventListener("click", () => {
      const accessContext = readCourseAccessContext();
      const result = createCourseEnrollmentRequest(accessContext, courseSlug);
      if (result.ok) {
        status.textContent = LanguageManager.t("access.request_success");
        status.dataset.courseRequestStatus = "success";
        requestButton.disabled = true;
        requestButton.setAttribute("aria-disabled", "true");
        requestButton.setAttribute("title", LanguageManager.t("access.request_pending"));
      } else if (result.error === "pending_exists") {
        status.textContent = LanguageManager.t("access.request_pending");
        status.dataset.courseRequestStatus = "info";
        requestButton.disabled = true;
        requestButton.setAttribute("aria-disabled", "true");
      } else {
        status.textContent = LanguageManager.t("access.request_failed");
        status.dataset.courseRequestStatus = "error";
      }
    });
    box.appendChild(requestButton);
    box.appendChild(status);
  }
  wrapper.appendChild(box);
  card.appendChild(wrapper);
  root.insertBefore(card, root.children[1] || null);

  root.querySelectorAll('a[href*="courses/chapter/"], a[href*="courses/quiz/"]').forEach((link) => {
    link.classList.add("pointer-events-none", "opacity-50");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    link.setAttribute("title", requireLogin ? LanguageManager.t("access.login_required") : LanguageManager.t("access.enrollment_required"));
    link.addEventListener("click", (event) => event.preventDefault());
  });
}

function initCourseAccessControl() {
  const context = parsePathContext(window.location.pathname || "/");
  if (context.routeSegments[0] !== "courses") return;

  disableCourseEntryLinksForAnonymous();

  const currentCourseSlug = resolveCurrentCourseSlug(context);
  if (!currentCourseSlug) {
    if (context.routeSegments[1] === "quiz" || context.routeSegments[1] === "chapter") {
      const accessContext = readCourseAccessContext();
      if (!accessContext.loggedIn) {
        renderCourseAccessGate({ courseSlug: "", requireLogin: true });
        return;
      }
      if (accessContext.role === "user") {
        showToast(LanguageManager.t("access.enrollment_required"), "error");
        window.location.assign(buildCoursesOverviewPath());
      }
    }
    return;
  }

  const accessContext = readCourseAccessContext();
  const allowed = userCanEnterCourse(accessContext, currentCourseSlug);
  if (allowed) return;

  if (!accessContext.loggedIn) {
    renderCourseAccessGate({ courseSlug: currentCourseSlug, requireLogin: true });
    return;
  }

  if (accessContext.role === "user") {
    renderCourseAccessGate({ courseSlug: currentCourseSlug, requireLogin: false });
    return;
  }

  showToast(LanguageManager.t("access.login_required"), "error");
  window.location.assign(buildMockLoginPath());
}

// ===========================================
// MOBILE MENU
// ===========================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!mobileMenuBtn || !mobileMenu) return;
  mobileMenuBtn.classList.add(
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-400'
  );
  if (!mobileMenuBtn.getAttribute('aria-label')) {
    mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
  }
  mobileMenuBtn.setAttribute('aria-controls', 'mobile-menu');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    const icon = mobileMenuBtn.querySelector('svg');
    if (icon) {
      icon.innerHTML = isOpen
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

function initPricingNavLink() {
  const context = parsePathContext(window.location.pathname || "/");
  const isPricingRoute = context.routeSegments[0] === "pricing" || context.routeSegments[0] === "preise";
  const pricingLabel = context.locale === "en" ? "Pricing" : "Preise";
  const localizedPricingPath = context.locale
    ? `/${[...context.baseSegments, context.locale, "pricing"].join("/")}/`
    : `/${[...context.baseSegments, "pricing"].join("/")}/`;

  document.querySelectorAll("nav").forEach((nav) => {
    const desktopBusinessLink = nav.querySelector('a[data-i18n="nav.business"].nav-link-fixed');
    const desktopAppLink = nav.querySelector('a[data-i18n="nav.app"].nav-link-fixed');
    const desktopBlogLink = nav.querySelector('a[data-i18n="nav.blog"].nav-link-fixed');
    const desktopNavList = desktopBusinessLink?.parentElement || desktopBlogLink?.parentElement;
    if (desktopNavList && !desktopNavList.querySelector('a[data-i18n="nav.prices"]')) {
      const desktopLink = document.createElement("a");
      desktopLink.href = localizedPricingPath;
      desktopLink.dataset.i18n = "nav.prices";
      desktopLink.textContent = pricingLabel;
      const desktopReferenceLink = desktopAppLink || desktopBlogLink || desktopBusinessLink;
      const desktopBaseClasses = desktopReferenceLink?.className
        || desktopBlogLink?.className
        || "nav-link-fixed text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium";
      const desktopInactiveClasses = desktopBaseClasses.replace(/\btext-primary-400\b/g, "text-gray-300");
      const desktopClassesWithHover = desktopInactiveClasses.includes("hover:text-primary-400")
        ? desktopInactiveClasses
        : `${desktopInactiveClasses} hover:text-primary-400`;
      const desktopStateClasses = isPricingRoute
        ? desktopClassesWithHover.replace(/\btext-gray-300\b/g, "text-primary-400").replace(/\shover:text-primary-400/g, "")
        : desktopClassesWithHover;
      const desktopFocusClasses = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      desktopLink.className = desktopStateClasses.includes("focus-visible:outline")
        ? desktopStateClasses
        : `${desktopStateClasses} ${desktopFocusClasses}`;
      if (desktopBusinessLink) {
        desktopBusinessLink.insertAdjacentElement("afterend", desktopLink);
      } else {
        desktopNavList.append(desktopLink);
      }
    }

    const mobileBusinessLink = nav.querySelector('#mobile-menu a[data-i18n="nav.business"]');
    const mobileAppLink = nav.querySelector('#mobile-menu a[data-i18n="nav.app"]');
    const mobileBlogLink = nav.querySelector('#mobile-menu a[data-i18n="nav.blog"]');
    const mobileNavList = mobileBusinessLink?.parentElement || mobileBlogLink?.parentElement;
    if (mobileNavList && !mobileNavList.querySelector('a[data-i18n="nav.prices"]')) {
      const mobileLink = document.createElement("a");
      mobileLink.href = localizedPricingPath;
      mobileLink.dataset.i18n = "nav.prices";
      mobileLink.textContent = pricingLabel;
      const mobileReferenceLink = mobileAppLink || mobileBlogLink || mobileBusinessLink;
      const mobileBaseClasses = mobileReferenceLink?.className
        || mobileBlogLink?.className
        || "block text-gray-300 hover:text-primary-400 py-2";
      const mobileInactiveClasses = mobileBaseClasses.replace(/\btext-primary-400\b/g, "text-gray-300");
      const mobileClassesWithHover = mobileInactiveClasses.includes("hover:text-primary-400")
        ? mobileInactiveClasses
        : `${mobileInactiveClasses} hover:text-primary-400`;
      const mobileStateClasses = isPricingRoute
        ? mobileClassesWithHover.replace(/\btext-gray-300\b/g, "text-primary-400").replace(/\shover:text-primary-400/g, "")
        : mobileClassesWithHover;
      const mobileFocusClasses = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      mobileLink.className = mobileStateClasses.includes("focus-visible:outline")
        ? mobileStateClasses
        : `${mobileStateClasses} ${mobileFocusClasses}`;
      if (mobileBusinessLink) {
        mobileBusinessLink.insertAdjacentElement("afterend", mobileLink);
      } else {
        mobileNavList.append(mobileLink);
      }
    }
  });
}

// ===========================================
// NAVBAR SCROLL
// ===========================================
function initNavbarScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ===========================================
// SMOOTH SCROLL
// ===========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        history.pushState(null, null, href);
      }
    });
  });
}

const INTERACTIVE_CARD_TARGET_SELECTOR =
  'a, button, input, select, textarea, label, summary, [role="button"], [role="link"], [contenteditable], [tabindex]:not([tabindex="-1"])';

function isInteractiveCardElement(node) {
  if (!node || typeof node.closest !== 'function') {
    return false;
  }

  return Boolean(node.closest(INTERACTIVE_CARD_TARGET_SELECTOR));
}

function isCardInteractiveTarget(event) {
  if (!event) {
    return false;
  }

  if (isInteractiveCardElement(event.target)) {
    return true;
  }

  if (typeof event.composedPath === 'function') {
    return event.composedPath().some((node) => isInteractiveCardElement(node));
  }

  return false;
}

function getCardTargetHref(primaryLink) {
  if (!primaryLink) {
    return '';
  }
  return primaryLink.href || primaryLink.getAttribute?.('href') || '';
}

function navigateCardTarget(targetHref, { openInNewTab = false } = {}) {
  if (!targetHref) {
    return;
  }

  if (openInNewTab && typeof window.open === 'function') {
    window.open(targetHref, '_blank', 'noopener');
    return;
  }

  window.location.assign(targetHref);
}

function initCardClickNavigation() {
  const clickableCards = document.querySelectorAll('[data-course-category], [data-landing-course-category], [data-blog-category]');

  clickableCards.forEach((card) => {
    if (card.getAttribute?.('data-card-click-bound') === 'true') {
      return;
    }

    const primaryLink =
      card.querySelector?.('.content-library-entry-title a[href], .content-library-entry-footer a[href], a[href]') ||
      null;

    if (!primaryLink) {
      return;
    }

    card.classList?.add('cursor-pointer');
    card.setAttribute?.('data-card-click-bound', 'true');

    card.addEventListener('click', (event) => {
      if (event.defaultPrevented || isCardInteractiveTarget(event)) {
        return;
      }

      const targetHref = getCardTargetHref(primaryLink);
      if (!targetHref) {
        return;
      }

      const isMiddleClick = typeof event.button === 'number' && event.button === 1;
      const wantsNewTab = isMiddleClick || event.metaKey || event.ctrlKey;
      if (wantsNewTab) {
        navigateCardTarget(targetHref, { openInNewTab: true });
        return;
      }

      if ((typeof event.button === 'number' && event.button !== 0) || event.shiftKey || event.altKey) {
        return;
      }

      const selectedText = typeof window.getSelection === 'function' ? window.getSelection()?.toString().trim() : '';
      if (selectedText) {
        return;
      }

      navigateCardTarget(targetHref);
    });
  });
}

// ===========================================
// INTERSECTION OBSERVER
// ===========================================
function initIntersectionObserver() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.card-hover, .animate-on-scroll').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card-hover, .animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

function createLazyBatchRenderer(options = {}) {
  const items = Array.isArray(options.items) ? options.items : Array.from(options.items || []);
  const totalCount = items.length;
  const initialCount = Number.isFinite(options.initialCount) ? Math.max(0, options.initialCount) : totalCount;
  const batchSize = Number.isFinite(options.batchSize) ? Math.max(1, options.batchSize) : totalCount || 1;
  const sentinel = options.sentinel || null;
  const fallbackButton = options.fallbackButton || null;
  const onStatus = typeof options.onStatus === 'function' ? options.onStatus : null;
  const renderItem = typeof options.renderItem === 'function'
    ? options.renderItem
    : (item) => {
      item?.removeAttribute?.('data-lazy-pending');
      item.hidden = false;
      item.setAttribute?.('aria-hidden', 'false');
    };

  let visibleCount = Math.min(initialCount, totalCount);
  let observer = null;

  function hasMore() {
    return visibleCount < totalCount;
  }

  function notify() {
    if (onStatus) {
      onStatus({ visibleCount, totalCount, hasMore: hasMore() });
    }
  }

  function renderNow() {
    items.forEach((item, index) => {
      if (!item) {
        return;
      }
      if (index < visibleCount) {
        renderItem(item, index);
        return;
      }
      item.setAttribute?.('data-lazy-pending', 'true');
      item.hidden = true;
      item.setAttribute?.('aria-hidden', 'true');
    });

    if (sentinel) {
      sentinel.hidden = !hasMore();
    }
    if (fallbackButton) {
      fallbackButton.hidden = !hasMore() || typeof IntersectionObserver === 'function';
      fallbackButton.disabled = false;
      fallbackButton.setAttribute('aria-disabled', 'false');
    }
    notify();
  }

  function loadNextBatch() {
    if (!hasMore()) {
      return;
    }
    visibleCount = Math.min(totalCount, visibleCount + batchSize);
    renderNow();
  }

  function handleIntersect(entries) {
    const shouldLoad = Array.isArray(entries) && entries.some((entry) => entry?.isIntersecting);
    if (shouldLoad) {
      loadNextBatch();
    }
  }

  if (sentinel && typeof IntersectionObserver === 'function') {
    observer = new IntersectionObserver(handleIntersect, { rootMargin: '0px 0px 220px 0px' });
    observer.observe(sentinel);
  }

  if (fallbackButton && typeof IntersectionObserver !== 'function') {
    fallbackButton.addEventListener('click', loadNextBatch);
  }

  renderNow();

  return {
    destroy() {
      if (observer) {
        observer.disconnect();
      }
      if (fallbackButton && typeof IntersectionObserver !== 'function') {
        fallbackButton.removeEventListener('click', loadNextBatch);
      }
    },
  };
}

// ===========================================
// COURSE FILTERS
// ===========================================
function initFilterCollection({
  buttonSelector,
  cardSelector,
  resultsSelector,
  statusSelector,
  emptyStateSelector,
  getFilterValue,
  getCategoryValue,
  allLabel,
  countSuffix,
  emptyLabel,
  hasPendingMatches,
  pendingLabel,
}) {
  const filterButtons = document.querySelectorAll(buttonSelector);
  const cards = document.querySelectorAll(cardSelector);
  const resultsCount = resultsSelector ? document.querySelector(resultsSelector) : null;
  const statusRegion = statusSelector ? document.querySelector(statusSelector) : null;
  const emptyState = emptyStateSelector ? document.querySelector(emptyStateSelector) : null;
  const emptyStateMessage =
    emptyState && typeof emptyState.querySelector === "function"
      ? emptyState.querySelector("[data-filter-empty-message]")
      : null;

  if (!filterButtons.length) return null;

  const getCountLabel = (visibleCount) => {
    if (cards.length > 0 && visibleCount === cards.length) {
      return allLabel || `${visibleCount} ${countSuffix || ''}`.trim();
    }
    return `${visibleCount} ${countSuffix || ''}`.trim();
  };

  const updateCount = (visibleCount) => {
    const countLabel = getCountLabel(visibleCount);
    if (resultsCount) {
      resultsCount.textContent = countLabel;
    }
    if (statusRegion) {
      statusRegion.textContent = countLabel;
    }
  };

  const updateEmptyState = (visibleCount, filterValue) => {
    if (!emptyState) return;
    const isEmpty = visibleCount === 0;
    emptyState.hidden = !isEmpty;
    const showPendingState = isEmpty && typeof hasPendingMatches === 'function' && hasPendingMatches(filterValue);
    const resolvedEmptyText = isEmpty
      ? (showPendingState
        ? (pendingLabel || emptyLabel || `${visibleCount} ${countSuffix || ''}`.trim())
        : (emptyLabel || `${visibleCount} ${countSuffix || ''}`.trim()))
      : '';
    if (emptyStateMessage) {
      emptyStateMessage.textContent = resolvedEmptyText;
      return;
    }
    emptyState.textContent = resolvedEmptyText;
  };

  if (!cards.length) {
    updateCount(0);
    updateEmptyState(0, 'all');
    return;
  }

  const initialActiveButton = Array.from(filterButtons).find((button) => button.getAttribute('aria-pressed') === 'true') || filterButtons[0];
  let activeFilter = getFilterValue(initialActiveButton) || 'all';

  const setActiveButton = (filter) => {
    filterButtons.forEach((btn) => {
      const isActive = (getFilterValue(btn) || 'all') === filter;
      if (isActive) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
      btn.setAttribute('aria-pressed', String(isActive));
    });
  };

  const applyFilter = (filter, { updateButtons = false } = {}) => {
    activeFilter = filter || 'all';
    if (updateButtons) {
      setActiveButton(activeFilter);
    }

    let visibleCount = 0;

    cards.forEach((card) => {
      const isLazyPending = card.getAttribute('data-lazy-pending') === 'true';
      const category = getCategoryValue(card);
      const isVisible = !isLazyPending && (activeFilter === 'all' || category === activeFilter);
      card.hidden = !isVisible;
      card.setAttribute('aria-hidden', String(!isVisible));
      if (isVisible) {
        visibleCount += 1;
      }
    });

    updateCount(visibleCount);
    updateEmptyState(visibleCount, activeFilter);
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyFilter(getFilterValue(button), { updateButtons: true });
    });
  });

  setActiveButton(activeFilter);
  applyFilter(activeFilter);

  return {
    refresh() {
      applyFilter(activeFilter);
    },
  };
}

let courseFilterCollection = null;

function initCourseFilters() {
  const allCoursesLabel = LanguageManager.t('courses.results.all') || 'Alle Kurse';
  const countSuffix = LanguageManager.t('courses.results.count_suffix') || 'Kurse';
  const emptyLabel = LanguageManager.t('courses.results.empty') || 'Keine Kurse in dieser Kategorie.';
  const pendingLabel = LanguageManager.t('courses.results.pending') || 'Weitere passende Kurse verfuegbar. Scrollen Sie weiter oder laden Sie mehr.';

  courseFilterCollection = initFilterCollection({
    buttonSelector: '[data-course-filter]',
    cardSelector: '[data-course-category]',
    statusSelector: '[data-course-filter-status]',
    emptyStateSelector: '[data-course-empty-state]',
    getFilterValue: (button) => button.dataset.courseFilter,
    getCategoryValue: (card) => card.dataset.courseCategory,
    allLabel: allCoursesLabel,
    countSuffix,
    emptyLabel,
    hasPendingMatches: (activeFilter) => {
      const cards = document.querySelectorAll('[data-course-category]');
      return Array.from(cards).some((card) => {
        if (card.getAttribute('data-lazy-pending') !== 'true') {
          return false;
        }
        const category = card.dataset.courseCategory;
        return activeFilter === 'all' || category === activeFilter;
      });
    },
    pendingLabel,
  });
}

function initCourseLazyLoading() {
  const routePath = removeLocalePrefix(window.location.pathname || '');
  const isCoursesOverview = /\/courses\/?(?:index\.html)?$/i.test(routePath);
  if (!isCoursesOverview) {
    return;
  }

  const coursesGrid = document.getElementById('courses-grid');
  if (!coursesGrid) {
    return;
  }

  const cards = Array.from(coursesGrid.querySelectorAll('[data-course-category]'));
  if (cards.length <= 6) {
    return;
  }

  const sentinel = document.querySelector('[data-course-load-sentinel]');
  const fallbackButton = document.querySelector('[data-course-load-more]');
  const statusSr = document.querySelector('[data-course-load-status-sr]');

  createLazyBatchRenderer({
    items: cards,
    initialCount: 6,
    batchSize: 3,
    sentinel,
    fallbackButton,
    onStatus: ({ visibleCount, totalCount, hasMore }) => {
      if (statusSr) {
        statusSr.textContent = hasMore
          ? `Zeige ${visibleCount} von ${totalCount} Kursen.`
          : `Alle ${totalCount} Kurse geladen.`;
      }
      courseFilterCollection?.refresh?.();
    },
  });
}

function initLegacyBlogAnchorRedirect() {
  const legacyAnchorTargets = {
    '#blog-article-featured': 'evolution-phishing-ai/',
    '#blog-article-phishing-2026': 'phishing-methods-2026/',
    '#blog-article-deepfake-guide': 'deepfake-guide/',
    '#blog-article-homeoffice-security': 'secure-home-office/',
  };

  const hash = window.location.hash || '';
  const redirectTarget = legacyAnchorTargets[hash];
  if (!redirectTarget) {
    return;
  }

  const pathname = window.location.pathname || '';
  const isBlogOverview = /\/blog\/?(?:index\.html)?$/i.test(pathname);
  if (!isBlogOverview) {
    return;
  }

  window.location.assign(redirectTarget);
}

function initBlogDetailCloseNavigation() {
  const closeLinks = document.querySelectorAll('[data-blog-detail-close]');
  if (!closeLinks.length) {
    return;
  }

  closeLinks.forEach((closeLink) => {
    closeLink.addEventListener('click', (event) => {
      if (!window.history || typeof window.history.back !== 'function' || window.history.length <= 1) {
        return;
      }

      let referrerUrl;
      try {
        referrerUrl = new URL(document.referrer || '');
      } catch (_) {
        return;
      }

      if (referrerUrl.origin !== window.location.origin) {
        return;
      }

      if (!/\/blog\/?(?:index\.html)?$/i.test(referrerUrl.pathname || '')) {
        return;
      }

      event.preventDefault();
      window.history.back();
    });
  });
}

let blogFilterCollection = null;

function initBlogFilters() {
  const allArticlesLabel = LanguageManager.t('blog.results.all') || 'Aktuelle Artikel';
  const countSuffix = LanguageManager.t('blog.results.count_suffix') || 'Artikel';
  const emptyLabel = LanguageManager.t('blog.results.empty') || 'Keine Artikel in dieser Kategorie.';
  const pendingLabel = LanguageManager.t('blog.results.pending') || 'Weitere passende Artikel verfuegbar. Scrollen Sie weiter oder laden Sie mehr.';

  blogFilterCollection = initFilterCollection({
    buttonSelector: '[data-blog-filter]',
    cardSelector: '[data-blog-category]',
    statusSelector: '[data-blog-filter-status]',
    emptyStateSelector: '[data-blog-empty-state]',
    getFilterValue: (button) => button.dataset.blogFilter,
    getCategoryValue: (card) => card.dataset.blogCategory,
    allLabel: allArticlesLabel,
    countSuffix,
    emptyLabel,
    hasPendingMatches: (activeFilter) => {
      const cards = document.querySelectorAll('[data-blog-category]');
      return Array.from(cards).some((card) => {
        if (card.getAttribute('data-lazy-pending') !== 'true') {
          return false;
        }
        const category = card.dataset.blogCategory;
        return activeFilter === 'all' || category === activeFilter;
      });
    },
    pendingLabel,
  });
}

function initBlogLazyLoading() {
  const routePath = removeLocalePrefix(window.location.pathname || '');
  const isBlogOverview = /\/blog\/?(?:index\.html)?$/i.test(routePath);
  if (!isBlogOverview) {
    return;
  }

  const blogGrid = document.getElementById('blog-grid');
  if (!blogGrid) {
    return;
  }

  const cards = Array.from(blogGrid.querySelectorAll('[data-blog-category]'));
  if (cards.length <= 6) {
    return;
  }

  const sentinel = document.querySelector('[data-blog-load-sentinel]');
  const fallbackButton = document.querySelector('[data-blog-load-more]');
  const statusSr = document.querySelector('[data-blog-load-status-sr]');

  createLazyBatchRenderer({
    items: cards,
    initialCount: 6,
    batchSize: 3,
    sentinel,
    fallbackButton,
    onStatus: ({ visibleCount, totalCount, hasMore }) => {
      if (statusSr) {
        statusSr.textContent = hasMore
          ? `Zeige ${visibleCount} von ${totalCount} Artikeln.`
          : `Alle ${totalCount} Artikel geladen.`;
      }
      blogFilterCollection?.refresh?.();
    },
  });
}

function initLandingCoursePreviewFilters() {
  const allCoursesLabel = LanguageManager.t('courses.results.all') || 'Alle Kurse';
  const countSuffix = LanguageManager.t('courses.results.count_suffix') || 'Kurse';
  const emptyLabel = LanguageManager.t('landing.courses.results.empty') || 'Keine Kurse in dieser Vorschau. Alle Kurse anzeigen.';

  initFilterCollection({
    buttonSelector: '[data-landing-course-filter]',
    cardSelector: '[data-landing-course-category]',
    statusSelector: '[data-landing-course-filter-status]',
    emptyStateSelector: '[data-landing-course-empty-state]',
    getFilterValue: (button) => button.dataset.landingCourseFilter,
    getCategoryValue: (card) => card.dataset.landingCourseCategory,
    allLabel: allCoursesLabel,
    countSuffix,
    emptyLabel,
  });
}

function initNewsletterForm() {
  const form = document.querySelector('[data-newsletter-form]');
  if (!form) return;

  const submitButton = form.querySelector('[data-newsletter-submit]');
  const emailInput = form.querySelector('input[type="email"]');
  const statusElement = document.querySelector('[data-newsletter-status]');
  if (!submitButton || !emailInput) return;

  const defaultLabel = submitButton.textContent;
  const resolveEndpoint = (actionValue) => {
    const rawAction = (actionValue || '').trim();
    if (rawAction === '#') return null;

    let endpoint;
    try {
      endpoint = new URL(rawAction || window.location.href, window.location.href);
    } catch (error) {
      return null;
    }

    if (!/^https?:$/.test(endpoint.protocol)) {
      return null;
    }

    if (endpoint.origin !== window.location.origin) {
      return null;
    }

    return endpoint;
  };

  const getCsrfToken = () => {
    const tokenInput = form.querySelector('input[name="csrf_token"], input[name="_csrf"], input[name="csrfToken"]');
    if (tokenInput?.value) {
      return tokenInput.value;
    }

    const metaToken = document.querySelector('meta[name="csrf-token"]');
    return metaToken?.getAttribute('content') || '';
  };

  const setStatus = (message) => {
    if (statusElement) {
      statusElement.textContent = message;
    }
  };

  const setPending = (isPending) => {
    submitButton.disabled = isPending;
    submitButton.setAttribute('aria-disabled', String(isPending));
    form.setAttribute('aria-busy', String(isPending));
    submitButton.textContent = isPending ? (LanguageManager.t('newsletter.loading') || 'Sending...') : defaultLabel;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      const message = LanguageManager.t('form.error.email') || 'Please enter a valid email address.';
      setStatus(message);
      showToast(message, 'error');
      emailInput.focus();
      return;
    }

    const endpoint = resolveEndpoint(form.getAttribute('action'));
    if (!endpoint) {
      const message = LanguageManager.t('newsletter.error.unavailable') || 'Newsletter is currently unavailable.';
      setStatus(message);
      showToast(message, 'error');
      return;
    }

    setPending(true);
    let timeout = null;
    try {
      const controller = new AbortController();
      timeout = setTimeout(() => controller.abort(), 8000);
      const csrfToken = getCsrfToken();
      const headers = {};
      if (csrfToken) {
        headers['x-csrf-token'] = csrfToken;
      }

      const response = await fetch(endpoint.toString(), {
        method: 'POST',
        credentials: 'same-origin',
        headers,
        body: new FormData(form),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`newsletter_request_failed_${response.status}`);
      }

      const message = LanguageManager.t('newsletter.success') || 'Message sent successfully!';
      setStatus(message);
      showToast(message, 'success');
      form.reset();
    } catch (error) {
      const message = LanguageManager.t('newsletter.error.network') || 'Sending failed. Please try again later.';
      setStatus(message);
      showToast(message, 'error');
    } finally {
      if (timeout) clearTimeout(timeout);
      setPending(false);
    }
  });
}

// ===========================================
// TOAST NOTIFICATIONS
// ===========================================
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl text-white font-medium z-50 transform translate-y-20 opacity-0 transition-all duration-300 ${
    type === 'success' ? 'bg-cyber-green' :
    type === 'error' ? 'bg-red-500' :
    'bg-primary-500'
  }`;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===========================================
// FORM HELPERS
// ===========================================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function handleContactForm(form, statusElement) {
  const email = form.querySelector('input[type="email"]')?.value.trim() || '';
  const name = form.querySelector('input[name="name"]')?.value.trim() || '';
  const message = form.querySelector('textarea')?.value.trim() || '';
  const setStatus = (value, state = 'idle') => {
    if (statusElement) {
      statusElement.textContent = value;
      statusElement.dataset.state = state;
    }
  };

  if (!name || !email || !message) {
    const statusMessage = LanguageManager.t('form.error.required') || 'Please fill all required fields.';
    setStatus(statusMessage, 'error');
    showToast(statusMessage, 'error');
    return false;
  }

  if (!validateEmail(email)) {
    const statusMessage = LanguageManager.t('form.error.email') || 'Please enter a valid email address.';
    setStatus(statusMessage, 'error');
    showToast(statusMessage, 'error');
    return false;
  }

  // Here you would typically send to your backend
  const statusMessage = LanguageManager.t('form.success') || 'Message sent successfully!';
  setStatus(statusMessage, 'success');
  showToast(statusMessage, 'success');
  form.reset();
  return true;
}

function initBlogHeadingTemplateFallback() {
  const routePath = removeLocalePrefix(window.location.pathname || '');
  if (!/(^|\/)blog(\/|$)/i.test(routePath)) {
    return;
  }

  const headingSections = Array.from(document.querySelectorAll('main > section'));
  const headingSection = headingSections.find((section) => section?.textContent?.includes('{{HEADING_'));
  if (!headingSection) {
    return;
  }

  const headingContainer = headingSection.querySelector('.max-w-7xl');
  if (!headingContainer) {
    return;
  }

  const tokenPattern = /\{\{HEADING_[A-Z_]+\}\}/g;
  const cleanTokenText = (value) => String(value || '').replace(tokenPattern, '').trim();
  const tokenNodes = Array.from(headingContainer.childNodes || []).filter((node) => node?.nodeType === 3);
  tokenNodes.forEach((node) => {
    const cleaned = String(node.textContent || '').replace(tokenPattern, '');
    node.textContent = cleaned.trim() ? cleaned : '';
  });

  const descendants = [headingContainer, ...Array.from(headingContainer.querySelectorAll?.('*') || [])];
  descendants.forEach((element) => {
    if (!element || typeof element.getAttributeNames !== 'function') {
      return;
    }
    element.getAttributeNames().forEach((attributeName) => {
      if (attributeName.includes('{{') || attributeName.includes('}}')) {
        element.removeAttribute(attributeName);
      }
    });
  });

  const isEnglish = String(document.documentElement?.lang || '').toLowerCase().startsWith('en');
  const isBlogOverview = /(^|\/)blog\/?(?:index\.html)?$/i.test(routePath);
  const detailTitleSelector = isEnglish
    ? '[data-blog-detail-content] h2[data-locale-only="en"]'
    : '[data-blog-detail-content] h2[data-locale-only="de"]';
  const detailTitleNode = document.querySelector(detailTitleSelector) || document.querySelector('[data-blog-detail-content] h2');
  const fallbackTitle = detailTitleNode?.textContent?.trim()
    || (isBlogOverview
      ? (isEnglish ? 'Latest Articles' : 'Aktuelle Artikel')
      : (isEnglish ? 'Blog Article' : 'Blogartikel'));
  const fallbackSubtitle = isEnglish
    ? 'Practical guidance for cyber defense, awareness, and secure digital work.'
    : 'Praxisnahe Leitfaeden fuer Cyber-Abwehr, Awareness und sicheres digitales Arbeiten.';

  const kickerNode = headingContainer.querySelector('span.font-pixel');
  if (kickerNode) {
    kickerNode.textContent = 'Blog';
  }

  const titleNode = headingContainer.querySelector('h1');
  if (titleNode) {
    titleNode.textContent = cleanTokenText(titleNode.textContent) || fallbackTitle;
  }

  let subtitleNode = headingContainer.querySelector('p');
  if (!subtitleNode) {
    subtitleNode = document.createElement('p');
    subtitleNode.className = 'text-xl text-gray-300 max-w-3xl mx-auto space-lead';
    headingContainer.appendChild(subtitleNode);
  }
  subtitleNode.textContent = cleanTokenText(subtitleNode.textContent) || fallbackSubtitle;
}

// ===========================================
// FAVORITES (Mock + Static UI)
// ===========================================
const FAVORITES_STORAGE_KEY = "snappinquiz-favorites-v1";

function normalizeFavoriteType(type) {
  return type === "blog" ? "blog" : "courses";
}

function safeReadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) {
      return { courses: [], blog: [], meta: {} };
    }
    const parsed = JSON.parse(raw);

    const coerceList = (value) => {
      if (Array.isArray(value)) return value;
      if (typeof value === "string") return [value];
      return [];
    };

    const cleanup = (ref) => {
      let next = normalizeFavoriteRef(ref);
      // Migrate older buggy values such as "courses/courses/..."
      while (next.startsWith("courses/courses/")) next = next.replace(/^courses\//, "");
      while (next.startsWith("blog/blog/")) next = next.replace(/^blog\//, "");
      return next;
    };

    const dedupe = (values) => [...new Set(values)];
    const courses = dedupe(coerceList(parsed?.courses).map(cleanup).filter((v) => v && v.startsWith("courses/")));
    const blog = dedupe(coerceList(parsed?.blog).map(cleanup).filter((v) => v && v.startsWith("blog/")));

    const meta = {};
    const rawMeta = parsed?.meta && typeof parsed.meta === "object" ? parsed.meta : {};
    Object.keys(rawMeta || {}).forEach((key) => {
      const normalizedKey = cleanup(key);
      if (!normalizedKey) return;
      if (!normalizedKey.startsWith("courses/") && !normalizedKey.startsWith("blog/")) return;
      const value = rawMeta[key];
      if (!value || typeof value !== "object") return;
      meta[normalizedKey] = value;
    });

    return { courses, blog, meta };
  } catch (_) {
    return { courses: [], blog: [], meta: {} };
  }
}

function safeWriteFavorites(nextState) {
  try {
    const state = nextState && typeof nextState === "object" ? nextState : {};
    const courses = Array.isArray(state.courses) ? state.courses : [];
    const blog = Array.isArray(state.blog) ? state.blog : [];
    const meta = state.meta && typeof state.meta === "object" ? state.meta : {};
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify({ courses, blog, meta }));
  } catch (_) {
    // no-op if storage is unavailable
  }
}

function normalizeFavoriteRef(ref) {
  const raw = String(ref || "").trim();
  if (!raw) return "";
  try {
    const isAbsoluteUrl = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw);
    const isRootRelative = raw.startsWith("/");
    // Stored refs and in-app hrefs like "courses/..." should be treated as site-root paths.
    // Otherwise URL resolution will incorrectly make them relative to the current page path.
    const isLikelyAppPath = /^(?:de|en)\/(courses|blog)\//i.test(raw) || /^(courses|blog)\//i.test(raw);
    const input = (isAbsoluteUrl || isRootRelative) ? raw : (isLikelyAppPath ? `/${raw}` : raw);
    // Respect <base href="..."> on static pages. 
    const url = new URL(input, document.baseURI || window.location.href); 
    let pathname = url.pathname || ""; 
    pathname = pathname.replace(/\/index\.html$/i, "/"); 
    // Canonicalize by dropping anything before the first "courses" or "blog" segment.
    // This keeps favorites stable even if the site is deployed under a subpath (e.g. /profile-mockup/).
    const parts = pathname.replace(/^\/+/, "").split("/").filter(Boolean);
    const markerIndex = parts.findIndex((segment) => segment === "courses" || segment === "blog");
    if (markerIndex === -1) return "";
    const relevant = (markerIndex > 0 ? parts.slice(markerIndex) : parts).join("/");
    const trimmed = relevant.replace(/^(de|en)\//i, "");
    if (!trimmed) return ""; 
    return trimmed.endsWith("/") ? trimmed : `${trimmed}/`;
  } catch (_) {
    const cleaned = String(raw || "").trim().replace(/\/index\.html$/i, "/");
    const withoutLeading = cleaned.replace(/^\/+/, "");
    if (!withoutLeading) return "";
    const pieces = withoutLeading.split("/").filter(Boolean);
    const markerIndex = pieces.findIndex((segment) => segment === "courses" || segment === "blog");
    if (markerIndex === -1) return "";
    const relevantPieces = markerIndex > 0 ? pieces.slice(markerIndex) : pieces;
    const relevant = relevantPieces.join("/");
    const withoutLocale = relevant.replace(/^(de|en)\//i, "");
    const next = withoutLocale.replace(/^\/+/, "");
    if (!next) return "";
    return next.endsWith("/") ? next : `${next}/`;
  }
}

function buildPixelHeartSvg() {
  // 16x16-ish pixel heart made from rects so it matches the crispEdges icon style.
  return `
    <svg viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true">
      <g data-heart-outline>
        <rect x="4" y="2" width="1" height="1"></rect><rect x="5" y="2" width="1" height="1"></rect><rect x="10" y="2" width="1" height="1"></rect><rect x="11" y="2" width="1" height="1"></rect>
        <rect x="3" y="3" width="1" height="1"></rect><rect x="6" y="3" width="1" height="1"></rect><rect x="9" y="3" width="1" height="1"></rect><rect x="12" y="3" width="1" height="1"></rect>
        <rect x="2" y="4" width="1" height="1"></rect><rect x="7" y="4" width="1" height="1"></rect><rect x="8" y="4" width="1" height="1"></rect><rect x="13" y="4" width="1" height="1"></rect>
        <rect x="2" y="5" width="1" height="1"></rect><rect x="13" y="5" width="1" height="1"></rect>
        <rect x="3" y="6" width="1" height="1"></rect><rect x="12" y="6" width="1" height="1"></rect>
        <rect x="4" y="7" width="1" height="1"></rect><rect x="11" y="7" width="1" height="1"></rect>
        <rect x="5" y="8" width="1" height="1"></rect><rect x="10" y="8" width="1" height="1"></rect>
        <rect x="6" y="9" width="1" height="1"></rect><rect x="9" y="9" width="1" height="1"></rect>
        <rect x="7" y="10" width="1" height="1"></rect><rect x="8" y="10" width="1" height="1"></rect>
      </g>
      <g data-heart-filled>
        <rect x="4" y="2" width="1" height="1"></rect><rect x="5" y="2" width="1" height="1"></rect><rect x="10" y="2" width="1" height="1"></rect><rect x="11" y="2" width="1" height="1"></rect>
        <rect x="3" y="3" width="4" height="1"></rect><rect x="9" y="3" width="4" height="1"></rect>
        <rect x="2" y="4" width="12" height="1"></rect>
        <rect x="2" y="5" width="12" height="1"></rect>
        <rect x="3" y="6" width="10" height="1"></rect>
        <rect x="4" y="7" width="8" height="1"></rect>
        <rect x="5" y="8" width="6" height="1"></rect>
        <rect x="6" y="9" width="4" height="1"></rect>
        <rect x="7" y="10" width="2" height="1"></rect>
      </g>
    </svg>
  `.trim();
}

function setFavoriteButtonState(button, isPressed) {
  if (!button) return;
  button.setAttribute("aria-pressed", String(Boolean(isPressed)));
  const labelKey = isPressed ? "favorites.remove" : "favorites.add";
  const fallback = isPressed ? "Remove from favorites" : "Add to favorites";
  button.setAttribute("aria-label", LanguageManager.t(labelKey) || fallback);
  button.title = LanguageManager.t(labelKey) || fallback;
}

function toggleFavorite(type, ref, meta) {
  const normalizedType = normalizeFavoriteType(type);
  const normalizedRef = normalizeFavoriteRef(ref);
  if (!normalizedRef) return { ok: false, pressed: false };

  const current = safeReadFavorites();
  const key = normalizedType === "blog" ? "blog" : "courses";
  const list = [...(current[key] || [])].map((v) => normalizeFavoriteRef(v)).filter(Boolean);
  const has = list.includes(normalizedRef);
  const nextList = has ? list.filter((v) => v !== normalizedRef) : [...list, normalizedRef];
  const nextMeta = { ...(current.meta || {}) };
  if (has) {
    delete nextMeta[normalizedRef];
  } else if (meta && typeof meta === "object") {
    nextMeta[normalizedRef] = meta;
  }
  const next = { ...current, [key]: nextList, meta: nextMeta };
  safeWriteFavorites(next);
  window.dispatchEvent(new CustomEvent("snappinquiz:favorites-changed", { detail: { type: key, ref: normalizedRef, pressed: !has } }));
  return { ok: true, pressed: !has };
}

function ensureFavoriteButton(target, options) {
  if (!target) return null;
  const existing = target.querySelector?.("[data-favorite-button]");
  if (existing instanceof HTMLButtonElement) return existing;

  const normalizedRef = normalizeFavoriteRef(options.ref);
  if (!normalizedRef) return null;
  const button = document.createElement("button");
  button.type = "button";
  button.className = options.variant === "hero"
    ? "favorite-heart-button favorite-heart-button--hero"
    : "favorite-heart-button";
  button.dataset.favoriteButton = "true";
  button.dataset.favoriteType = options.type;
  button.dataset.favoriteRef = normalizedRef;
  button.innerHTML = buildPixelHeartSvg();

  const { courses, blog } = safeReadFavorites();
  const pressed = options.type === "blog"
    ? blog.map((v) => normalizeFavoriteRef(v)).includes(normalizedRef)
    : courses.map((v) => normalizeFavoriteRef(v)).includes(normalizedRef);
  setFavoriteButtonState(button, pressed);

  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const btnType = button.dataset.favoriteType;
    const btnRef = button.dataset.favoriteRef;
    const meta = extractFavoriteMeta(button, btnType, btnRef);
    const result = toggleFavorite(btnType, btnRef, meta);
    if (result.ok) {
      setFavoriteButtonState(button, result.pressed);
    }
  });

  target.appendChild(button);
  return button;
}

function extractFavoriteMeta(button, type, ref) {
  const normalizedRef = normalizeFavoriteRef(ref);
  if (!normalizedRef) return null;
  const safeType = type === "blog" ? "blog" : "course";

  const storeStrings = (value) => {
    const text = String(value || "").trim();
    return { de: text, en: text };
  };
  const storeParts = (parts) => {
    const out = Array.isArray(parts) ? parts.map((p) => String(p || "").trim()).filter(Boolean) : [];
    return { de: out, en: out };
  };

  const metaFromCard = () => {
    const card = button.closest?.(".content-library-entry-card");
    if (!card) return null;
    const categoryKey = String(card.getAttribute("data-course-category") || card.getAttribute("data-blog-category") || "").trim();
    const media = card.querySelector(".content-library-entry-media");
    const mediaImage = media?.getAttribute("data-media-image") || media?.dataset?.mediaImage || "";
    const title = card.querySelector(".content-library-entry-title a")?.textContent?.trim() || "";
    const description = card.querySelector(".content-library-entry-description")?.textContent?.trim() || "";
    const tag = card.querySelector(".content-library-entry-media .content-library-entry-tag")?.textContent?.trim() || "";
    const metaParts = [...(card.querySelectorAll(".content-library-entry-meta > span") || [])]
      .map((node) => node?.textContent?.trim())
      .filter((txt) => txt && txt !== "|");
    return {
      type: safeType,
      categoryKey: categoryKey || (safeType === "blog" ? "general" : "security"),
      mediaImage,
      href: normalizedRef,
      title: storeStrings(title),
      description: storeStrings(description),
      tag: storeStrings(tag || (safeType === "blog" ? "Blog" : "Kurs")),
      meta: storeParts(metaParts),
    };
  };

  const courseMetaBySlug = {
    "it-sicherheit-grundlagen": { mediaImage: "course-it-security", categoryKey: "security" },
    "phishing-awareness-pro": { mediaImage: "course-phishing-awareness", categoryKey: "phishing" },
    "dsgvo-compliance": { mediaImage: "course-dsgvo", categoryKey: "gdpr" },
    "social-engineering-abwehr": { mediaImage: "course-social-engineering", categoryKey: "social" },
    "sicheres-home-office": { mediaImage: "course-home-office", categoryKey: "homeoffice" },
    "ki-betrug-und-deepfakes": { mediaImage: "course-ai-deepfakes", categoryKey: "ai" },
  };

  const metaFromCourseHero = () => {
    const courseSlug = document.body?.dataset?.courseSlug;
    if (!courseSlug) return null;
    const mapping = courseMetaBySlug[courseSlug] || { mediaImage: "", categoryKey: "security" };
    const title = document.querySelector("[data-course-detail-summary] h2")?.textContent?.trim() || "";
    const description = document.querySelector("[data-course-detail-summary] p.text-gray-400")?.textContent?.trim() || "";
    const tag = document.querySelector("[data-course-header-image] .content-library-entry-tag")?.textContent?.trim() || "";
    const metaParts = [...(document.querySelectorAll("[data-course-detail-summary] .text-sm.text-gray-400 > span") || [])]
      .map((node) => node?.textContent?.trim())
      .filter((txt) => txt && txt !== "|");
    return {
      type: "course",
      categoryKey: mapping.categoryKey,
      mediaImage: mapping.mediaImage,
      href: normalizedRef,
      title: storeStrings(title || courseSlug),
      description: storeStrings(description),
      tag: storeStrings(tag || "Kurs"),
      meta: storeParts(metaParts),
    };
  };

  const metaFromBlogHero = () => {
    const media = button.parentElement;
    const mediaImage = media?.getAttribute?.("data-media-image") || media?.dataset?.mediaImage || "";
    const title = document.querySelector('[data-blog-detail-content] h2[data-locale-only="de"]')?.textContent?.trim()
      || document.querySelector('[data-blog-detail-content] h2')?.textContent?.trim()
      || "";
    const tag = document.querySelector("[data-blog-detail-media] .content-library-entry-tag")?.textContent?.trim() || "";
    const metaParts = [...(document.querySelectorAll("[data-blog-detail-content] .content-library-entry-meta > span") || [])]
      .map((node) => node?.textContent?.trim())
      .filter((txt) => txt && txt !== "|");
    return {
      type: "blog",
      categoryKey: String(document.querySelector("[data-blog-detail-box]")?.getAttribute?.("data-blog-detail-article") || "general"),
      mediaImage,
      href: normalizedRef,
      title: storeStrings(title),
      description: storeStrings(""),
      tag: storeStrings(tag || "Blog"),
      meta: storeParts(metaParts),
    };
  };

  return metaFromCard()
    || (safeType === "course" ? metaFromCourseHero() : metaFromBlogHero())
    || null;
}

function isFavoritePressed(type, ref, favorites) {
  const normalizedRef = normalizeFavoriteRef(ref);
  if (!normalizedRef) return false;
  const state = favorites || safeReadFavorites();
  const list = type === "blog" ? state.blog : state.courses;
  return list.map((v) => normalizeFavoriteRef(v)).includes(normalizedRef);
}

function syncAllFavoriteButtons() {
  const favorites = safeReadFavorites();
  document.querySelectorAll("[data-favorite-button]").forEach((node) => {
    if (!(node instanceof HTMLButtonElement)) return;
    const type = node.dataset.favoriteType === "blog" ? "blog" : "course";
    const ref = node.dataset.favoriteRef;
    setFavoriteButtonState(node, isFavoritePressed(type, ref, favorites));
  });
}

function initFavorites() {
  // Overview cards (courses + blog)
  document.querySelectorAll(".content-library-entry-card").forEach((card) => {
    const media = card.querySelector(".content-library-entry-media");
    if (!media) return;
    const link =
      card.querySelector(".content-library-entry-title a[href], .content-library-entry-footer a[href]")
      || card.querySelector('a[href*="/courses/"], a[href^="courses/"], a[href*="courses/"], a[href*="/blog/"], a[href^="blog/"], a[href*="blog/"]');
    // Prefer resolved URL (respects <base href>) but keep attribute as fallback.
    const href = link?.href || link?.getAttribute("href");
    const normalized = normalizeFavoriteRef(href);
    if (!normalized) return;
    if (!normalized.startsWith("courses/") && !normalized.startsWith("blog/")) return;
    const type = normalized.startsWith("blog/") ? "blog" : "course";
    ensureFavoriteButton(media, { type, ref: normalized });
  });

  // Course detail hero image
  const courseHeader = document.querySelector("[data-course-header-image]");
  const courseSlug = document.body?.dataset?.courseSlug;
  if (courseHeader && courseSlug) {
    ensureFavoriteButton(courseHeader, { type: "course", ref: `courses/${courseSlug}/`, variant: "hero" });
  }

  // Blog detail hero image
  const blogHeader = document.querySelector("[data-blog-detail-media]");
  const blogSlug = document.querySelector("[data-blog-detail-article]")?.getAttribute("data-blog-detail-article");
  if (blogHeader && blogSlug) {
    ensureFavoriteButton(blogHeader, { type: "blog", ref: `blog/${blogSlug}/`, variant: "hero" });
  }

  if (window.__snappinquizFavoritesListenersBound) {
    syncAllFavoriteButtons();
    return;
  }
  window.__snappinquizFavoritesListenersBound = true;

  // Keep aria-labels and state in sync on language changes, same-tab updates, and cross-tab updates.
  window.addEventListener("languageChanged", syncAllFavoriteButtons);
  window.addEventListener("snappinquiz:favorites-changed", syncAllFavoriteButtons);
  window.addEventListener("storage", (event) => {
    if (event?.key === FAVORITES_STORAGE_KEY) {
      syncAllFavoriteButtons();
    }
  });
}

// ===========================================
// INIT
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  LanguageManager.init();
  initBlogHeadingTemplateFallback();
  initPricingNavLink();
  ProfileMenu.init();
  initFavorites();
  initCourseAccessControl();
  initMobileMenu();
  initNavbarScroll();
  initSmoothScroll();
  initCardClickNavigation();
  initIntersectionObserver();
  initLegacyBlogAnchorRedirect();
  initBlogDetailCloseNavigation();
  initLandingCoursePreviewFilters();
  initCourseFilters();
  initCourseLazyLoading();
  initBlogFilters();
  initBlogLazyLoading();
  initNewsletterForm();

  // Handle contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const statusElement = contactForm.querySelector('[data-contact-status]');
    const defaultSubmitLabel = submitButton ? submitButton.textContent.trim() : '';
    const loadingLabel = LanguageManager.t('newsletter.loading') || 'Sending...';
    const clearStatus = () => {
      if (!statusElement) return;
      statusElement.textContent = '';
      statusElement.dataset.state = 'idle';
    };

    const setPending = (isPending) => {
      contactForm.setAttribute('aria-busy', String(isPending));
      if (statusElement && isPending) {
        statusElement.textContent = loadingLabel;
        statusElement.dataset.state = 'loading';
      }
      if (!submitButton) return;
      submitButton.disabled = isPending;
      submitButton.setAttribute('aria-disabled', String(isPending));
      submitButton.textContent = isPending ? loadingLabel : defaultSubmitLabel;
    };

    contactForm.querySelectorAll('input, textarea').forEach((field) => {
      field.addEventListener('input', () => {
        if (contactForm.getAttribute('aria-busy') === 'true') {
          return;
        }
        const state = statusElement?.dataset?.state;
        if (state === 'error' || state === 'success') {
          clearStatus();
        }
      });
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (contactForm.getAttribute('aria-busy') === 'true') {
        return;
      }

      setPending(true);
      try {
        await handleContactForm(contactForm, statusElement);
      } finally {
        setPending(false);
      }
    });
  }
});

// Export for global access
window.SnappinQuiz = {
  ThemeManager,
  LanguageManager,
  ProfileMenu,
  showToast,
  validateEmail,
  t: (key) => LanguageManager.t(key)
};

