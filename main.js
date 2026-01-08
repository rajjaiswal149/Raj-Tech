// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const backToTop = document.getElementById('back-to-top');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
});

function updateThemeIcon(darkMode) {
  const moon = document.querySelector('#theme-toggle i.fa-moon');
  const sun = document.querySelector('#theme-toggle i.fa-sun');
  if (darkMode) {
    moon.classList.add('hidden');
    sun.classList.remove('hidden');
  } else {
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
  }
}

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  updateThemeIcon(true);
} else {
  updateThemeIcon(false);
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      mobileMenu.classList.add('hidden');
    }
  });
});

// Active Link Highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-indigo-600', 'dark:text-indigo-400');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-indigo-600', 'dark:text-indigo-400');
    }
  });
});

// Back to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('opacity-0', 'invisible');
  } else {
    backToTop.classList.add('opacity-0', 'invisible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate successful submission
  alert('Thank you! Your message has been sent.');
  this.reset();
});
