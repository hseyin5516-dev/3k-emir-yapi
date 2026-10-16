// 3K EMİR YAPI — MODERN PREFABRİK ETKİLEŞİM & NAVİGASYON MOTORU

document.addEventListener('DOMContentLoaded', () => {
  // Sticky header shadow on scroll
  const header = document.querySelector('header.mp-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Hero Slider logic
  initHeroSlider();

  // Mobile Drawer Toggle
  initMobileDrawer();
});

// HERO SLIDER
function initHeroSlider() {
  const slides = document.querySelectorAll('.mp-hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      showSlide(idx);
      startAuto();
    });
  });

  function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  function startAuto() {
    timer = setInterval(nextSlide, 6500);
  }

  startAuto();
}

// MOBILE DRAWER
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
}

// WHATSAPP URL GENERATOR HELPER
window.getWhatsAppLink = function(modelName, area, price) {
  const base = "https://wa.me/905314558585?text=";
  const msg = `Merhaba 3K Emir Yapı, web sitenizdeki "${modelName}" (${area} m²) modeli hakkında detaylı fiyat teklifi ve arsama keşif süreci ile ilgili bilgi almak istiyorum.`;
  return base + encodeURIComponent(msg);
};


// PROJECT CARD INTERACTIVE SLIDER
window.slideProject = function(btn, delta) {
  const wrap = btn.closest('.project-slider-wrap');
  if (!wrap) return;
  const slides = wrap.querySelectorAll('.project-slide-item');
  if (!slides.length) return;
  
  let cur = parseInt(wrap.dataset.current || '0');
  let next = (cur + delta + slides.length) % slides.length;
  setProjectSlide(wrap, next);
};

window.goToProjectSlide = function(dotOrThumb, idx) {
  const card = dotOrThumb.closest('.project-card-interactive');
  if (!card) return;
  const wrap = card.querySelector('.project-slider-wrap');
  if (!wrap) return;
  setProjectSlide(wrap, idx);
};

function setProjectSlide(wrap, idx) {
  const card = wrap.closest('.project-card-interactive');
  const slides = wrap.querySelectorAll('.project-slide-item');
  const dots = wrap.querySelectorAll('.slider-nav-dot');
  const counterEl = wrap.querySelector('.cur-idx');
  const thumbs = card ? card.querySelectorAll('.project-thumb-mini-item') : [];
  
  slides.forEach((s, i) => s.classList.toggle('active', i === idx));
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
  
  if (counterEl) counterEl.textContent = idx + 1;
  wrap.dataset.current = idx;
}

// Touch swipe support for project sliders
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-slider-wrap').forEach(wrap => {
    let startX = 0;
    wrap.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });
    wrap.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].screenX;
      if (startX - endX > 45) {
        const btn = wrap.querySelector('.slider-arrow-btn.next');
        if (btn) window.slideProject(btn, 1);
      } else if (endX - startX > 45) {
        const btn = wrap.querySelector('.slider-arrow-btn.prev');
        if (btn) window.slideProject(btn, -1);
      }
    }, { passive: true });
  });
});
