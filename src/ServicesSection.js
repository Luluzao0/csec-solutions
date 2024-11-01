import React from 'react';
import ServiceCard from './ServiceCard';

function ServicesSection() {
  return (
    <div className="container" id="services">
      <div className="row mt-5">
        <ServiceCard
          title="Instalação de Roteadores com VPN"
          description="Configuração de roteadores com VPN para criar redes privadas e seguras."
          icon="bi-router-fill"
          benefits="Privacidade completa, navegação anônima e segurança de ponta a ponta."
          extras="Monitoramento de Tráfego, Configuração de Firewalls Avançados."
        />
        <ServiceCard
          title="Criação de E-mails Criptografados"
          description="Criação e configuração de e-mails criptografados com soluções como ProtonMail, garantindo comunicação segura e privada."
          icon="bi-envelope-fill"
          benefits="Confidencialidade para mensagens sensíveis, proteção contra phishing."
          extras="Autenticação de Dois Fatores (2FA), Gerenciamento de Chaves de Criptografia."
        />
        <ServiceCard
          title="VPN em Tempo Real"
          description="Implementação de serviços de VPN para proteger a conexão à internet em qualquer dispositivo, garantindo anonimato e segurança."
          icon="bi-shield-fill-check"
          benefits="Acesso seguro a redes públicas e privadas, proteção contra rastreamento online."
          extras="IP Dedicado e Geolocalização Customizada, Suporte a Múltiplos Dispositivos."
        />
        <ServiceCard
          title="Auditoria de Segurança"
          description="Avaliação completa da infraestrutura de TI para identificar vulnerabilidades e garantir que todos os pontos de entrada estejam seguros."
          icon="bi-lock-fill"
          benefits="Redução de riscos, segurança proativa e conformidade com padrões de segurança."
          extras="Relatórios Detalhados, Consultoria para Correções."
        />
        <ServiceCard
          title="Treinamento em Cibersegurança"
          description="Capacitação de equipes para reconhecer e responder a ameaças cibernéticas comuns, como phishing e ataques de engenharia social."
          icon="bi-people-fill"
          benefits="Redução de riscos humanos e aumento da conscientização em segurança."
          extras="Simulações de Ataques, Workshops Práticos."
        />
        <ServiceCard
          title="Backup e Recuperação de Desastres"
          description="Implementação de soluções de backup automáticas e planos de recuperação para garantir a continuidade dos negócios em caso de falhas."
          icon="bi-hdd-network-fill"
          benefits="Proteção contra perda de dados e recuperação rápida em caso de incidentes."
          extras="Armazenamento em Nuvem, Testes de Recuperação."
        />
      </div>
    </div>
  );
}

export default ServicesSection;