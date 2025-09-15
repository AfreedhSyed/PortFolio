import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out after a short delay
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500); // Wait for fade out animation
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-text">
            <span className="logo-letter">A</span>
            <span className="logo-letter">F</span>
          </div>
        </div>
        
        <div className="loading-text">
          <h2>Afreedh Syed</h2>
          <p>Java Full Stack Developer</p>
        </div>
        
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="loading-percentage">
          {Math.round(progress)}%
        </div>
      </div>
      
      <div className="loading-background">
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
