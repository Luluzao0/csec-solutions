import React from 'react';

function ContactSection() {
  return (
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
  );
}

export default ContactSection;