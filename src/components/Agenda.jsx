import React, { useState } from 'react';

export default function Agenda() {
  const [activeTab, setActiveTab] = useState('all');

  const getVisibilityClass = (track, block) => {
    let visible = false;
    if (block === 'always') visible = true;
    else if (block === 'summary') visible = activeTab === 'all';
    else if (block === 'detail') visible = activeTab !== 'all' && track === activeTab;
    else visible = activeTab === 'all' || track === 'all' || track === activeTab;
    return visible ? '' : 'ag-row--hidden';
  };

  return (
    <section className="section agenda" id="agenda" aria-labelledby="agendaHeading">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">03 / AGENDA</span>
          <h2 className="section-title" id="agendaHeading">Agenda</h2>
          <p className="section-subtitle">Un día completo de <span className="text-accent">aprendizaje</span> y <span className="text-lime">networking</span></p>
        </div>

        <div className="agenda-meta reveal-up">
          <span className="agenda-date-pill">
            <span className="agenda-date-dot"></span>
            21 DE ABRIL, 2026 
          </span>
        </div>

        <div className="agenda-tabs reveal-up" role="tablist" aria-label="Filtrar por track">
          <button className={`agenda-tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')} role="tab" aria-selected={activeTab === 'all'}>Todos</button>
          <button className={`agenda-tab ${activeTab === 'main' ? 'active' : ''}`} onClick={() => setActiveTab('main')} role="tab" aria-selected={activeTab === 'main'}>Main Stage</button>
          <button className={`agenda-tab ${activeTab === 'sala-a' ? 'active' : ''}`} onClick={() => setActiveTab('sala-a')} role="tab" aria-selected={activeTab === 'sala-a'}>Cloud</button>
          <button className={`agenda-tab ${activeTab === 'sala-b' ? 'active' : ''}`} onClick={() => setActiveTab('sala-b')} role="tab" aria-selected={activeTab === 'sala-b'}>Cyber</button>
          <button className={`agenda-tab ${activeTab === 'sala-c' ? 'active' : ''}`} onClick={() => setActiveTab('sala-c')} role="tab" aria-selected={activeTab === 'sala-c'}>Include</button>
        </div>

        <div className="ag-blob-wrapper">
          <div className="ag-blob ag-blob--1" aria-hidden="true"></div>
          <div className="ag-blob ag-blob--2" aria-hidden="true"></div>
          <div className="ag-blob ag-blob--3" aria-hidden="true"></div>
          <div className="ag-blob-bg" aria-hidden="true"></div>
          
          <div className="agenda-table reveal-up" role="table" aria-label="Programa del evento">
            <div className="agenda-table__head" role="row">
              <span role="columnheader">HORA</span>
              <span role="columnheader">SPEAKER</span>
              <span role="columnheader">CHARLA</span>
            </div>

            {/* Rows */}
            <div className={`ag-row ${getVisibilityClass('main', 'always')}`} role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">8:30</span>
                <span className="ag-dur">40 min</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-dash">—</span>
                <span className="ag-speaker-role">SAITC</span>
              </div>
              <div className="ag-row__talk" role="cell">Registro</div>
            </div>

            <div className={`ag-row ag-row--featured ${getVisibilityClass('main', 'always')}`} role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dot ag-dot--accent"></span>
                <span className="ag-time">9:30</span>
                <span className="ag-dur">30 min</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">SAITC · DPA</span>
                <span className="ag-speaker-role">Bienvenida</span>
              </div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell">Ceremonia de Apertura</div>
            </div>

            <div className={`ag-row ${getVisibilityClass('main', 'always')}`} role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dot ag-dot--lime"></span>
                <span className="ag-time">10:00</span>
                <span className="ag-dur">50 min</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Adrian Treviño</span>
                <span className="ag-speaker-role">AstraZeneca</span>
              </div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell">Futuro Profesional en IT: De estudiante de ITC a Arquitecto del Futuro.</div>
            </div>

            {/* ─── BLOQUE 1 — 11:00 ─── */}
            <div className={`ag-row ag-row--block ${getVisibilityClass('all', 'summary')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">11:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-block-label">BLOQUE 1</span></div>
              <div className="ag-row__talk" role="cell">
                <div className="ag-block-tracks">
                  <span className="agenda-tab-pill track-a">Cloud</span>
                  <span className="agenda-tab-pill track-b">Cyber</span>
                  <span className="agenda-tab-pill track-c">Include</span>
                  <span className="agenda-tab-pill track-main">Escenario — Ponencia de Proyectos</span>
                </div>
              </div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-a', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">11:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Vianey Elizondo / Eugenio Pérez</span><span className="ag-speaker-role">IA / Cloud</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-a" style={{marginRight:8}}>Cloud</span>El Futuro del BI: De la infraestructura tradicional a Quick Suite</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-b', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">11:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Arturo Gallart</span><span className="ag-speaker-role">Amazon Web Services (AWS)</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-b" style={{marginRight:8}}>Cyber</span>DevOps: cómo se construye y opera el software del mundo real</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-c', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">11:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Sebastian Miranda</span><span className="ag-speaker-role">Tech Speaker</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-c" style={{marginRight:8}}>Include</span>La Pirámide del Mindset en la Era de la Inteligencia Artificial (The AI Mindset Pyramid)</div>
            </div>
            <div className={`ag-row ag-row--featured ${getVisibilityClass('main', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">11:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Alumnos ITC</span><span className="ag-speaker-role">Escenario Principal</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-main" style={{marginRight:8}}>Main Stage</span>🎓 Ponencia de Proyectos — Bloque 1</div>
            </div>

            {/* ─── BLOQUE 2 — 12:00 ─── */}
            <div className={`ag-row ag-row--block ${getVisibilityClass('all', 'summary')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">12:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-block-label">BLOQUE 2</span></div>
              <div className="ag-row__talk" role="cell">
                <div className="ag-block-tracks">
                  <span className="agenda-tab-pill track-a">Cloud</span>
                  <span className="agenda-tab-pill track-b">Cyber</span>
                  <span className="agenda-tab-pill track-c">Include</span>
                </div>
              </div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-a', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">12:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Dr. Eduardo Emmanuel Rodríguez López</span><span className="ag-speaker-role">UDEM</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-a" style={{marginRight:8}}>Cloud</span>Aplicacion de Machine Learning para datos de seguimiento ocular en UX</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-b', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">12:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Eli Emmanuel Ruiz Avilés</span><span className="ag-speaker-role">ACM</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-b" style={{marginRight:8}}>Cyber</span>Mentalidad de hacker: defensa digital para la vida real</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-c', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">12:00</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Cecilia Villarreal</span><span className="ag-speaker-role">WIE</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-c" style={{marginRight:8}}>Include</span>SheCodes()</div>
            </div>

            {/* Comida & Networking */}
            <div className={`ag-row ag-row--break ${getVisibilityClass('all', 'always')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-dot ag-dot--lime"></span><span className="ag-time">13:00</span><span className="ag-dur">80 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Stands activos</span><span className="ag-speaker-role">Área de Networking</span></div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell">🍕 Comida &amp; Networking</div>
            </div>

            {/* ─── BLOQUE 3 — 14:30 ─── */}
            <div className={`ag-row ag-row--block ${getVisibilityClass('all', 'summary')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">14:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-block-label">BLOQUE 3</span></div>
              <div className="ag-row__talk" role="cell">
                <div className="ag-block-tracks">
                  <span className="agenda-tab-pill track-a">Cloud</span>
                  <span className="agenda-tab-pill track-b">Cyber</span>
                  <span className="agenda-tab-pill track-c">Include</span>
                </div>
              </div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-a', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">14:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Santiago Reyes Chávez</span><span className="ag-speaker-role">SAP</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-a" style={{marginRight:8}}>Cloud</span>Leverage Agentic AI Coding, building your own mcp server</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-b', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">14:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Pedro Arredondo</span><span className="ag-speaker-role">Accenture</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-b" style={{marginRight:8}}>Cyber</span>Extended Reality con GenAI</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-c', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">14:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Jairo De la Rosa</span><span className="ag-speaker-role">Hexaware</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-c" style={{marginRight:8}}>Include</span>Del caso de uso a la práctica profesional: buenas prácticas y vinculación con la industria</div>
            </div>

            {/* ─── BLOQUE 4 — 15:30 ─── */}
            <div className={`ag-row ag-row--block ${getVisibilityClass('all', 'summary')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">15:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-block-label">BLOQUE 4</span></div>
              <div className="ag-row__talk" role="cell">
                <div className="ag-block-tracks">
                  <span className="agenda-tab-pill track-a">Cloud</span>
                  <span className="agenda-tab-pill track-b">Cyber</span>
                  <span className="agenda-tab-pill track-c">Include</span>
                  <span className="agenda-tab-pill track-main">Escenario — Ponencia de Proyectos</span>
                </div>
              </div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-a', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">15:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Rodolfo Flores / Ramiro Patiño / Javier Ruiz</span><span className="ag-speaker-role">Snowflake</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-a" style={{marginRight:8}}>Cloud</span>Building The Enteprise AI Data Cloud</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-b', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">15:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Ivan Montes de Oca</span><span className="ag-speaker-role">SAP</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-b" style={{marginRight:8}}>Cyber</span>DevOps: Hoy y el camino adelante</div>
            </div>
            <div className={`ag-row ${getVisibilityClass('sala-c', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">15:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Erasmo Hernández</span><span className="ag-speaker-role">SAP</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-c" style={{marginRight:8}}>Include</span>¿Qué significa hacer lo correcto en los negocios? De la filosofía al impacto financiero</div>
            </div>
            <div className={`ag-row ag-row--featured ${getVisibilityClass('main', 'detail')}`} role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">15:30</span><span className="ag-dur">50 min</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Alumnos ITC</span><span className="ag-speaker-role">Escenario Principal</span></div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-main" style={{marginRight:8}}>Main Stage</span>🎓 Ponencia de Proyectos — Bloque 2</div>
            </div>

            {/* Cierre */}
            <div className={`ag-row ag-row--featured ${getVisibilityClass('all', 'always')}`} role="row">
               <div className="ag-row__time" role="cell"><span className="ag-dot ag-dot--accent"></span><span className="ag-time">16:30</span><span className="ag-dur">30 min</span></div>
               <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">SAITC</span><span className="ag-speaker-role">Cierre oficial</span></div>
               <div className="ag-row__talk ag-row__talk--bold" role="cell">🎁 Cierre &amp; Rifa de Premios</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
