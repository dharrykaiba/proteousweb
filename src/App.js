import React from 'react';
import './App.css';

function App() {
  return (
    <div className="maintenance-container">
      {/* Fondo de seguridad */}
      <div className="bg-security"></div>

      <div className="maintenance-card">
        {/* ===== LOGO ===== */}
        <div className="logo-section">
          <img 
            src="https://static.wixstatic.com/media/75f7c8_e8dbdccd220c4025a5b26692702318ed~mv2.png/v1/fill/w_265,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png"
            alt="Proteous Smart Security"
            className="logo"
          />
        </div>

        {/* ===== PORTADA ===== */}
        <div className="hero-image">
          <img 
            src="https://static.wixstatic.com/media/54cfad_d2695fdfe8a24e3ba3f8d1549a0b71a1~mv2.jpg/v1/fill/w_981,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00_%20Portada%20Interna%20-%20Cont%C3%A1ctanos%20(1)_jp.jpg"
            alt="Proteous - Seguridad Electrónica"
            className="hero-img"
          />
          <div className="hero-overlay">
            <h1>🔒 Mantenimiento Programado</h1>
            <p className="hero-subtitle">
              Estamos fortaleciendo nuestros sistemas de <strong>seguridad y monitoreo</strong>
            </p>
          </div>
        </div>

        {/* ===== ESTADO DEL SISTEMA ===== */}
        <div className="system-status">
          <div className="status-item">
            <span className="status-dot"></span>
            <span className="status-label">Sistema</span>
            <span className="status-value online">En línea</span>
          </div>
          <div className="status-divider"></div>
          <div className="status-item">
            <span className="status-label">Monitoreo</span>
            <span className="status-value active">Activo 24/7</span>
          </div>
          <div className="status-divider"></div>
          <div className="status-item">
            <span className="status-label">Tiempo estimado</span>
            <span className="status-value">4-6 horas</span>
          </div>
        </div>

        {/* ===== PROGRESO ===== */}
        <div className="progress-section">
          <div className="progress-header">
            <span className="progress-label">Avance de mantenimiento</span>
            <span className="progress-percentage">65%</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>
        </div>

        {/* ===== NÚMEROS DE EMERGENCIA (DESTACADOS) ===== */}
        <div className="emergency-section">
          <h3 className="emergency-title">
            <span className="emergency-icon">🚨</span>
            CANALES DE EMERGENCIA
          </h3>
          
          <div className="emergency-grid">
            {/* Teléfono - destacado */}
            <div className="emergency-item highlight">
              <span className="emergency-label">📞 CENTRAL NACIONAL</span>
              <a href="tel:+54080100105" className="emergency-value large">054 200004</a>
            </div>

            {/* WhatsApp - destacado con fondo verde */}
            <div className="emergency-item whatsapp">
              <span className="emergency-label">📱 WHATSAPP</span>
              <a 
                href="https://wa.me/51958334727?text=Hola%20Proteous%2C%20necesito%20ayuda%20urgente" 
                target="_blank" 
                rel="noopener noreferrer"
                className="emergency-value large whatsapp-link"
              >
                <span className="whatsapp-icon">💬</span> 958 334 727
              </a>
            </div>

            {/* Email - full width */}
            <div className="emergency-item full-width">
              <span className="emergency-label">✉️ SOPORTE</span>
              <a href="mailto:VENTAS@PROTEOUS.PE" className="emergency-value">VENTAS@PROTEOUS.PE</a>
            </div>
          </div>
        </div>

        {/* ===== REDES SOCIALES ===== */}
        <div className="social-section">
          <span className="social-label">SÍGUENOS</span>
          <div className="social-links">
            <a
              href="http://www.facebook.com/ProteousPeru/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com/proteous.smart.security"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* ===== BOTONES ===== */}
        <div className="actions">
          <a href="mailto:VENTAS@PROTEOUS.PE" className="btn btn-primary">
            📩 Contactar soporte
          </a>
          <a href="tel:+51958334727" className="btn btn-secondary">
            📞 Llamar ahora
          </a>
        </div>

        {/* ===== FOOTER CON LIBRO DE RECLAMACIONES ===== */}
        <div className="footer">
          <div className="footer-brand">
            <span className="footer-name">PROTEOUS</span>
            <span className="footer-tag">SMART SECURITY</span>
          </div>
          
          <div className="footer-divider-line"></div>
          
          <div className="footer-bottom">
            <a 
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=KaObzKlIAUWRkoRfn6n9BvkpG9RgLYxLmw3QvS1ar3xUM1FJRDZFWUdYSEozMkhMOU02T0hGU05MQy4u"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-complaint"
            >
              <img 
                src="https://static.wixstatic.com/media/54cfad_4abd8c5e613d4b9190b2784eaa92c0d0~mv2.png/v1/crop/x_26,y_129,w_655,h_250/fill/w_83,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/libro_reclamaciones.png"
                alt="Libro de Reclamaciones"
                className="complaint-icon"
              />
              <span>Libro de Reclamaciones</span>
            </a>
            
            <span className="footer-year">© 2026 Proteous</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;