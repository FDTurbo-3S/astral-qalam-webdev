<template>
  <div class="app" :class="{ light: isLight }">
    <!-- Star Canvas Background -->
    <canvas id="starCanvas"></canvas>
    <div class="nebula"></div>

    <!-- Navigation Bar -->
    <nav id="navbar">
      <div class="container nav-inner">
        <router-link to="/home" class="logo">
          <div class="logo-gem">
            <svg viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" :style="`stop-color:${primary}`"></stop>
                  <stop offset="100%" :style="`stop-color:${cyan}`"></stop>
                </linearGradient>
              </defs>
              <polygon points="16,2 28,10 28,22 16,30 4,22 4,10" :fill="'url(#lg1)'" opacity=".9"></polygon>
              <polygon points="16,7 23,12 23,20 16,25 9,20 9,12" fill="rgba(0,0,0,0.4)"></polygon>
              <polygon points="16,7 23,12 16,16" fill="rgba(255,255,255,0.3)"></polygon>
            </svg>
          </div>
          <span>Astral Qalam</span>
        </router-link>
        <ul class="nav-links" id="navLinks">
          <li><router-link to="/home#about" data-ms="Tentang Kami" :data-en="'About Us'">Tentang Kami</router-link></li>
          <li><router-link to="/home#usp" data-ms="Kelebihan" :data-en="'Why Us'">Kelebihan</router-link></li>
          <li><router-link to="/home#services" data-ms="Servis" :data-en="'Services'">Servis</router-link></li>
          <li><router-link to="/home#portfolio" data-ms="Portfolio" :data-en="'Portfolio'">Portfolio</router-link></li>
          <li><router-link to="/home#pricing" data-ms="Pakej" :data-en="'Pricing'">Pakej</router-link></li>
          <li class="dropdown" id="ddInovasi">
            <span class="drop-toggle" id="dropToggle">
              <span data-ms="Inovasi Kami" :data-en="'Our Innovations'">Inovasi Kami</span>
              <span class="drop-arrow">▾</span>
            </span>
            <ul class="drop-menu" id="dropMenu">
              <li><a href="https://astralqalam.interactivelink.site/mama-homestay" target="_blank">
                <span class="dm-icon dm-stay">🏡</span>
                <span>Astral Qalam Stay</span>
              </a></li>
              <li><a href="https://astralqalam.interactivelink.site/Sumbangan" target="_blank">
                <span class="dm-icon dm-sumbang">🤝</span>
                <span>Astral Qalam Sumbang</span>
              </a></li>
              <li><a href="https://www.tiktok.com/@amarjecukup?_r=1&_t=ZS-96C1a7XAgfV" target="_blank">
                <span class="dm-icon dm-edu">🎓</span>
                <span>Astral Qalam Edu</span>
              </a></li>
              <li><a href="https://astralqalam.interactivelink.site/waktu-solat" target="_blank">
                <span class="dm-icon dm-tool">🛠️</span>
                <span>Astral Qalam Tool</span>
              </a></li>
            </ul>
          </li>
        </ul>
        <div class="nav-controls">
          <button class="ctrl-btn lang-btn" id="langDesktop">MS</button>
          <button class="ctrl-btn" id="themeDesktop">🌙</button>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </nav>

    <!-- Main Content Router View -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Floating Action Buttons -->
    <button id="scrollTop" title="Kembali ke Atas">↑</button>

    <div class="fab-container" id="fabContainer">
      <button class="fab fab-chat" id="fabChat" data-tooltip="💬 AI Assistant" aria-label="AI Assistant">💬</button>
      <button class="fab fab-demo" id="fabDemo" data-tooltip="📅 Book Demo" aria-label="Book Free Consultation">📅</button>
      <a href="https://wa.me/60137046452" target="_blank" class="fab fab-whatsapp" data-tooltip="📱 WhatsApp" aria-label="WhatsApp Kami">📱</a>
    </div>

    <!-- Chat Modal -->
    <div class="chat-modal" id="chatModal" :class="{ open: isChatOpen }" role="dialog" aria-modal="true">
      <div class="chat-header">
        <h4>🤖 Astral AI Assistant</h4>
        <button class="chat-close" id="chatClose">&times;</button>
      </div>
      <div class="chat-body" id="chatBody">
        <div class="chat-msg bot">Assalamualaikum! 👋 Saya AI Assistant Astral Qalam. Bagaimana saya boleh bantu anda hari ini?</div>
      </div>
      <div class="chat-quick-actions" id="chatActions">
        <button class="chat-action" data-action="pricing">💰 Harga Pakej</button>
        <button class="chat-action" data-action="timeline">⏱️ Masa Siap</button>
        <button class="chat-action" data-action="portfolio">🎨 Lihat Portfolio</button>
        <button class="chat-action" data-action="consult">🗓️ Tempah Konsultasi</button>
      </div>
      <div class="chat-input-area">
        <input type="text" class="chat-input" id="chatInput" placeholder="Taip mesej anda...">
        <button class="chat-send" id="chatSend">➤</button>
      </div>
    </div>

    <!-- Cookie Banner -->
    <div class="cookie-banner" :class="{ show: isCookieConsent }">
      <p>Kami menggunakan kuki untuk meningkatkan pengalaman anda. Dengan meneruskan, anda bersetuju dengan <a href="#privacy">Dasar Privasi</a> kami.</p>
      <div class="cookie-btns">
        <button class="cookie-btn cookie-decline" id="cookieDecline">Tolak</button>
        <button class="cookie-btn cookie-accept" id="cookieAccept">Benarkan</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

