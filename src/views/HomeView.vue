<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section id="hero" ref="heroSection">
      <div class="blob blob-1"></div><div class="blob blob-2"></div>
      <div class="container hero-inner">
        <div class="hero-badge">{{ $t('hero.badge') }}</div>
        <h1 class="hero-h1">
          <span class="line1">{{ $t('hero.line1') }}</span>
          <span class="line2">{{ $t('hero.line2') }}</span>
        </h1>
        <p class="hero-sub">{{ $t('hero.subtitle') }}</p>
        <div class="hero-ctas">
          <router-link to="#pricing" class="btn-primary">{{ $t('hero.cta1') }}</router-link>
          <router-link to="#services" class="btn-ghost">{{ $t('hero.cta2') }}</router-link>
        </div>
        <div class="hero-scroll">
          <div class="scroll-line"></div>
          <span>{{ $t('hero.explore') }}</span>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" ref="aboutSection">
      <div class="container about-grid">
        <div class="about-text reveal-left">
          <span class="sec-label">{{ $t('about.label') }}</span>
          <h2 class="sec-title">{{ $t('about.title1') }}<br>{{ $t('about.title2') }}</h2>
          <p class="sec-desc">{{ $t('about.description') }}</p>
          <div class="about-stats">
            <div class="stat-box reveal d1"><div class="stat-num">100%</div><div class="stat-lbl">{{ $t('about.stat1') }}</div></div>
            <div class="stat-box reveal d2"><div class="stat-num">24/7</div><div class="stat-lbl">{{ $t('about.stat2') }}</div></div>
            <div class="stat-box reveal d3"><div class="stat-num">Fokus Kelajuan</div><div class="stat-lbl">{{ $t('about.stat3') }}</div></div>
            <div class="stat-box reveal d4"><div class="stat-num">∞</div><div class="stat-lbl">{{ $t('about.stat4') }}</div></div>
          </div>
        </div>
        <div class="about-visual reveal-right">
          <div class="orbit-wrap">
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="orbit-ring"><div class="orbit-dot orbit-dot-2"></div></div>
            <div class="orbit-ring"><div class="orbit-dot orbit-dot-3"></div></div>
            <div class="orbit-center">ASTRAL<br>QALAM</div>
          </div>
        </div>
      </div>
    </section>

    <!-- USP Section -->
    <section id="usp" ref="uspSection">
      <div class="container">
        <div class="usp-header reveal">
          <span class="sec-label">{{ $t('usp.label') }}</span>
          <h2 class="sec-title">{{ $t('usp.title') }}</h2>
          <p class="sec-desc">{{ $t('usp.description') }}</p>
        </div>
        <div class="usp-grid">
          <div class="usp-card reveal d1">
            <div class="usp-letter">A</div>
            <h3>{{ $t('usp.a.title') }}</h3>
            <p>{{ $t('usp.a.description') }}</p>
            <div class="usp-glow"></div>
          </div>
          <div class="usp-card reveal d2">
            <div class="usp-letter">B</div>
            <h3>{{ $t('usp.b.title') }}</h3>
            <p>{{ $t('usp.b.description') }}</p>
            <div class="usp-glow"></div>
          </div>
          <div class="usp-card reveal d3">
            <div class="usp-letter">C</div>
            <h3>{{ $t('usp.c.title') }}</h3>
            <p>{{ $t('usp.c.description') }}</p>
            <div class="usp-glow"></div>
          </div>
          <div class="usp-card reveal d4">
            <div class="usp-letter">D</div>
            <h3>{{ $t('usp.d.title') }}</h3>
            <p>{{ $t('usp.d.description') }}</p>
            <div class="usp-glow"></div>
          </div>
          <div class="usp-card reveal d5">
            <div class="usp-letter">E</div>
            <h3>{{ $t('usp.e.title') }}</h3>
            <p>{{ $t('usp.e.description') }}</p>
            <div class="usp-glow"></div>
          </div>
          <div class="usp-card reveal d6">
            <div class="usp-letter">F</div>
            <h3>{{ $t('usp.f.title') }}</h3>
            <p>{{ $t('usp.f.description') }}</p>
            <div class="usp-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" ref="servicesSection">
      <div class="container">
        <div class="services-header reveal">
          <span class="sec-label">{{ $t('services.label') }}</span>
          <h2 class="sec-title">{{ $t('services.title') }}</h2>
        </div>
        <div class="svc-grid">
          <div class="svc-card svc-1 reveal d1">
            <div class="svc-deco">🏢</div>
            <div class="svc-content">
              <div class="svc-icon">◈</div>
              <h3>{{ $t('services.portfolio') }}</h3>
              <p>{{ $t('services.portfolio.description') }}</p>
              <span class="svc-tag">{{ $t('services.portfolio.tag') }}</span>
            </div>
          </div>
          <div class="svc-card svc-2 reveal d2">
            <div class="svc-deco">⚡</div>
            <div class="svc-content">
              <div class="svc-icon">◈</div>
              <h3>{{ $t('services.saas') }}</h3>
              <p>{{ $t('services.saas.description') }}</p>
              <span class="svc-tag">{{ $t('services.saas.tag') }}</span>
            </div>
          </div>
          <div class="svc-card svc-3 reveal d3">
            <div class="svc-deco">🛒</div>
            <div class="svc-content">
              <div class="svc-icon">◈</div>
              <h3>{{ $t('services.ecommerce') }}</h3>
              <p>{{ $t('services.ecommerce.description') }}</p>
              <span class="svc-tag">{{ $t('services.ecommerce.tag') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" ref="portfolioSection">
      <div class="container">
        <div class="portfolio-header reveal">
          <span class="sec-label">{{ $t('portfolio.label') }}</span>
          <h2 class="sec-title">{{ $t('portfolio.title') }} {{ $t('portfolio.subtitle') }}</h2>
          <p class="sec-desc">{{ $t('portfolio.description') }}</p>
        </div>
        <div class="portfolio-filters" id="filterButtons">
          <button class="filter-btn active" data-filter="all">{{ $t('portfolio.filter.all') }}</button>
          <button class="filter-btn" data-filter="homestay">{{ $t('portfolio.filter.homestay') }}</button>
          <button class="filter-btn" data-filter="sumbangan">{{ $t('portfolio.filter.donation') }}</button>
          <button class="filter-btn" data-filter="edu">{{ $t('portfolio.filter.edu') }}</button>
          <button class="filter-btn" data-filter="tool">{{ $t('portfolio.filter.tool') }}</button>
        </div>
        <div class="portfolio-grid" id="portfolioGrid">
          <div class="portfolio-card" data-category="homestay">
            <div class="portfolio-img"><span class="placeholder-icon">🏡</span></div>
            <div class="content">
              <h3>Mama Homestay</h3>
              <div class="category">{{ $t('portfolio.homestay.category') }}</div>
              <p>{{ $t('portfolio.homestay.description') }}</p>
              <router-link to="https://astralqalam.interactivelink.site/mama-homestay" target="_blank" class="btn-ghost">{{ $t('portfolio.demo') }}</router-link>
            </div>
          </div>
          <div class="portfolio-card" data-category="sumbangan">
            <div class="portfolio-img"><span class="placeholder-icon">🤝</span></div>
            <div class="content">
              <h3>Astral Qalam Sumbang</h3>
              <div class="category">{{ $t('portfolio.donation.category') }}</div>
              <p>{{ $t('portfolio.donation.description') }}</p>
              <router-link to="https://astralqalam.interactivelink.site/Sumbangan" target="_blank" class="btn-ghost">{{ $t('portfolio.demo') }}</router-link>
            </div>
          </div>
          <div class="portfolio-card" data-category="edu">
            <div class="portfolio-img"><span class="placeholder-icon">🎓</span></div>
            <div class="content">
              <h3>Astral Qalam Edu</h3>
              <div class="category">{{ $t('portfolio.edu.category') }}</div>
              <p>{{ $t('portfolio.edu.description') }}</p>
              <router-link to="https://www.tiktok.com/@amarjecukup?_r=1&_t=ZS-96C1a7XAgfV" target="_blank" class="btn-ghost">{{ $t('portfolio.demo') }}</router-link>
            </div>
          </div>
          <div class="portfolio-card" data-category="tool">
            <div class="portfolio-img"><span class="placeholder-icon">🛠️</span></div>
            <div class="content">
              <h3>{{ $t('portfolio.tool.name') }}</h3>
              <div class="category">{{ $t('portfolio.tool.category') }}</div>
              <p>{{ $t('portfolio.tool.description') }}</p>
              <router-link to="https://astralqalam.interactivelink.site/waktu-solat" target="_blank" class="btn-ghost">{{ $t('portfolio.demo') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" ref="pricingSection">
      <div class="container">
        <div class="pricing-header reveal">
          <span class="sec-label">{{ $t('pricing.label') }}</span>
          <h2 class="sec-title">{{ $t('pricing.title') }}</h2>
          <p class="sec-desc">{{ $t('pricing.description') }}</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card reveal d1">
            <div class="pricing-badge">{{ $t('pricing.basic.badge') }}</div>
            <div class="pricing-title">BASIC</div>
            <div class="pricing-price">RM150<small>- RM300</small></div>
            <div class="pricing-desc">{{ $t('pricing.basic.desc') }}</div>
            <ul class="pricing-features">
              <li>{{ $t('pricing.basic.feature1') }}</li>
              <li>{{ $t('pricing.basic.feature2') }}</li>
              <li>{{ $t('pricing.basic.feature3') }}</li>
              <li>{{ $t('pricing.basic.feature4') }}</li>
              <li>{{ $t('pricing.basic.feature5') }}</li>
            </ul>
            <div class="free-badge">{{ $t('pricing.free.badge') }}</div>
            <a href="https://wa.me/60137046452?text=Saya%20berminat%20dengan%20Pelan%20BASIC%20Astral%20Qalam" target="_blank" class="btn-primary">{{ $t('pricing.basic.cta') }}</a>
            <div class="pricing-note">{{ $t('pricing.basic.note') }}</div>
          </div>
          <div class="pricing-card reveal d2">
            <div class="pricing-badge">{{ $t('pricing.pro.badge') }}</div>
            <div class="pricing-title">PRO</div>
            <div class="pricing-price">RM500<small>- RM1000</small></div>
            <div class="pricing-desc">{{ $t('pricing.pro.desc') }}</div>
            <ul class="pricing-features">
              <li>{{ $t('pricing.pro.feature1') }}</li>
              <li>{{ $t('pricing.pro.feature2') }}</li>
              <li>{{ $t('pricing.pro.feature3') }}</li>
              <li>{{ $t('pricing.pro.feature4') }}</li>
              <li>{{ $t('pricing.pro.feature5') }}</li>
              <li>{{ $t('pricing.pro.feature6') }}</li>
            </ul>
            <div class="free-badge">{{ $t('pricing.free.badge') }}</div>
            <a href="https://wa.me/60137046452?text=Saya%20berminat%20dengan%20Pelan%20PRO%20Astral%20Qalam" target="_blank" class="btn-primary">{{ $t('pricing.pro.cta') }}</a>
            <div class="pricing-note">{{ $t('pricing.pro.note') }}</div>
          </div>
          <div class="pricing-card reveal d3">
            <div class="pricing-badge">{{ $t('pricing.ultra.badge') }}</div>
            <div class="pricing-title">ULTRA</div>
            <div class="pricing-price">RM1000<small>KE ATAS</small></div>
            <div class="pricing-desc">{{ $t('pricing.ultra.desc') }}</div>
            <ul class="pricing-features">
              <li>{{ $t('pricing.ultra.feature1') }}</li>
              <li>{{ $t('pricing.ultra.feature2') }}</li>
              <li>{{ $t('pricing.ultra.feature3') }}</li>
              <li>{{ $t('pricing.ultra.feature4') }}</li>
              <li>{{ $t('pricing.ultra.feature5') }}</li>
              <li>{{ $t('pricing.ultra.feature6') }}</li>
            </ul>
            <div class="free-badge">{{ $t('pricing.free.badge') }}</div>
            <a href="https://wa.me/60137046452?text=Saya%20berminat%20dengan%20Pelan%20ULTRA%20Astral%20Qalam" target="_blank" class="btn-primary">{{ $t('pricing.ultra.cta') }}</a>
            <div class="pricing-note">{{ $t('pricing.ultra.note') }}</div>
          </div>
        </div>
        <div class="domain-pricing reveal d2">
          <h3>{{ $t('pricing.domain.title') }}</h3>
          <div class="domain-grid">
            <div class="domain-item"><div class="domain-ext">.com</div><div class="domain-price">RM110</div><div class="domain-note">{{ $t('pricing.domain.year') }}</div></div>
            <div class="domain-item"><div class="domain-ext">.my</div><div class="domain-price">RM150</div><div class="domain-note">{{ $t('pricing.domain.year') }}</div></div>
            <div class="domain-item"><div class="domain-ext">.com.my</div><div class="domain-price">RM160</div><div class="domain-note">{{ $t('pricing.domain.year') }}</div></div>
          </div>
          <p class="domain-note">{{ $t('pricing.domain.note') }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" ref="faqSection">
      <div class="container">
        <div class="pricing-header reveal">
          <span class="sec-label">{{ $t('faq.label') }}</span>
          <h2 class="sec-title">{{ $t('faq.title1') }}<br>{{ $t('faq.title2') }}</h2>
        </div>
        <div class="faq-grid reveal">
          <div class="faq-item">
            <div class="faq-question"><span>{{ $t('faq.q1') }}</span><span class="faq-icon">+</span></div>
            <div class="faq-answer">{{ $t('faq.a1') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question"><span>{{ $t('faq.q2') }}</span><span class="faq-icon">+</span></div>
            <div class="faq-answer">{{ $t('faq.a2') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question"><span>{{ $t('faq.q3') }}</span><span class="faq-icon">+</span></div>
            <div class="faq-answer">{{ $t('faq.a3') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question"><span>{{ $t('faq.q4') }}</span><span class="faq-icon">+</span></div>
            <div class="faq-answer">{{ $t('faq.a4') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Strip -->
    <section id="cta-strip" ref="ctaStrip">
      <div class="container"><div class="cta-box reveal">
        <div class="cta-glow-l"></div><div class="cta-glow-r"></div>
        <h2>{{ $t('cta.title') }}<span style="background:linear-gradient(135deg,var(--primary),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">{{ $t('cta.begin') }}</span></h2>
        <p>{{ $t('cta.description') }}</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="https://wa.me/60137046452" target="_blank" class="btn-primary">💬 WhatsApp Kami</a>
          <a href="mailto:astralqalam@yahoo.com" class="btn-ghost">✉️ Hantar E-mel</a>
        </div></div></div></section>

    <!-- Footer -->
    <footer>
      <div class="container"><div class="footer-logo"><span data-ms="Astral Qalam" :data-en="'Astral Qalam'">Astral Qalam</span>™ Webdev</div><p class="footer-desc">{{ $t('footer.description') }}</p><div class="footer-socials"><a href="#" class="social-link">FB</a><a href="#" class="social-link">IG</a><a href="#" class="social-link">TT</a><a href="#" class="social-link">LI</a></div><div class="footer-copy"><p>© 2026 Astral Qalam Webdev. <span>Hak Cipta Terpelihara.</span> | <span data-ms="Astral Qalam ialah tanda dagangan berdaftar." :data-en="'Astral Qalam™ is a registered trademark.'">Astral Qalam™</span></p><p style="margin-top:.4rem;font-size:.75rem;opacity:.6;">{{ $t('footer.slogan') }}</p></div></div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const root = document.documentElement
const primary = '#3b82f6'
const cyan = '#22d3ee'

const filterButtons = ref([])
const portfolioCards = ref([])

const { t, locale } = useI18n()

onMounted(() => {
  // Initialize filter buttons
  filterButtons.value = document.querySelectorAll('.filter-btn')
  portfolioCards.value = document.querySelectorAll('.portfolio-card')

  filterButtons.value.forEach(btn => {
    btn.addEventListener('click', function() {
      filterButtons.value.forEach(b => b.classList.remove('active'))
      this.classList.add('active')
      const filter = this.dataset.filter
      portfolioCards.value.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden-card')
        } else {
          card.classList.add('hidden-card')
        }
      })
    })
  })

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question')
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active')
      })
    }
  })
})
</script>

<style scoped>
.home-view { position: relative; min-height: 100vh; }
/* Styles are in App.vue */
</style>
