import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setFormStatus({
        submitted: false,
        message: 'Por favor, completa todos los campos obligatorios.'
      });
      return;
    }

    // Simulación de envío exitoso
    console.log('Datos del formulario:', formData);

    setFormStatus({
      submitted: true,
      message: '¡Reserva enviada con éxito! Te contactaremos pronto para confirmar tu reserva.'
    });

    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      setFormStatus({ submitted: false, message: '' });
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero-title">Contáctanos</h1>
          <p className="contact-hero-subtitle">
            Estamos aquí para servirte
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Información de Contacto</h2>

              <div className="info-item">
                <h3>Dirección</h3>
                <p>Calle Italia, 123</p>
                <p>28001 Madrid, España</p>
              </div>

              <div className="info-item">
                <h3>Teléfono</h3>
                <p>+34 91 123 45 67</p>
                <p>+34 600 12 34 56</p>
              </div>

              <div className="info-item">
                <h3>Email</h3>
                <p>info@bellaitalia.es</p>
                <p>reservas@bellaitalia.es</p>
              </div>

              <div className="info-item">
                <h3>Horarios</h3>
                <p><strong>Lunes a Viernes:</strong></p>
                <p>13:00 - 16:00 / 20:00 - 23:30</p>
                <p><strong>Sábados y Domingos:</strong></p>
                <p>13:00 - 23:30</p>
              </div>

              <div className="info-item">
                <h3>Síguenos</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="contact-form-container">
              <h2>Reserva tu Mesa</h2>
              <p className="form-description">
                Completa el formulario y te confirmaremos tu reserva lo antes posible
              </p>

              {formStatus.message && (
                <div className={`form-message ${formStatus.submitted ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 600 00 00 00"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Fecha *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Hora *</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Número de Personas</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6 personas</option>
                    <option value="7+">Más de 6 personas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Comentarios adicionales</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Alergias, ocasión especial, preferencias..."
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Enviar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