// CSS Variables
const root = document.documentElement
const primary = '#3b82f6'
const cyan = '#22d3ee'
const gold = '#f59e0b'
const violet = '#8b5cf6'

// State
let isLight = false
let lang = localStorage.getItem('aq-lang') || 'ms'
let themeMode = localStorage.getItem('aq-theme-mode') || 'dark'

const currentThemeMode = computed({
  get: () => themeMode,
  set: (value) => {
    themeMode = value
    localStorage.setItem('aq-theme-mode', value)
    applyThemeByMode(value)
    updateThemeButtons(value)
  }
})

// Theme functions
function applyThemeByMode(mode) {
  if (mode === 'light') {
    isLight = true
    root.style.setProperty('--bg', '#f0f6ff')
    root.style.setProperty('--surface', '#e4edf9')
    root.style.setProperty('--card', '#ffffff')
    root.style.setProperty('--border', 'rgba(59,130,246,0.18)')
    root.style.setProperty('--border-h', 'rgba(59,130,246,0.5)')
    root.style.setProperty('--text', '#0f172a')
    root.style.setProperty('--text-dim', 'rgba(15,23,42,0.55)')
  } else if (mode === 'dark') {
    isLight = false
    root.style.setProperty('--bg', '#030712')
    root.style.setProperty('--surface', '#0a1020')
    root.style.setProperty('--card', '#0d1630')
    root.style.setProperty('--border', 'rgba(99,179,237,0.12)')
    root.style.setProperty('--border-h', 'rgba(99,179,237,0.4)')
    root.style.setProperty('--text', '#e2e8f0')
    root.style.setProperty('--text-dim', 'rgba(226,232,240,0.55)')
  } else if (mode === 'auto') {
    isLight = window.matchMedia('(prefers-color-scheme: light)').matches
    if (isLight) applyThemeByMode('light')
    else applyThemeByMode('dark')
  }
}

function updateThemeButtons(mode) {
  const icons = { light: '☀️', dark: '🌙', auto: '🌓' }
  const themeDesktop = document.getElementById('themeDesktop')
  const themeMobile = document.getElementById('themeMobile')
  if (themeDesktop) themeDesktop.textContent = icons[mode]
  if (themeMobile) themeMobile.textContent = icons[mode]
}

// Apply initial theme
applyThemeByMode(currentThemeMode.value)

// Theme cycle function
const cycleTheme = () => {
  if (currentThemeMode.value === 'light') currentThemeMode.value = 'dark'
  else if (currentThemeMode.value === 'dark') currentThemeMode.value = 'auto'
  else currentThemeMode.value = 'light'
}

// Theme button click handlers
const themeDesktop = document.getElementById('themeDesktop')
const themeMobile = document.getElementById('themeMobile')
if (themeDesktop) themeDesktop.addEventListener('click', cycleTheme)
if (themeMobile) themeMobile.addEventListener('click', cycleTheme)

// Language handling
const langDesktop = document.getElementById('langDesktop')
const langMobile = document.getElementById('langMobile')
function applyLang() {
  const isEN = lang === 'en'
  if (langDesktop) {
    langDesktop.textContent = isEN ? 'EN' : 'MS'
    langDesktop.classList.toggle('active', isEN)
  }
  if (langMobile) {
    langMobile.textContent = isEN ? 'EN' : 'MS'
    langMobile.classList.toggle('active', isEN)
  }
  document.documentElement.lang = isEN ? 'en' : 'ms'
  document.querySelectorAll('[data-ms]').forEach(el => {
    const key = isEN ? 'en' : 'ms'
    if (el.dataset[key]) el.textContent = el.dataset[key]
  })
}

const toggleLang = () => {
  lang = lang === 'ms' ? 'en' : 'ms'
  localStorage.setItem('aq-lang', lang)
  applyLang()
}

if (langDesktop) langDesktop.addEventListener('click', toggleLang)
if (langMobile) langMobile.addEventListener('click', toggleLang)
applyLang()

// Chat state
const isChatOpen = ref(false)
const chatModal = document.getElementById('chatModal')
const fabChat = document.getElementById('fabChat')
const chatClose = document.getElementById('chatClose')

const openChat = () => {
  isChatOpen.value = true
}

