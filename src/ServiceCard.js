import React from 'react';

function ServiceCard({ title, description, icon, benefits, extras }) {
  return (
    <div className="col-md-6 col-lg-4" data-aos="fade-up">
      <div className="service-card">
        <div className="icon-wrapper mb-3">
          <i className={`bi ${icon} icon`}></i>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <li><strong>Benefícios:</strong> {benefits}</li>
          <li><strong>Serviços Extras:</strong> {extras}</li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;