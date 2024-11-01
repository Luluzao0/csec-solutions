import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5>Sobre</h5>
            <p>CSec Solutions oferece segurança digital prática e acessível para proteger seus dados e sua empresa.</p>
          </div>
          <div className="col-md-3">
            <h5>Serviços</h5>
            <ul className="list-unstyled">
              <li>Instalação de VPN</li>
              <li>Configuração de Firewall</li>
              <li>Monitoramento de Rede</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>Email: contato@csecsolutions.com</li>
              <li>Telefone: +55 21 1234-5678</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Siga-nos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">LinkedIn</a></li>
              <li><a href="#" className="text-light">Facebook</a></li>
              <li><a href="#" className="text-light">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 CSec Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;