const closeChat = () => {
  isChatOpen.value = false
}

if (fabChat) fabChat.addEventListener('click', openChat)
if (chatClose) chatClose.addEventListener('click', closeChat)

// Cookie consent state
const isCookieConsent = ref(!localStorage.getItem('aq-cookie-consent'))
const cookieBanner = document.getElementById('cookieBanner')
const cookieAccept = document.getElementById('cookieAccept')
const cookieDecline = document.getElementById('cookieDecline')

if (!localStorage.getItem('aq-cookie-consent')) {
  setTimeout(() => {
    if (cookieBanner) cookieBanner.classList.add('show')
  }, 2000)
}

const acceptCookies = () => {
  localStorage.setItem('aq-cookie-consent', 'accepted')
  if (cookieBanner) cookieBanner.classList.remove('show')
}
const declineCookies = () => {
  localStorage.setItem('aq-cookie-consent', 'declined')
  if (cookieBanner) cookieBanner.classList.remove('show')
}

if (cookieAccept) cookieAccept.addEventListener('click', acceptCookies)
if (cookieDecline) cookieDecline.addEventListener('click', declineCookies)

// Star Canvas Animation
const canvas = document.getElementById('starCanvas')
const ctx = canvas.getContext('2d')
let stars = []

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function initStars(count) {
  stars = []
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.003 + 0.001,
      twinkle: Math.random() * Math.PI * 2
    })
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let s of stars) {
    s.twinkle += s.speed * 60
    const alpha = s.a * (0.5 + 0.5 * Math.sin(s.twinkle))
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(200,220,255,${alpha})`
    ctx.fill()
  }
  requestAnimationFrame(drawStars)
}

resizeCanvas()
initStars(220)
requestAnimationFrame(drawStars)
window.addEventListener('resize', () => { resizeCanvas(); initStars(220); })

// Scroll top button
const scrollTopBtn = document.getElementById('scrollTop')
window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('show', window.scrollY > 400)
  }
})

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

// Navbar scroll shadow effect
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none'
  }
})

// Intersection Observer for reveal animations
const revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right')
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

revealEls.forEach(el => observer.observe(el))

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item')
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question')
  if (question) {
    question.addEventListener('click', () => {
      item.classList.toggle('active')
    })
  }
})

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn')
const portfolioCards = document.querySelectorAll('.portfolio-card')

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    filterButtons.forEach(b => b.classList.remove('active'))
    this.classList.add('active')
    const filter = this.dataset.filter
    portfolioCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden-card')
      } else {
        card.classList.add('hidden-card')
      }
    })
  })
})

// Dropdown toggle
const ddInovasi = document.getElementById('ddInovasi')
const dropToggle = document.getElementById('dropToggle')
if (dropToggle) {
  dropToggle.addEventListener('click', (e) => {
    e.stopPropagation()
    ddInovasi.classList.toggle('open')
  })
}

document.addEventListener('click', (e) => {
  if (ddInovasi && !ddInovasi.contains(e.target)) {
    ddInovasi.classList.remove('open')
  }
})

// Mobile menu toggle
const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('navLinks')

if (hamburger) {
  const toggleMobileMenu = () => {
    if (hamburger) hamburger.classList.toggle('open')
    if (navLinks) navLinks.classList.toggle('open')
    if (navLinks?.classList.contains('open')) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  hamburger.addEventListener('click', toggleMobileMenu)

  navLinks?.querySelectorAll('a, .drop-toggle').forEach(el => {
    el.addEventListener('click', (e) => {
      if (el.classList && el.classList.contains('drop-toggle')) return
      if (navLinks?.classList.contains('open')) {
        if (hamburger) hamburger.classList.remove('open')
        if (navLinks) navLinks.classList.remove('open')
        document.body.style.overflow = ''
      }
    })
  })
}

document.addEventListener('click', (e) => {
  if (navLinks?.classList.contains('open') && !navLinks.contains(e.target) && !hamburger?.contains(e.target)) {
    if (hamburger) hamburger.classList.remove('open')
    if (navLinks) navLinks.classList.remove('open')
    document.body.style.overflow = ''
  }
})

// Chat functionality
const chatBody = document.getElementById('chatBody')
const chatInput = document.getElementById('chatInput')
const chatSend = document.getElementById('chatSend')
const chatActions = document.getElementById('chatActions')

const addChatMessage = (text, sender) => {
  const msg = document.createElement('div')
  msg.className = `chat-msg ${sender}`
  msg.textContent = text
  if (chatBody) chatBody.appendChild(msg)
  if (chatBody) chatBody.scrollTop = chatBody.scrollHeight
}

const handleChatActions = (e) => {
  if (e.target.classList.contains('chat-action')) {
    const action = e.target.dataset.action
    const isEN = lang === 'en'
    let reply = ''

    switch (action) {
      case 'pricing':
        reply = isEN ? 'Our plans: BASIC RM150-300, PRO RM500-1000, ULTRA from RM1000.' : 'Pelan kami: BASIC RM150-300, PRO RM500-1000, ULTRA dari RM1000.'
        break
      case 'timeline':
        reply = isEN ? 'Typical projects: 14-21 days. Complex: 4-6 weeks.' : 'Projek biasa: 14-21 hari. Kompleks: 4-6 minggu.'
        break
      case 'portfolio':
        reply = isEN ? 'Check our Portfolio section above!' : 'Lihat bahagian Portfolio di atas!'
        break
      case 'consult':
        reply = isEN ? 'Click 📅 button or go to CTA section.' : 'Klik butang 📅 atau ke bahagian CTA.'
        break
    }

    setTimeout(() => {
      if (chatBody) addChatMessage(reply, 'bot')
    }, 600)
  }
}

if (chatActions) chatActions.addEventListener('click', handleChatActions)

const handleChatSend = () => {
  const text = chatInput?.value.trim()
  if (!text || !chatBody) return
  addChatMessage(text, 'user')
  chatInput.value = ''

  setTimeout(() => {
    const isEN = lang === 'en'
    const replies = [
      isEN ? 'Thanks! We reply within 24h.' : 'Terima kasih! Kami balas dalam 24 jam.',
      isEN ? 'Tell us more about your project goals.' : 'Ceritakan lebih tentang matlamat projek anda.',
      isEN ? 'WhatsApp us at +6013-704 6452 for quick chat.' : 'WhatsApp kami di +6013-704 6452 untuk chat pantas.'
    ]
    if (chatBody) addChatMessage(replies[Math.floor(Math.random() * replies.length)], 'bot')
  }, 800)
}

if (chatSend) chatSend.addEventListener('click', handleChatSend)
if (chatInput) chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && chatSend) chatSend.click()
})

// Close chat on outside click
document.addEventListener('click', (e) => {
  if (chatModal && !chatModal.contains(e.target) && e.target !== fabChat) {
    closeChat()
  }
})

// CTA Strip FAB visibility
const ctaStrip = document.getElementById('cta-strip')
const fabContainer = document.getElementById('fabContainer')
const ctaObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (fabContainer) {
        fabContainer.style.opacity = '0'
        fabContainer.style.pointerEvents = 'none'
      }
    } else {
      if (fabContainer) {
        fabContainer.style.opacity = '1'
        fabContainer.style.pointerEvents = 'auto'
      }
    }
  })
}, { threshold: 0.5 })

if (ctaStrip) ctaObserver.observe(ctaStrip)

// Desktop hover effect for USP cards
if (window.innerWidth > 900) {
  document.querySelectorAll('.usp-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px) scale(1.03)`
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = ''
    })
  })
}

