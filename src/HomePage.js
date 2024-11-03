import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div
      className="homepage full-height"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeIn' }}
    >
      <div className="homepage-content text-center">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          BAMIT Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          className="lead"
        >
          Segurança digital prática e acessível para proteger seus dados e sua empresa.
        </motion.p>
        <motion.a
          href="#services"
          className="btn btn-primary mt-4 btn-hover-effect"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        >
          Conheça nossos serviços
        </motion.a>
      </div>
    </motion.div>
  );
}

export default HomePage;