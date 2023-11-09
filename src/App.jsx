import React, { useState, useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Sounds from './sections/Sounds';
import Plugins from './sections/Plugins';
import About from './sections/About';

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);

      if (window.scrollY > 100) {
        setHeaderClass('scroll');
      } else {
        setHeaderClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerClass]); // Include headerClass as a dependency for useEffect

  return (
    <>
      <header className={headerClass}>
        <Header />
      </header>
      <main>
        <Hero />
        <Features />
        <Sounds />
        <Plugins />
        <About />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
