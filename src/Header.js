import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-assistive');
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  return (
    <motion.header
      className="header-assistive header-hover"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="logo-container">
        <div className="logo">BAMIT</div>
      </div>
      <div className="container d-flex align-items-center justify-content-center">
        <nav className={`d-flex ${menuOpen ? 'menu-open' : ''} d-md-block flex-grow-1 justify-content-center`}>
          <ul className="list-unstyled d-flex mb-0">
            <li className="mx-3">
              <a href="#" className="text-light link-hover-effect">Home</a>
            </li>
            <li className="mx-3">
              <a href="#services" className="text-light link-hover-effect">Serviços</a>
            </li>
            <li className="mx-3">
              <a href="#about" className="text-light link-hover-effect">Sobre a CSec Solutions</a>
            </li>
            <li className="mx-3">
              <a href="#careers" className="text-light link-hover-effect">Carreiras</a>
            </li>
            <li className="mx-3">
              <a href="#contact" className="text-light link-hover-effect">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="d-flex">
          <a href="#search" className="text-light mx-2 link-hover-effect">
            <i className="bi bi-search"></i>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
