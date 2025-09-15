import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../constants';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const titleRef = useRef(null);
  const codeEditorRef = useRef(null);
  
  // Mouse tracking for 3D effects - only when hovering
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (codeEditorRef.current && isHovering) {
        const rect = codeEditorRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / rect.width,
          y: (e.clientY - centerY) / rect.height
        });
      }
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  // Typewriter effect for hero title
  useEffect(() => {
    const fullText = `Hi, I'm Afreedh`;
    let i = 0;
    
    const typeWriter = () => {
      if (i < fullText.length) {
        setTitleText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setShowCursor(false);
      }
    };
    
    const startDelay = setTimeout(typeWriter, 500);
    return () => clearTimeout(startDelay);
  }, []);

  // Code editor animation - simple text typing without syntax highlighting
  useEffect(() => {
    const allText = personalInfo.codeLines.join('\n');
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < allText.length) {
        const currentText = allText.slice(0, currentIndex + 1);
        setDisplayedText(currentText);
        currentIndex++;
        setTimeout(typeNextChar, 50); // Fast typing speed - 50ms per character
      }
    };
    
    const startDelay = setTimeout(typeNextChar, 1000); // Start after 1 second
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" ref={titleRef}>
              <span className="typewriter-text">
                {titleText.includes('Afreedh') ? (
                  <>
                    {titleText.split('Afreedh')[0]}
                    <span className="name-gradient">Afreedh</span>
                    {titleText.split('Afreedh')[1]}
                  </>
                ) : (
                  titleText
                )}
              </span>
              {showCursor && <span className="typewriter-cursor">|</span>}
            </h1>
            <h2 className="hero-subtitle">{personalInfo.role}</h2>
            <p className="hero-description">
              {personalInfo.description}
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary hover-lift">View My Work</a>
              <a href="#contact" className="btn btn-secondary hover-lift">Get In Touch</a>
            </div>
          </div>
          <div className="hero-code">
            <div 
              className="code-editor"
              ref={codeEditorRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
              }}
              style={{
                transform: isHovering ? `
                  perspective(1000px)
                  rotateX(${mousePosition.y * -17.5}deg)
                  rotateY(${mousePosition.x * 17.5}deg)
                  translateX(${mousePosition.x * 20}px)
                  translateY(${mousePosition.y * 20}px)
                ` : 'none',
                transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-title">developer.js</div>
              </div>
              <div className="code-content">
                <pre>
                  <code id="typewriter-code">{displayedText}</code>
                  <span className="cursor">|</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
