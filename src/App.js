import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

// Import Bootstrap JS for functionality
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  // Initialize bootstrap scrollspy
  useEffect(() => {
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      const bootstrap = window.bootstrap;
      if (bootstrap && bootstrap.ScrollSpy) {
        new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          offset: 74,
        });
      }
    }
  }, []);

  return (
    <div className="App" id="page-top">
      <Navigation />
      <Header />
      <About />
      <Services />
      <Gallery />
      <BeforeAfter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;