import { createApp, ref, computed, provide, onMounted } from 'vue'
import App from './App.vue'

// CSS Variables
const root = document.documentElement
root.style.setProperty('--bg', '#030712')
root.style.setProperty('--surface', '#0a1020')
root.style.setProperty('--card', '#0d1630')
root.style.setProperty('--border', 'rgba(99,179,237,0.12)')
root.style.setProperty('--border-h', 'rgba(99,179,237,0.4)')
root.style.setProperty('--primary', '#3b82f6')
root.style.setProperty('--primary2', '#60a5fa')
root.style.setProperty('--violet', '#8b5cf6')
root.style.setProperty('--cyan', '#22d3ee')
root.style.setProperty('--gold', '#f59e0b')
root.style.setProperty('--text', '#e2e8f0')
root.style.setProperty('--text-dim', 'rgba(226,232,240,0.55)')
root.style.setProperty('--nav-h', '70px')
root.style.setProperty('--radius', '16px')
root.style.setProperty('--transition', 'all 0.35s cubic-bezier(0.25,0.8,0.25,1)')

// State
const themeModeState = ref(localStorage.getItem('aq-theme-mode') || 'dark')
const langState = ref(localStorage.getItem('aq-lang') || 'ms')

// Theme system
function applyThemeByMode(mode) {
  if (mode === 'light') {
    root.style.setProperty('--bg', '#f0f6ff')
    root.style.setProperty('--surface', '#e4edf9')
    root.style.setProperty('--card', '#ffffff')
    root.style.setProperty('--border', 'rgba(59,130,246,0.18)')
    root.style.setProperty('--border-h', 'rgba(59,130,246,0.5)')
    root.style.setProperty('--text', '#0f172a')
    root.style.setProperty('--text-dim', 'rgba(15,23,42,0.55)')
  } else {
    root.style.setProperty('--bg', '#030712')
    root.style.setProperty('--surface', '#0a1020')
    root.style.setProperty('--card', '#0d1630')
    root.style.setProperty('--border', 'rgba(99,179,237,0.12)')
    root.style.setProperty('--border-h', 'rgba(99,179,237,0.4)')
    root.style.setProperty('--text', '#e2e8f0')
    root.style.setProperty('--text-dim', 'rgba(226,232,240,0.55)')
  }
}

applyThemeByMode(themeModeState.value)

function cycleTheme() {
  if (themeModeState.value === 'light') themeModeState.value = 'dark'
  else if (themeModeState.value === 'dark') themeModeState.value = 'auto'
  else themeModeState.value = 'light'
}

const themeDesktop = document.getElementById('themeDesktop')
const themeMobile = document.getElementById('themeMobile')
if (themeDesktop) themeDesktop.addEventListener('click', cycleTheme)
if (themeMobile) themeMobile.addEventListener('click', cycleTheme)

// Language handling (simple text replacement, no i18n library)
let lang = 'ms'
function applyLang() {
  const isEN = lang === 'en'
  const rootEl = document.documentElement
  rootEl.lang = isEN ? 'en' : 'ms'

  // Update all data-ms/data-en elements
  document.querySelectorAll('[data-ms]').forEach(el => {
    const key = isEN ? 'en' : 'ms'
    if (el.dataset[key]) el.textContent = el.dataset[key]
  })
}

// Set initial language from localStorage or default
lang = localStorage.getItem('aq-lang') || 'ms'
applyLang()

const langDesktop = document.getElementById('langDesktop')
const langMobile = document.getElementById('langMobile')

if (langDesktop) {
  langDesktop.textContent = lang === 'en' ? 'EN' : 'MS'
  langDesktop.addEventListener('click', () => {
    lang = lang === 'ms' ? 'en' : 'ms'
    localStorage.setItem('aq-lang', lang)
    applyLang()
  })
}

if (langMobile) {
  langMobile.textContent = lang === 'en' ? 'EN' : 'MS'
  langMobile.addEventListener('click', () => {
    lang = lang === 'ms' ? 'en' : 'ms'
    localStorage.setItem('aq-lang', lang)
    applyLang()
  })
}

// Create Vue app - NO i18n, NO router, pure vanilla setup
const app = createApp(App)
app.mount('#app')
