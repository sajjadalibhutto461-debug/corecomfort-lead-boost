// CoreComfort HVAC - Pure JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initHeader();
  initMobileMenu();
  initStickyCtaBar();
  initStatsCounter();
  initFaqAccordion();
  initContactForm();
});

// Header scroll effect
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on load
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('active');
    if (menuIcon && closeIcon) {
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
    }
  });

  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  });
}

// Sticky CTA bar
function initStickyCtaBar() {
  const stickyBar = document.querySelector('.sticky-cta-bar');
  const closeBtn = document.querySelector('.sticky-cta-close');
  
  if (!stickyBar) return;

  let isDismissed = false;

  function handleScroll() {
    if (window.scrollY > 600 && !isDismissed) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll);

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      isDismissed = true;
      stickyBar.classList.remove('visible');
    });
  }
}

// Animated stats counter
function initStatsCounter() {
  const statItems = document.querySelectorAll('.stat-value[data-count]');
  if (!statItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statItems.forEach(item => observer.observe(item));
}

function animateCounter(element) {
  const end = parseInt(element.dataset.count, 10);
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * end);
    element.textContent = current.toLocaleString() + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', function() {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
}

// Contact form handling
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(function() {
      // Show success message
      showToast('Message Sent!', 'We\'ll get back to you within 24 hours. For immediate assistance, call (214) 555-0198.');
      
      // Reset form
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

// Toast notification
function showToast(title, message) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
      </div>
      <div class="toast-text">
        <strong>${title}</strong>
        <p>${message}</p>
      </div>
      <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  `;

  // Add toast styles if not already present
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 9999;
        background: white;
        border-radius: 0.75rem;
        box-shadow: 0 20px 50px -12px hsla(209, 75%, 15%, 0.25);
        border: 1px solid hsl(220, 20%, 88%);
        animation: slideIn 0.3s ease;
        max-width: 400px;
      }
      .toast-content {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem 1.5rem;
      }
      .toast-icon {
        width: 2rem;
        height: 2rem;
        border-radius: 9999px;
        background: hsl(173, 71%, 42%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .toast-icon svg {
        width: 1.25rem;
        height: 1.25rem;
      }
      .toast-text strong {
        display: block;
        margin-bottom: 0.25rem;
      }
      .toast-text p {
        font-size: 0.875rem;
        color: hsl(209, 30%, 40%);
        margin: 0;
      }
      .toast-close {
        background: none;
        border: none;
        cursor: pointer;
        color: hsl(209, 30%, 40%);
        padding: 0;
        opacity: 0.5;
        transition: opacity 0.2s ease;
      }
      .toast-close:hover {
        opacity: 1;
      }
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  // Auto remove after 5 seconds
  setTimeout(function() {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 5000);
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    const targetId = link.getAttribute('href');
    if (targetId !== '#') {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();