// Style definitions (must be in Vue SFC, not inline)
</script>

<style scoped>
/* All CSS styles from original HTML - preserved exactly */
.nebula {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.nebula::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -20%;
  width: 70%;
  height: 70%;
  background: radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%);
  animation: nebulaDrift 20s ease-in-out infinite alternate;
}

.nebula::after {
  content: '';
  position: absolute;
  bottom: -20%;
  right: -20%;
  width: 70%;
  height: 70%;
  background: radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%);
  animation: nebulaDrift 25s ease-in-out infinite alternate-reverse;
}

@keyframes nebulaDrift {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(5%, 5%) scale(1.1); }
}

#starCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 1;
}

.app.light #starCanvas {
  opacity: 0.08;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-h);
  background: rgba(3,7,18,0.75);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  z-index: 900;
  transition: background .4s;
}

.app.light nav {
  background: rgba(240,246,255,0.85);
}

.logo-gem svg {
  width: 100%;
  height: 100%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  font-size: .9rem;
  font-weight: 500;
}

.nav-links a {
  opacity: .8;
  transition: var(--transition);
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  opacity: 1;
  color: var(--cyan);
}

.dropdown { position: relative; }

.drop-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .3rem;
  opacity: .8;
  transition: var(--transition);
  white-space: nowrap;
}

.drop-toggle:hover {
  opacity: 1;
  color: var(--cyan);
}

.drop-arrow {
  display: inline-block;
  transition: transform .3s;
  font-size: .7em;
}

.dropdown.open .drop-arrow {
  transform: rotate(180deg);
}

.drop-menu {
  position: absolute;
  top: calc(100% + .8rem);
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  background: rgba(10,16,32,0.97);
  border: 1px solid var(--border);
  border-radius: 12px;
  min-width: 220px;
  backdrop-filter: blur(20px);
  opacity: 0;
  visibility: hidden;
  transition: all .25s cubic-bezier(.25,.8,.25,1);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5), var(--glow-b);
  overflow: hidden;
}

.app.light .drop-menu {
  background: rgba(255,255,255,0.97);
}

