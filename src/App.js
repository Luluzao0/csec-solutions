import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duração da animação em milissegundos
      once: true, // Animar apenas a primeira vez
    });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
