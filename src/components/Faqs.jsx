import React, { useState } from 'react';

const faqData = [
  { q: '¿Cuánto cuesta el boleto y qué incluye?', a: <>El boleto tiene un costo de <strong>$100 MXN</strong> e incluye:<ul style={{marginTop:8, paddingLeft:'1.2em', display:'flex', flexDirection:'column', gap:4}}><li>🍽️ <strong>Comida y Catering</strong> del mediodía</li><li>🎤 <strong>Acceso a todas las sesiones</strong> y tracks simultáneos</li><li>🎁 <strong>Participación en la rifa de premios</strong> al cierre</li></ul></> },
  { q: '¿Quién puede asistir?', a: 'Principalmente estudiantes de ITC de UDEM, TEC de Monterrey y UANL. También hay espacio para invitados de otras instituciones.' },
  { q: '¿Necesito registrarme con anticipación?', a: 'Sí, los lugares son limitados a 250 participantes. Te recomendamos registrarte lo antes posible.' },
  { q: '¿Hay certificado de asistencia?', a: 'Esta información se confirmará próximamente. Los registrados recibirán actualizaciones por correo.' },
  { q: '¿Los talleres requieren preparación previa?', a: 'No, las sesiones no requieren conocimiento previo. Están diseñadas para todos los niveles.' },
  { q: '¿Puedo asistir solo a algunas sesiones?', a: 'Sí. Puedes moverte libremente entre las salas durante los bloques simultáneos.' },
  { q: '¿Habrá comida?', a: 'Sí, hay un bloque de comida de 1:00 a 2:20 PM con networking activo y stands empresariales.' },
  { q: '¿Puedo ir aunque no sea de UDEM?', a: 'Sí. Hay cupo para invitados de TEC y UANL, y de otras universidades de la región.' },
  { q: '🎩 ¿Qué es el Boleto Dorado?', a: <>Al igual que en la fábrica de Willy Wonka, el <strong>Boleto Dorado</strong> es el premio más especial del evento. Al registrarte, participas automáticamente en la rifa. El ganador recibirá una sorpresa que permanecerá en secreto hasta el mismísimo día del evento. Solo el elegido lo descubrirá. ✨</> }
];

export default function Faqs() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <section className="golden-ticket-section reveal-up" aria-labelledby="goldenTicketHeading">
        <div className="container">
          <div className="golden-ticket-card">
            <span className="golden-ticket-badge">✨ Premio Especial · Día ITC 2026</span>
            <img
              src="Speakers/golden_ticket.png"
              alt="Boleto Dorado Día ITC 2026"
              className="golden-ticket-img"
              loading="lazy"
            />
            <h2 className="golden-ticket-question" id="goldenTicketHeading">
              ¿Serás tú el ganador<br/>del boleto dorado?
            </h2>
            <p className="golden-ticket-sub">
              Al registrarte, participas automáticamente en la rifa del <strong style={{color:'#FFD700'}}>Boleto Dorado</strong>.
              Un premio sorpresa aguarda al ganador… algo que no olvidarás. Como en la fábrica de Willy Wonka,
              el destino del premio es un secreto — solo el elegido lo descubrirá el día del evento. 🎩
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKawtS5thfRsITdo1GixjfXJAVAwKvEn2UldyQeDGq9feR-A/viewform"
               target="_blank" rel="noopener noreferrer"
               className="btn--golden"><span>🎟️ Regístrate y participa →</span></a>
          </div>
        </div>
      </section>

      <section className="section faqs" id="faqs" aria-labelledby="faqsHeading">
        <div className="container container--narrow">
          <div className="section-header reveal-up">
            <span className="section-tag">07 / FAQs</span>
            <h2 className="section-title" id="faqsHeading">Preguntas frecuentes</h2>
            <p className="section-subtitle">Todo lo que necesitas saber antes de registrarte.</p>
          </div>
          
          <dl className="faq-list reveal-up">
            {faqData.map((faq, idx) => (
              <div className="faq-item" key={idx}>
                <dt>
                  <button 
                    className="faq-trigger" 
                    aria-expanded={activeFaq === idx} 
                    aria-controls={`faq-${idx}`}
                    onClick={() => toggleFaq(idx)}
                  >
                    {faq.q}
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                </dt>
                <dd className={`faq-answer ${activeFaq === idx ? '' : 'hidden'}`} id={`faq-${idx}`}>
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>

          <div className="faqs-cta reveal-up">
            <p>¿Tienes otra pregunta?</p>
            <a href="https://www.instagram.com/saitcudem/" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--starry" style={{display:'inline-flex', alignItems:'center', justifyContent:'center', textAlign:'center', minWidth: 200}}>
              Escríbenos →
              <div className="star-1"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-2"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-3"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-4"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-5"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-6"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