.dropdown.open .drop-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.drop-menu a {
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: .75rem 1.1rem;
  font-size: .85rem;
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
  opacity: .85;
}

.drop-menu a:last-child {
  border-bottom: none;
}

.drop-menu a:hover {
  background: rgba(59,130,246,0.12);
  opacity: 1;
  color: var(--cyan);
  padding-left: 1.4rem;
}

.dm-stay { background: rgba(34,211,238,0.15); }
.dm-sumbang { background: rgba(245,158,11,0.15); }
.dm-edu { background: rgba(239,68,68,0.15); }
.dm-tool { background: rgba(139,92,246,0.15); }

.nav-controls { display: flex; align-items: center; gap: .5rem; }

.ctrl-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(99,179,237,0.08);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--ff-body);
  font-size: .82rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  padding: 0;
}

.ctrl-btn:hover {
  background: rgba(59,130,246,0.2);
  border-color: var(--primary);
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform .3s, opacity .3s;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

section {
  padding: 7rem 0;
  position: relative;
  z-index: 2;
}

section:nth-child(even) {
  background: rgba(10,16,32,0.4);
}

.app.light section:nth-child(even) {
  background: rgba(228,237,249,0.5);
}

.sec-label {
  display: inline-block;
  font-family: var(--ff-head);
  font-size: .65rem;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: var(--cyan);
  background: rgba(34,211,238,0.08);
  border: 1px solid rgba(34,211,238,0.25);
  padding: .35rem .85rem;
  border-radius: 30px;
  margin-bottom: 1.2rem;
}

.sec-title {
  font-family: var(--ff-head);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1rem;
}

.sec-title span {
  background: linear-gradient(135deg, var(--primary), var(--violet), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sec-desc {
  font-size: 1.05rem;
  color: var(--text-dim);
  max-width: 620px;
  margin-bottom: 0;
}

#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-h);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  font-size: .78rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  font-family: var(--ff-head);
  color: var(--gold);
  border: 1px solid rgba(245,158,11,0.3);
  background: rgba(245,158,11,0.07);
  padding: .4rem 1rem;
  border-radius: 30px;
  margin-bottom: 2rem;
}

.hero-badge::before { content: '★'; font-size: .7rem; }

.hero-h1 {
  font-family: var(--ff-head);
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -.01em;
  margin-bottom: 1.5rem;
}

.hero-h1 .line1 { display: block; color: var(--text); }

.hero-h1 .line2 {
  display: block;
  background: linear-gradient(90deg, var(--primary), var(--cyan), var(--violet));
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shiftGrad 4s linear infinite;
}

@keyframes shiftGrad {
  0% { background-position: 0%; }
  100% { background-position: 200%; }
}

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-dim);
  max-width: 640px;
  margin-bottom: 2.5rem;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .9rem 2.2rem;
  background: linear-gradient(135deg, var(--primary), var(--violet));
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(59,130,246,0);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--cyan), var(--primary));
  opacity: 0;
  transition: opacity .3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(59,130,246,0.45);
}

.btn-primary:hover::before { opacity: 1; }

.btn-primary span, .btn-primary router-link { position: relative; z-index: 1; }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .9rem 2.2rem;
  background: transparent;
  border: 1px solid var(--border-h);
  color: var(--text);
  font-weight: 500;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition);
}

.btn-ghost:hover {
  background: rgba(59,130,246,0.1);
  border-color: var(--primary);
  transform: translateY(-3px);
  color: var(--cyan);
}

.hero-scroll {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  font-size: .75rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, var(--text-dim), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: .3; transform: scaleY(.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}

.blob-1 {
  width: 500px;
  height: 500px;
  top: -100px;
  right: -150px;
  background: rgba(59,130,246,0.12);
  animation: blobMove 12s ease-in-out infinite alternate;
}

.blob-2 {
  width: 400px;
  height: 400px;
  bottom: -80px;
  left: -100px;
  background: rgba(139,92,246,0.1);
  animation: blobMove 16s ease-in-out infinite alternate-reverse;
}

@keyframes blobMove {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 30px) scale(1.08); }
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text .sec-label { display: block; width: fit-content; }

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 2.5rem;
}

.stat-box {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  text-align: center;
  transition: var(--transition);
}

.stat-box:hover {
  border-color: var(--primary);
  box-shadow: var(--glow-b);
}

.stat-num {
  font-family: var(--ff-head);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary2);
}

.stat-lbl { font-size: .8rem; color: var(--text-dim); margin-top: .2rem; }

.about-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-wrap {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-center {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--violet));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--ff-head);
  font-weight: 900;
  font-size: 1rem;
  color: #fff;
  letter-spacing: .05em;
  box-shadow: 0 0 40px rgba(59,130,246,0.5);
  z-index: 2;
  text-align: center;
  line-height: 1.2;
}

.orbit-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border);
  animation: spin linear infinite;
}

