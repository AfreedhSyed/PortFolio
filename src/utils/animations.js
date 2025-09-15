// Animation utilities for scroll effects and interactions

// Smooth scroll to element with enhanced animation
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Intersection Observer for scroll animations
export const createScrollObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.1
  };

  const observerOptions = { ...defaultOptions, ...options };

  return new IntersectionObserver(callback, observerOptions);
};

// Add scroll animation classes
export const addScrollAnimations = () => {
  const observer = createScrollObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        entry.target.classList.remove('animate-out');
      }
    });
  });

  // Observe all elements with scroll-animate class
  const animatedElements = document.querySelectorAll('.scroll-animate');
  animatedElements.forEach((el) => observer.observe(el));

  return observer;
};

// Get current active section based on scroll position
export const getCurrentSection = () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    
    if (scrollPosition >= sectionTop) {
      return section.id;
    }
  }
  
  return sections[0]?.id || 'home';
};

// Typewriter effect
export const typeWriter = (element, text, speed = 100, callback = null) => {
  let i = 0;
  element.innerHTML = '';
  
  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  };
  
  type();
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate-in');
    }, index * delay);
  });
};
