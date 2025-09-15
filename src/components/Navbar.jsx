import React from 'react';
import { navigationLinks } from '../constants';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { smoothScrollTo } from '../utils/animations';

const Navbar = () => {
  const { activeSection = 'home' } = useScrollAnimations() || {};

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    
    // Force scroll with timeout to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
        const elementPosition = element.offsetTop - navbarHeight - 20;
        
        // Use both methods for maximum compatibility
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
        
        // Fallback method
        setTimeout(() => {
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }, 50);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="logo-highlight">Afreedh Syed</span>
          </a>
        </div>
        <ul className="nav-menu">
          {navigationLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a 
                href={link.href} 
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