.orbit-ring:nth-child(1) {
  width: 160px;
  height: 160px;
  animation-duration: 8s;
  border-color: rgba(34,211,238,0.2);
}

.orbit-ring:nth-child(2) {
  width: 220px;
  height: 220px;
  animation-duration: 14s;
  animation-direction: reverse;
  border-color: rgba(59,130,246,0.15);
}

.orbit-ring:nth-child(3) {
  width: 290px;
  height: 290px;
  animation-duration: 20s;
  border-color: rgba(139,92,246,0.12);
}

.orbit-dot {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cyan);
  margin-top: -4px;
  box-shadow: 0 0 10px var(--cyan);
}

.orbit-dot-2 { background: var(--gold); box-shadow: 0 0 10px var(--gold); }
.orbit-dot-3 { background: var(--violet); box-shadow: 0 0 10px var(--violet); }

@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

#usp { padding-bottom: 6rem; }

.usp-header { text-align: center; margin-bottom: 3.5rem; }
.usp-header .sec-label { display: inline-block; }
.usp-header .sec-desc { margin: 0 auto; }

.usp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.usp-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem 1.8rem;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  cursor: default;
}

.usp-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59,130,246,0.05), transparent);
  opacity: 0;
  transition: opacity .4s;
}

.usp-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--border-h);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3), var(--glow-b);
}

.usp-card:hover::before { opacity: 1; }

.usp-letter {
  font-family: var(--ff-head);
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
  display: inline-block;
}

.usp-card:nth-child(1) .usp-letter { color: var(--primary2); }
.usp-card:nth-child(2) .usp-letter { color: var(--violet); }
.usp-card:nth-child(3) .usp-letter { color: var(--cyan); }
.usp-card:nth-child(4) .usp-letter { color: var(--gold); }
.usp-card:nth-child(5) .usp-letter { color: #34d399; }
.usp-card:nth-child(6) .usp-letter { color: #f87171; }

.usp-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: .7rem; }
.usp-card p { font-size: .9rem; color: var(--text-dim); line-height: 1.6; }

.usp-glow {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: .3;
  pointer-events: none;
}

.services-header { text-align: center; margin-bottom: 3.5rem; }
.services-header .sec-label { display: inline-block; }

.svc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.svc-card {
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.svc-card::before {
  content: '';
  position: absolute;
  inset: 0;
  transition: transform .5s ease;
}

.svc-1::before, .svc-2::before, .svc-3::before {
  background: linear-gradient(160deg, rgba(3,7,18,0.1) 0%, rgba(3,7,18,0.85) 60%),
              linear-gradient(135deg, #0f3460, #1a6cf0);
}

.svc-card:hover::before { transform: scale(1.05); }

.svc-content { position: relative; z-index: 1; color: #fff; }
.svc-icon { font-size: 2.2rem; margin-bottom: 1rem; display: inline-block; }
.svc-content h3 { font-family: var(--ff-head); font-size: 1.15rem; font-weight: 700; letter-spacing: .03em; margin-bottom: .6rem; }
.svc-content p { font-size: .9rem; opacity: .8; line-height: 1.6; }

.svc-tag {
  display: inline-block;
  margin-top: 1rem;
  font-size: .75rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  padding: .3rem .8rem;
  border-radius: 30px;
}

.svc-deco {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.portfolio-header { text-align: center; margin-bottom: 3rem; }

.portfolio-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
}

.filter-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-dim);
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: rgba(59,130,246,0.15);
  border-color: var(--primary);
  color: var(--cyan);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
}

.portfolio-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  border-color: var(--border-h);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3), var(--glow-b);
}

.portfolio-img {
  width: 100%;
  height: 180px;
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.portfolio-img .placeholder-icon { font-size: 4rem; opacity: 0.3; }

.portfolio-card .content {
  padding: 1.2rem 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.portfolio-card .content h3 {
  font-family: var(--ff-head);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.portfolio-card .content .category {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-bottom: 0.5rem;
}

.portfolio-card .content p {
  font-size: 0.9rem;
  color: var(--text-dim);
  line-height: 1.5;
  flex: 1;
}

.portfolio-card .content .btn-ghost,
.portfolio-card .content a {
  margin-top: 1rem;
  padding: 0.4rem 1.2rem;
  font-size: 0.8rem;
  align-self: flex-start;
}

.hidden-card { display: none; }

.pricing-header { text-align: center; margin-bottom: 3.5rem; }

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.pricing-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem 1.8rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-12px);
  border-color: var(--border-h);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4), var(--glow-b);
}

