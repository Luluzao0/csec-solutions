import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('aos-animate');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="app-container">
            <header className="header">
        <div className="container text-center" data-aos="fade-down">
          <h1 className="display-4">CSec Solutions</h1>
          <p className="lead">Segurança digital prática e acessível para você e sua empresa</p>
          <a href="#services" className="btn btn-primary mt-3">Conheça nossos serviços</a>
        </div>
      </header>
      <div className="container" id="services">
        <div className="row mt-5">
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-router-fill icon"></i>
              </div>
              <h2>Instalação de Roteadores com VPN</h2>
              <p>Configuração de roteadores com VPN para criar redes privadas e seguras que protegem os dados contra interceptações e ataques cibernéticos.</p>
              <ul>
                <li><strong>Benefícios:</strong> Privacidade completa, navegação anônima e segurança de ponta a ponta.</li>
                <li><strong>Serviços Extras:</strong> Monitoramento de Tráfego, Configuração de Firewalls Avançados.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-envelope-fill icon"></i>
              </div>
              <h2>Criação de E-mails Criptografados</h2>
              <p>Criação e configuração de e-mails criptografados com soluções como ProtonMail, garantindo comunicação segura e privada.</p>
              <ul>
                <li><strong>Benefícios:</strong> Confidencialidade para mensagens sensíveis, proteção contra phishing.</li>
                <li><strong>Serviços Extras:</strong> Autenticação de Dois Fatores (2FA), Gerenciamento de Chaves de Criptografia.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-shield-fill-check icon"></i>
              </div>
              <h2>VPN em Tempo Real</h2>
              <p>Implementação de serviços de VPN para proteger a conexão à internet em qualquer dispositivo, garantindo anonimato e segurança.</p>
              <ul>
                <li><strong>Benefícios:</strong> Acesso seguro a redes públicas e privadas, proteção contra rastreamento online.</li>
                <li><strong>Serviços Extras:</strong> IP Dedicado e Geolocalização Customizada, Suporte a Múltiplos Dispositivos.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div className="service-card">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-lock-fill icon"></i>
              </div>
              <h2>Auditoria de Segurança</h2>
              <p>Avaliação completa da infraestrutura de TI para identificar vulnerabilidades e garantir que todos os pontos de entrada estejam seguros.</p>
              <ul>
                <li><strong>Benefícios:</strong> Redução de riscos, segurança proativa e conformidade com padrões de segurança.</li>
                <li><strong>Serviços Extras:</strong> Relatórios Detalhados, Consultoria para Correções.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
            <div className="service-card">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-people-fill icon"></i>
              </div>
              <h2>Treinamento em Cibersegurança</h2>
              <p>Capacitação de equipes para reconhecer e responder a ameaças cibernéticas comuns, como phishing e ataques de engenharia social.</p>
              <ul>
                <li><strong>Benefícios:</strong> Redução de riscos humanos e aumento da conscientização em segurança.</li>
                <li><strong>Serviços Extras:</strong> Simulações de Ataques, Workshops Práticos.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
            <div className="service-card">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-hdd-network-fill icon"></i>
              </div>
              <h2>Backup e Recuperação de Desastres</h2>
              <p>Implementação de soluções de backup automáticas e planos de recuperação para garantir a continuidade dos negócios em caso de falhas.</p>
              <ul>
                <li><strong>Benefícios:</strong> Proteção contra perda de dados e recuperação rápida em caso de incidentes.</li>
                <li><strong>Serviços Extras:</strong> Armazenamento em Nuvem, Testes de Recuperação.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-5" id="about">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up">
            <h2 className="text-center">Sobre Nós</h2>
            <p className="lead text-center">A CSec Solutions é uma empresa dedicada à proteção digital de indivíduos e organizações. Nossa missão é fornecer soluções robustas e acessíveis para garantir a segurança das suas informações e comunicações.</p>
            <p className="text-center">Com uma equipe de especialistas em cibersegurança, buscamos constantemente inovar e nos manter à frente das ameaças, garantindo que nossos clientes possam operar de forma segura e tranquila.</p>
          </div>
        </div>
      </section>

      <section className="container mt-5" id="contact">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up">
            <h2 className="text-center">Contato</h2>
            <p className="text-center">Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudá-lo a proteger seu ambiente digital.</p>
            <form className="contact-form mx-auto" style={{ maxWidth: '600px' }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer mt-5" data-aos="fade-up">
        <div className="container text-center">
          <p>&copy; 2024 CSec Solutions. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
