export default {
  locale: localStorage.getItem('aq-lang') || 'ms',
  fallbackLocale: 'ms',
  messages: {
    ms: {
      hero: {
        badge: '★ Perkhidmatan Web Premium',
        line1: 'Bawa Bisnes Anda ke',
        line2: 'Dimensi Baharu',
        subtitle: 'Astral Qalam Webdev membina laman web berprestasi tinggi — dari Portfolio Korporat, Platform SaaS, hingga tapak E-commerce Direct Sale. Direka bukan hanya untuk kelihatan cantik, tetapi untuk menghasilkan keputusan nyata.',
        cta1: '🚀 Mulakan Projek',
        cta2: 'Lihat Servis →',
        explore: 'Terokai'
      },
      about: {
        label: 'Tentang Kami',
        title1: 'Identiti Digital',
        title2: 'Yang Hidup',
        description: 'Di Astral Qalam Webdev, kami tidak sekadar membina laman web — kami membina pengalaman digital yang meninggalkan kesan. Laman web anda ialah cawangan perniagaan yang beroperasi 24/7, dan kami memastikan ia tampil profesional, pantas, dan selamat.',
        stat1: 'Dipercayai',
        stat2: 'Sokongan Teknikal',
        stat3: 'Masa Muat Halaman',
        stat4: 'Kemungkinan Reka Bentuk'
      },
      usp: {
        label: 'Kenapa Kami?',
        title: 'Kelebihan A hingga F',
        description: 'Enam kelebihan utama yang membezakan Astral Qalam Webdev dari agensi lain.',
        a: { title: 'Analisis Prestasi Berfokuskan Data', description: 'Astral Qalam tidak sekadar membina laman web yang cantik, malah setiap reka bentuk disokong oleh analisis prestasi yang mendalam. Kami mengoptimumkan struktur laman web untuk memastikan kelajuan muat turun yang pantas, mesra SEO, dan memberikan pengalaman pengguna (UX) yang sangat lancar bagi meningkatkan kadar penukaran (conversion rate).' },
        b: { title: 'Bina Jenama dengan Identiti Unik', description: 'Kami memahami bahawa setiap perniagaan mempunyai jiwa tersendiri. Kami mengelakkan penggunaan templat generik. Sebaliknya, kami membina identiti visual yang unik dan eksklusif yang mencerminkan nilai teras serta personaliti jenama anda, memastikan perniagaan anda menonjol di celah lambakan pesaing.' },
        c: { title: 'Ciri Keselamatan Tahap Tinggi', description: 'Keselamatan data adalah keutamaan kami. Laman web yang dihasilkan oleh Astral Qalam dilengkapi dengan protokol keselamatan terkini, perlindungan terhadap ancaman siber, dan sistem sandaran (backup) automatik. Anda boleh menjalankan perniagaan dengan tenang tanpa perlu risau tentang gangguan teknikal atau serangan pihak luar.' },
        d: { title: 'Direka Responsif Sepenuhnya', description: 'Dalam era mudah alih (mobile-first), laman web anda akan kelihatan sempurna pada semua jenis peranti—sama ada telefon pintar, tablet, mahupun desktop. Kami memastikan elemen reka bentuk kekal konsisten dan berfungsi dengan optimum tanpa mengira saiz skrin pengguna.' },
        e: { title: 'Evolusi dan Sokongan Berterusan', description: 'Hubungan kami tidak terhenti sebaik sahaja laman web siap. Kami menyediakan sokongan teknikal dan perundingan berterusan untuk memastikan laman web anda sentiasa dikemas kini dengan teknologi terkini. Kami bersedia membantu mengembangkan fungsi laman web anda seiring dengan pertumbuhan perniagaan anda.' },
        f: { title: 'Fleksibiliti dalam Penyelesaian Kreatif', description: 'Kami amat fleksibel dalam menyesuaikan penyelesaian mengikut bajet dan matlamat khusus klien. Sama ada anda memerlukan kedai e-dagang yang kompleks, portfolio profesional, atau sistem tempahan khas, Astral Qalam pakar dalam menterjemahkan keperluan teknikal yang rumit kepada penyelesaian yang praktikal dan inovatif.' }
      },
      services: {
        label: 'Kepakaran Kami',
        title: 'Apa Yang Kami Bina',
        portfolio: 'Corporate Portfolio',
        portfolio_description: 'Bina reputasi jenama dengan reka bentuk korporat yang elegan, berautoriti, dan meninggalkan kesan pertama yang kuat.',
        portfolio_tag: 'Profesional',
        saas: 'SaaS Platform UI/UX',
        saas_description: 'Antara muka perisian yang intuitif dan mesra pengguna, direka untuk memaksimumkan kadar penukaran dan pengekalan.',
        saas_tag: 'Inovatif',
        ecommerce: 'Direct Sale E-commerce',
        ecommerce_description: 'Sistem jualan langsung dengan integrasi pembayaran, pengurusan inventori, dan aliran checkout yang licin.',
        ecommerce_tag: 'Berhasil'
      },
      portfolio: {
        label: 'Portfolio Kami',
        title: 'Contoh',
        subtitle: 'Hasil Web Design',
        description: 'Beberapa projek terkini yang kami bina — dari homestay hingga platform sumbangan dan alatan praktikal.',
        filter: { all: 'Semua', homestay: 'Homestay', donation: 'Sumbangan', edu: 'Edu', tool: 'Tool' },
        homestay: { category: 'Homestay & Tempahan', description: 'Sistem tempahan homestay dengan Google Maps, galeri gambar, dan borang pertanyaan.' },
        donation: { category: 'Platform Sumbangan', description: 'Laman sumbangan dengan paparan dana terkumpul, senarai projek, dan pautan pembayaran.' },
        edu: { category: 'Kandungan Pendidikan', description: 'Saluran TikTok untuk perkongsian ilmu dan tips pembelajaran interaktif.' },
        tool: { name: 'Waktu Solat', category: 'Alatan Praktikal', description: 'Paparan waktu solat mengikut lokasi dengan jadual harian dan notifikasi.' },
        demo: 'Lihat Demo →'
      },
      pricing: {
        label: 'PELAN WEB DESIGN',
        title: 'Pilih Pelan<br>Astral Qalam Anda',
        description: 'Bina Laman Web Profesional, Mengikut Bajet & Keperluan Anda.',
        basic: { badge: 'MULA KECIL', desc: 'Impak Besar', feature1: 'Satu (1) Halaman (Single Page)', feature2: 'Animasi Biasa (Standard Motion)', feature3: 'Sehingga 10 Gambar (Gambar Disediakan)', feature4: 'Pengoptimuman Asas Mobile', feature5: 'Templat Mesra SEO', cta: 'MULA DENGAN BASIC', note: 'Pantas • Mudah • Berpatutan' },
        pro: { badge: 'DINAMIK', desc: 'Dinamik & Interaktif', feature1: 'Muka Halaman Berganda (Multi-Page)', feature2: 'Animasi Penuh & Kustom (Full Motion)', feature3: 'Gambar & Video Profesional', feature4: 'Reka Bentuk Responsif Penuh (Mobile, Tablet, Desktop)', feature5: 'Integrasi Media Sosial & Borang Kenalan', feature6: 'SEO Lanjutan', cta: 'PILIH PELAN PRO', note: 'Dinamik • Interaktif • Profesional' },
        ultra: { badge: 'MAJU', desc: 'Skalabiliti & Kuasa Penuh', feature1: 'Semua Ciri PRO Termasuk', feature2: 'Fungsi Backend Penuh (Full Backend)', feature3: 'Pengurusan Kandungan (CMS) Kustom', feature4: 'Integrasi E-Commerce Penuh', feature5: 'Pangkalan Data Kustom & Analitis', feature6: 'Sokongan Keutamaan & Penyelenggaraan', cta: 'BINCANG PELAN ULTRA', note: 'Maju • Skalabiliti • Berkuasa' },
        free: { badge: '✔️ Subdomain Percuma + Penyelenggaraan 1 Tahun' },
        domain: { title: '📌 Harga Domain Setahun (Pendaftaran & Pembaharuan)', year: '/ tahun', note: '*Setiap pelan merangkumi percuma subdomain (nama.astralqalam.my). Anda boleh membeli domain sendiri atau kami uruskan.' }
      },
      faq: {
        label: 'Soalan Lazim',
        title1: 'Ada Soalan?',
        title2: 'Kami Ada Jawapan',
        q1: '❓ Apakah itu subdomain percuma?',
        q2: '❓ Adakah penyelenggaraan 1 tahun benar-benar percuma?',
        q3: '❓ Bolehkah saya menggunakan domain sendiri?',
        q4: '❓ Apakah bentuk sokongan selepas penyelenggaraan percuma tamat?',
        a1: 'Subdomain percuma adalah alamat web seperti \'namaanda.astralqalam.my\' yang diberikan tanpa caj seumur hidup (selagi anda menggunakan perkhidmatan hosting kami). Ia sesuai untuk permulaan sebelum anda membeli domain sendiri.',
        a2: 'Ya. Untuk mana-mana pelan BASIC, PRO atau ULTRA, kami memberikan penyelenggaraan percuma selama 12 bulan termasuk kemas kini keselamatan, backup dan sokongan teknikal asas. Selepas tahun pertama, pelan penyelenggaraan tahunan dikenakan caya RM200/tahun (opt-in).',
        a3: 'Tentu boleh. Anda boleh membeli domain sendiri dari mana-mana registrar (seperti .com, .my, .com.my) dan kami akan bantu konfigurasikan ke laman web anda. Harga domain tahunan adalah seperti yang dinyatakan di atas jika anda ingin kami uruskan pendaftaran.',
        a4: 'Kami menawarkan pelan sokongan fleksibel: bayaran sekali untuk pembaikan, atau pelan tahunan RM200 yang merangkumi kemas kini, backup mingguan, dan masa respons keutamaan. Anda juga boleh menghubungi kami secara berasingan untuk sebarang pertanyaan.'
      },
      cta: {
        title: 'Bersedia Untuk',
        begin: 'Bermula?',
        description: 'Hubungi kami hari ini untuk konsultasi percuma. Kami sedia membantu bisnes anda berkembang dalam era digital.'
      },
      footer: {
        description: 'Membina pengalaman digital yang hidup. Satu piksel pada satu masa.',
        slogan: 'Dikuasakan oleh reka bentuk imersif & semangat tanpa henti.'
      }
    },
    en: {
      hero: {
        badge: '★ Premium Web Services',
        line1: 'Elevate Your Business',
        line2: 'A New Dimension',
        subtitle: 'Astral Qalam Webdev builds high-performance websites — from Corporate Portfolios, SaaS Platforms, to Direct Sale E-commerce. Designed not just to look great, but to deliver real results.',
        cta1: '🚀 Start Your Project',
        cta2: 'View Services →',
        explore: 'Explore'
      },
      about: {
        label: 'About Us',
        title1: 'A Digital Identity',
        title2: "That Lives & Breathes",
        description: 'At Astral Qalam Webdev, we don\'t just build websites — we craft digital experiences that leave a lasting impression. Your website is a business branch operating 24/7, and we ensure it looks professional, runs fast, and stays secure.',
        stat1: 'Custom-Built Code',
        stat2: 'Technical Support',
        stat3: 'Page Load Time',
        stat4: 'Design Possibilities'
      },
      usp: {
        label: 'Why Us?',
        title: 'Advantages A to F',
        description: 'Six key advantages that set Astral Qalam Webdev apart from other agencies.',
        a: { title: 'Data-Driven Performance Analysis', description: "Astral Qalam doesn't just build beautiful websites; every design is supported by in-depth performance analysis. We optimize website structure to ensure fast loading speeds, SEO-friendliness, and a seamless user experience (UX) to boost conversion rates." },
        b: { title: 'Build a Brand with Unique Identity', description: "We understand that every business has its own soul. We avoid generic templates. Instead, we build a unique and exclusive visual identity that reflects your brand's core values and personality, ensuring your business stands out amidst a sea of competitors." },
        c: { title: 'High-Level Security Features', description: 'Data security is our priority. Websites built by Astral Qalam come equipped with the latest security protocols, protection against cyber threats, and automatic backup systems. You can run your business with peace of mind without worrying about technical disruptions or external attacks.' },
        d: { title: 'Fully Responsive Design', description: 'In the mobile-first era, your website will look perfect on all devices—whether smartphones, tablets, or desktops. We ensure design elements remain consistent and function optimally regardless of the user\'s screen size.' },
        e: { title: 'Ongoing Evolution and Support', description: "Our relationship doesn't end once the website is complete. We provide ongoing technical support and consultation to ensure your website stays updated with the latest technology. We're ready to help expand your website's functionality as your business grows." },
        f: { title: 'Flexibility in Creative Solutions', description: 'We are highly flexible in tailoring solutions to each client\'s budget and specific goals. Whether you need a complex e-commerce store, a professional portfolio, or a custom booking system, Astral Qalam specializes in translating complex technical requirements into practical and innovative solutions.' }
      },
      services: {
        label: 'Our Expertise',
        title: 'What We Build',
        portfolio: 'Corporate Portfolio',
        portfolio_description: 'Build your brand reputation with elegant, authoritative corporate design that makes a powerful first impression.',
        portfolio_tag: 'Professional',
        saas: 'SaaS Platform UI/UX',
        saas_description: 'Intuitive and user-friendly software interfaces designed to maximize conversion and retention rates.',
        saas_tag: 'Innovative',
        ecommerce: 'Direct Sale E-commerce',
        ecommerce_description: 'Direct sales system with payment integration, inventory management, and smooth checkout flow.',
        ecommerce_tag: 'Result-Driven'
      },
      portfolio: {
        label: 'Our Portfolio',
        title: 'Live',
        subtitle: 'Web Design Projects',
        description: 'Some of our recent projects — from homestay booking to donation platforms and practical tools.',
        filter: { all: 'All', homestay: 'Homestay', donation: 'Donation', edu: 'Edu', tool: 'Tool' },
        homestay: { category: 'Homestay & Booking', description: 'Homestay booking system with Google Maps, image gallery, and inquiry form.' },
        donation: { category: 'Donation Platform', description: 'Donation page with fund progress, project list, and payment links.' },
        edu: { category: 'Educational Content', description: 'TikTok channel sharing knowledge and interactive learning tips.' },
        tool: { name: 'Prayer Times', category: 'Practical Tool', description: 'Prayer times display by location with daily schedule and notifications.' },
        demo: 'Live Demo →'
      },
      pricing: {
        label: 'WEB DESIGN PLANS',
        title: 'Choose Your<br>Astral Qalam Plan',
        description: 'Build a professional website that fits your budget and needs.',
        basic: { badge: 'START SMALL', desc: 'Big Impact', feature1: 'One (1) Single Page', feature2: 'Standard Motion', feature3: 'Up to 10 Images (Provided by you)', feature4: 'Basic Mobile Optimization', feature5: 'SEO-Friendly Template', cta: 'START WITH BASIC', note: 'Fast • Simple • Affordable' },
        pro: { badge: 'DYNAMIC', desc: 'Dynamic & Interactive', feature1: 'Multi-Page Website', feature2: 'Full Custom Motion', feature3: 'Professional Images & Video', feature4: 'Fully Responsive Design', feature5: 'Social Media & Contact Forms', feature6: 'Advanced SEO', cta: 'CHOOSE PRO PLAN', note: 'Dynamic • Interactive • Professional' },
        ultra: { badge: 'ADVANCED', desc: 'Scalability & Full Power', feature1: 'All PRO features included', feature2: 'Full Backend Functionality', feature3: 'Custom CMS', feature4: 'Full E-Commerce Integration', feature5: 'Custom Database & Analytics', feature6: 'Priority Support & Maintenance', cta: 'DISCUSS ULTRA PLAN', note: 'Advanced • Scalable • Powerful' },
        free: { badge: '✔️ Free Subdomain + 1 Year Maintenance' },
        domain: { title: '📌 Yearly Domain Pricing (Registration & Renewal)', year: '/year', note: '*Every plan includes a free subdomain (yourname.astralqalam.my). You may purchase your own domain or we manage it.' }
      },
      faq: {
        label: 'FAQ',
        title1: 'Got Questions?',
        title2: 'We Have Answers',
        q1: '❓ What is a free subdomain?',
        q2: '❓ Is the 1-year maintenance truly free?',
        q3: '❓ Can I use my own domain?',
        q4: '❓ What support after free maintenance ends?',
        a1: "A free subdomain is a web address like 'yourname.astralqalam.my' given at no charge for as long as you use our hosting service. It's perfect to start before you purchase your own domain.",
        a2: 'Yes. For any BASIC, PRO or ULTRA plan, we provide free maintenance for 12 months including security updates, backups and basic technical support. After the first year, an annual maintenance plan of RM200/year applies (opt-in).',
        a3: "Absolutely. You can buy your own domain from any registrar (like .com, .my, .com.my) and we'll help configure it to your website. The yearly domain prices stated above apply if you want us to handle registration.",
        a4: 'We offer flexible support plans: one-time payment for fixes, or an annual plan of RM200 covering updates, weekly backups, and priority response. You can also contact us separately for any inquiries.'
      },
      cta: {
        title: 'Ready to Get Started?',
        begin: 'Begin?',
        description: "Contact us today for a free consultation. We're ready to help your business grow in the digital era."
      },
      footer: {
        description: 'Building digital experiences that live and breathe. One pixel at a time.',
        slogan: 'Powered by immersive design & relentless passion.'
      }
    }
  }
}
