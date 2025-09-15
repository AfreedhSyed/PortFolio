import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { activeSection } = useScrollAnimations();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Add scroll-animate class to body for initial animations
    document.body.classList.add('animations-ready');
  }, []);

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
