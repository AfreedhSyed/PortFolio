import { useEffect, useState, useCallback } from 'react';

export const useScrollAnimations = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    try {
      const sections = document.querySelectorAll('section[id]');
      if (sections.length === 0) return;

      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'home';
        }
      });

      setActiveSection(current);
    } catch (error) {
      console.warn('Error in scroll handler:', error);
    }
  }, []);

  useEffect(() => {
    // Early return if running on server
    if (typeof window === 'undefined') return;

    try {
      const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              if (entry.target) {
                entry.target.classList.add('scroll-animate-visible');
              }
            }, delay);
          }
        });
      }, observerOptions);

      // Setup scroll animations with error handling
      const setupAnimations = () => {
        const animateElements = document.querySelectorAll('.scroll-animate');
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
          if (item) {
            item.dataset.delay = index * 200;
          }
        });
        
        animateElements.forEach((el) => {
          if (el) observer.observe(el);
        });

        return { animateElements, observer };
      };

      // Initial setup
      const { animateElements } = setupAnimations();

      // Setup scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Initial call to set active section
      handleScroll();

      // Cleanup function
      return () => {
        try {
          if (observer) {
            animateElements.forEach((el) => {
              if (el) observer.unobserve(el);
            });
            observer.disconnect();
          }
          window.removeEventListener('scroll', handleScroll);
        } catch (error) {
          console.warn('Error during cleanup:', error);
        }
      };
    } catch (error) {
      console.warn('Error setting up scroll animations:', error);
    }
  }, [handleScroll]);

  // Always return an object with activeSection, even if there's an error
  return { activeSection };
};