.pricing-badge {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  font-family: var(--ff-head);
  font-size: 0.7rem;
  background: rgba(59,130,246,0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  border: 1px solid var(--primary);
  color: var(--primary2);
}

.pricing-title {
  font-family: var(--ff-head);
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
  background: linear-gradient(135deg, var(--primary), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pricing-price { font-size: 1.4rem; font-weight: 700; margin: 1rem 0 0.5rem; color: var(--text); }
.pricing-price small { font-size: 0.8rem; font-weight: 400; color: var(--text-dim); }

.pricing-desc {
  font-size: 0.85rem;
  color: var(--gold);
  margin-bottom: 1rem;
  border-bottom: 1px dashed var(--border);
  padding-bottom: 0.5rem;
}

.pricing-features { list-style: none; margin: 0.5rem 0 1.5rem; flex: 1; }
.pricing-features li { display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; margin-bottom: 0.7rem; color: var(--text-dim); }
.pricing-features li::before { content: '✓'; color: var(--cyan); font-weight: bold; font-size: 0.9rem; }

.free-badge {
  background: rgba(34,211,238,0.12);
  border: 1px solid var(--cyan);
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  font-size: 0.75rem;
  margin: 0.5rem 0 1rem;
  text-align: center;
  color: var(--cyan);
}

.pricing-card .btn-primary, .pricing-card .btn-ghost,
.pricing-card a.btn-primary, .pricing-card a.btn-ghost {
  width: 100%;
  justify-content: center;
  padding: 0.7rem 0;
  margin-top: 0.5rem;
}

.pricing-note { font-size: 0.7rem; text-align: center; margin-top: 1rem; color: var(--text-dim); }

.domain-pricing {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  text-align: center;
}

.domain-pricing h3 { font-family: var(--ff-head); font-size: 1.4rem; margin-bottom: 1rem; }

.domain-grid { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin: 1.5rem 0; }

.domain-item {
  background: var(--card);
  padding: 1rem 2rem;
  border-radius: 12px;
  min-width: 140px;
  border: 1px solid var(--border);
}

.domain-ext { font-size: 1.2rem; font-weight: 700; color: var(--primary2); }
.domain-price { font-size: 1.1rem; font-weight: 600; margin-top: 0.3rem; }
.domain-note { font-size: 0.75rem; color: var(--text-dim); }

.faq-grid { max-width: 800px; margin: 0 auto; }
.faq-item { background: var(--card); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 1rem; overflow: hidden; }
.faq-question { padding: 1.2rem 1.5rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 600; transition: var(--transition); }
.faq-question:hover { background: rgba(59,130,246,0.05); }
.faq-question span:first-child { font-size: 1rem; }
.faq-icon { font-size: 1.2rem; transition: transform 0.3s; }
.faq-item.active .faq-icon { transform: rotate(45deg); }
.faq-answer { max-height: 0; padding: 0 1.5rem; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease; color: var(--text-dim); line-height: 1.6; font-size: 0.9rem; }
.faq-item.active .faq-answer { max-height: 300px; padding: 0 1.5rem 1.2rem 1.5rem; }

#cta-strip { padding: 5rem 0; text-align: center; }

.cta-box {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 4rem 2.5rem;
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}

.cta-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05));
  pointer-events: none;
}

