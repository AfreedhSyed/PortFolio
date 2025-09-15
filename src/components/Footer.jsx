import React from 'react';
import { footerLinks, contactInfo, personalInfo } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              Building digital experiences with modern technologies and clean design.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              {contactInfo.socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p>Developed by {personalInfo.name} with using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
