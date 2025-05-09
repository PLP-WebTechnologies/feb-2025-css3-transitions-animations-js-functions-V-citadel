document.addEventListener('DOMContentLoaded', () => {
    const btn          = document.getElementById('magicButton');
    const emailInput   = document.getElementById('email');
    const passInput    = document.getElementById('password');
    const feedback     = document.getElementById('feedback');
    const form         = document.getElementById('contactForm');
    const themeToggle  = document.getElementById('themeToggle');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    // — Theme Toggle & Persistence
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark', savedTheme === 'dark');
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  
    // — Restore & Persist Magic Button State
    const savedText  = localStorage.getItem('buttonText');
    const savedColor = localStorage.getItem('buttonColor');
    if (savedText && savedColor) {
      btn.textContent = savedText;
      btn.style.backgroundColor = savedColor;
    }
    btn.addEventListener('click', function() {
      this.textContent = 'Nature is Amazing!';
      this.style.backgroundColor = '#28a745';
      this.classList.add('pulse');
      setTimeout(() => this.classList.remove('pulse'), 1000);
      localStorage.setItem('buttonText', this.textContent);
      localStorage.setItem('buttonColor', this.style.backgroundColor);
    });
    btn.addEventListener('dblclick', () => {
      alert("Double Click: You've unlocked a wildlife secret!");
    });
  
    // — Gallery Border Hover (original feature)
    const gallerySection = document.getElementById('gallery');
    gallerySection.addEventListener('mouseover', () => {
      gallerySection.style.border = '2px solid green';
    });
    gallerySection.addEventListener('mouseout', () => {
      gallerySection.style.border = 'none';
    });
  
    // — Scroll-triggered gallery animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    galleryItems.forEach(item => observer.observe(item));
  
    // — Real-time Email Validation (original feature)
    emailInput.addEventListener('input', () => {
      if (emailInput.value.includes('@')) {
        feedback.textContent = '✔ Valid Email';
        feedback.style.color = 'green';
      } else {
        feedback.textContent = '❌ Invalid Email';
        feedback.style.color = 'red';
      }
    });
  
    // — Password Strength Indicator (original feature)
    passInput.addEventListener('input', () => {
      passInput.style.border = passInput.value.length >= 8
        ? '2px solid green' : '2px solid red';
    });
    passInput.addEventListener('keypress', () => {
      // keypress version retained if needed
    });
  
    // — Form Submission (original feature)
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert("Thanks for reaching out! We'll get back to you soon.");
      form.reset();
      feedback.textContent = '';
    });
  });
  