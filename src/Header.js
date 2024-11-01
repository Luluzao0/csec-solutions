import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container text-center" data-aos="fade-down">
        <h1 className="display-4">CSec Solutions</h1>
        <p className="lead">Segurança digital prática e acessível para você e sua empresa</p>
        <a href="#services" className="btn btn-primary mt-3">Conheça nossos serviços</a>
      </div>
    </header>
  );
}

export default Header;