
(function() {
  'use strict';

  // ----- 1. Mobile nav toggle -----
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    const setMenuState = function(isOpen) {
      navLinks.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    };

    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = !navLinks.classList.contains('open');
      setMenuState(isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        setMenuState(false);
      });
    });

    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        setMenuState(false);
      }
    });
  }

  var slides = document.querySelectorAll('.testimonial-slide');
  var currentIndex = 0;
  var totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(function(s, i) {
      s.classList.toggle('active', i === index);
    });
  }

  var prevBtn = document.getElementById('prevTestimonial');
  var nextBtn = document.getElementById('nextTestimonial');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    });
  }

  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please complete all fields before sending your message.');
        return;
      }

      if (!email.checkValidity()) {
        email.reportValidity();
        return;
      }

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Message Sent';
        submitBtn.disabled = true;
      }

      contactForm.reset();
      setTimeout(function() {
        if (submitBtn) {
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }
      }, 2000);
    });
  }
})();