.cta-box h2 {
  font-family: var(--ff-head);
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-box p { color: var(--text-dim); font-size: 1rem; max-width: 500px; margin: 0 auto 2.5rem; }

.cta-glow-l, .cta-glow-r {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.cta-glow-l { left: -80px; top: 50%; transform: translateY(-50%); background: rgba(59,130,246,0.15); }
.cta-glow-r { right: -80px; top: 50%; transform: translateY(-50%); background: rgba(139,92,246,0.15); }

footer {
  background: rgba(3,7,18,0.95);
  border-top: 1px solid var(--border);
  padding: 3rem 0 2rem;
  position: relative;
  z-index: 2;
  text-align: center;
}

.footer-logo { font-family: var(--ff-head); font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; }
.footer-logo span { background: linear-gradient(90deg, var(--primary), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.footer-desc { font-size: .9rem; color: var(--text-dim); max-width: 400px; margin: 0 auto 2rem; }

.footer-socials { display: flex; justify-content: center; gap: .8rem; margin-bottom: 2.5rem; }

.social-link {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(99,179,237,0.07);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .85rem;
  font-weight: 700;
  transition: var(--transition);
  color: var(--text-dim);
}

.social-link:hover {
  background: rgba(59,130,246,0.15);
  border-color: var(--primary);
  color: var(--primary2);
  transform: translateY(-3px);
}

.footer-copy { font-size: .8rem; color: var(--text-dim); padding-top: 2rem; border-top: 1px solid var(--border); }
.footer-copy a { color: var(--cyan); transition: color .3s; }
.footer-copy a:hover { color: var(--primary2); }

#scrollTop {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--violet));
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(59,130,246,0.35);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

#scrollTop.show { opacity: 1; visibility: visible; }
#scrollTop:hover { transform: translateY(-4px); }

.fab-container {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column-reverse;
  gap: var(--fab-gap);
  z-index: var(--fab-z);
  align-items: flex-end;
}

.fab {
  width: var(--fab-size);
  height: var(--fab-size);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.fab::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: inherit;
  filter: blur(15px);
  opacity: 0.5;
  z-index: -1;
}

.fab:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 12px 35px rgba(0,0,0,0.5); }
.fab:active { transform: scale(0.95); }

.fab-primary { background: linear-gradient(135deg, var(--primary), var(--violet)); color: #fff; }
.fab-whatsapp { background: #25D366; color: #fff; }
.fab-demo { background: linear-gradient(135deg, var(--cyan), var(--primary)); color: #fff; }
.fab-chat { background: var(--card); border: 1px solid var(--border); color: var(--text); }

.fab[data-tooltip] { position: relative; }

.fab[data-tooltip]::before {
  content: attr(data-tooltip);
  position: absolute;
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
  background: var(--surface);
  color: var(--text);
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  pointer-events: none;
  z-index: 1000;
}

.fab[data-tooltip]:hover::before { opacity: 1; visibility: visible; right: calc(100% + 16px); }

.chat-modal {
  position: fixed;
  bottom: calc(var(--fab-size) + var(--fab-gap) + 1rem);
  right: 1.5rem;
  width: 340px;
  max-height: 500px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5), var(--glow-b);
  z-index: var(--fab-z);
  display: none;
  flex-direction: column;
  overflow: hidden;
}

.chat-modal.open { display: flex; }

.chat-header {
  padding: 1rem 1.2rem;
  background: linear-gradient(135deg, var(--primary), var(--violet));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.chat-header h4 { font-family: var(--ff-head); font-size: 0.95rem; font-weight: 700; }

.chat-close { background: none; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; opacity: 0.8; transition: opacity .2s; }
.chat-close:hover { opacity: 1; }

.chat-body { flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.9rem; }

.chat-msg { max-width: 85%; padding: 0.7rem 1rem; border-radius: 12px; line-height: 1.4; }
.chat-msg.bot { align-self: flex-start; background: var(--surface); border: 1px solid var(--border); border-bottom-left-radius: 4px; }
.chat-msg.user { align-self: flex-end; background: linear-gradient(135deg, var(--primary), var(--violet)); color: #fff; border-bottom-right-radius: 4px; }

.chat-quick-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.8rem 1rem; border-top: 1px solid var(--border); background: var(--surface); }

.chat-action { font-size: 0.75rem; padding: 0.4rem 0.8rem; background: var(--card); border: 1px solid var(--border); border-radius: 20px; cursor: pointer; transition: var(--transition); }
.chat-action:hover { background: rgba(59,130,246,0.15); border-color: var(--primary); color: var(--cyan); }

.chat-input-area { padding: 0.8rem 1rem; border-top: 1px solid var(--border); display: flex; gap: 0.5rem; background: var(--surface); }

.chat-input { flex: 1; padding: 0.6rem 1rem; border-radius: 10px; border: 1px solid var(--border); background: var(--card); color: var(--text); font-size: 0.9rem; outline: none; transition: border-color .2s; }
.chat-input:focus { border-color: var(--primary); }

.chat-send { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, var(--primary), var(--violet)); border: none; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition); }
.chat-send:hover { transform: scale(1.05); }

.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 1rem 1.5rem;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.85rem;
}

.cookie-banner.show { display: flex; }

.cookie-text { color: var(--text-dim); max-width: 600px; line-height: 1.5; }
.cookie-text a { color: var(--cyan); text-decoration: underline; }

.cookie-btns { display: flex; gap: 0.5rem; flex-shrink: 0; }

.cookie-btn { padding: 0.5rem 1.2rem; border-radius: 8px; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: var(--transition); border: none; }
.cookie-accept { background: linear-gradient(135deg, var(--primary), var(--violet)); color: #fff; }
.cookie-accept:hover { transform: translateY(-2px); box-shadow: var(--glow-b); }
.cookie-decline { background: transparent; border: 1px solid var(--border); color: var(--text); }
.cookie-decline:hover { background: rgba(99,179,237,0.1); }

.reveal { opacity: 0; transform: translateY(40px); transition: opacity .7s ease, transform .7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity .8s ease, transform .8s ease; }
.reveal-left.visible { opacity: 1; transform: translateX(0); }
.reveal-right { opacity: 0; transform: translateX(50px); transition: opacity .8s ease, transform .8s ease; }
.reveal-right.visible { opacity: 1; transform: translateX(0); }

.d1 { transition-delay: .1s; } .d2 { transition-delay: .2s; } .d3 { transition-delay: .3s; }
.d4 { transition-delay: .4s; } .d5 { transition-delay: .5s; } .d6 { transition-delay: .6s; }

@keyframes shiftGrad {
  0% { background-position: 0%; }
  100% { background-position: 200%; }
}

@media (min-width: 901px) {
  .usp-card:hover {
    perspective: 800px;
  }

  .usp-card::before {
    display: none;
  }
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 3px; }
</style>