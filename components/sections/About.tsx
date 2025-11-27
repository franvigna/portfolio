'use client';

import { experience, education } from '@/lib/data';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about__container">
                {/* Header */}
                <div className="about__header">
                    <h2 className="about__title">Sobre Mí</h2>
                    <p className="about__subtitle">
                        Mi historia, mis valores y cómo llegué hasta acá
                    </p>
                </div>

                <div className="about__content">
                    {/* Story Section */}
                    <div className="about__story">
                        <div className="about__image-wrapper">
                            <div className="about__image-container">
                                <div className="about__image">FV</div>
                                <div className="about__image-deco-1"></div>
                                <div className="about__image-deco-2"></div>
                            </div>
                        </div>

                        <div className="about__text-wrapper">
                            <span className="about__label">Mi Historia</span>
                            <h3 className="about__story-title">
                                De la Secundaria Técnica a YPF
                            </h3>

                            <div className="about__story-text">
                                <p>
                                    Empecé a programar en la secundaria técnica, donde descubrí que me apasionaba crear cosas que la gente pudiera usar.
                                    No era el típico nerd de computadoras - simplemente me gustaba resolver problemas de forma creativa.
                                </p>

                                <p>
                                    Después de recibirme como <strong>Técnico en Informática</strong>,
                                    mientras estudiaba Ingeniería en Informática en la UNLaM, conseguí mi primera pasantía en Datalyst.
                                    Ahí aprendí lo que era trabajar en equipo y con metodologías profesionales.
                                </p>

                                <p>
                                    En 2023 di el salto al freelance, donde aprendí a <strong>comunicarme
                                        con clientes reales</strong>, entender sus problemas y crear soluciones que realmente funcionen.
                                    Ese año desarrollé mi primer ecommerce que le aumentó las ventas 60% a mi cliente - y ahí supe que iba por buen camino.
                                </p>

                                <p>
                                    Hoy trabajo en <strong>YPF</strong> en proyectos corporativos
                                    con SharePoint, mientras sigo desarrollando sitios para PyMEs que quieren crecer online.
                                    Lo mejor de los dos mundos: experiencia enterprise + contacto directo con emprendedores.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="about__stats">
                                <div className="about__stat about__stat--blue">
                                    <div className="about__stat-value">2+</div>
                                    <div className="about__stat-label">Años Pro</div>
                                </div>
                                <div className="about__stat about__stat--purple">
                                    <div className="about__stat-value">8+</div>
                                    <div className="about__stat-label">Proyectos</div>
                                </div>
                                <div className="about__stat about__stat--green">
                                    <div className="about__stat-value">100%</div>
                                    <div className="about__stat-label">Satisfacción</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="about__values">
                        <h3 className="about__values-title">Cómo Trabajo</h3>

                        <div className="about__values-grid">
                            <div className="about__value-card">
                                <div className="about__value-icon">🎯</div>
                                <h4 className="about__value-title">
                                    Enfocado en Resultados
                                </h4>
                                <p className="about__value-text">
                                    No me importa solo que el código funcione - me importa que tu negocio crezca.
                                    Cada decisión técnica la tomo pensando en tus objetivos comerciales.
                                </p>
                            </div>

                            <div className="about__value-card">
                                <div className="about__value-icon">💬</div>
                                <h4 className="about__value-title">
                                    Comunicación Clara
                                </h4>
                                <p className="about__value-text">
                                    Cero jerga técnica innecesaria. Te explico todo en español claro, te muestro avances
                                    semanales y respondo rápido por WhatsApp.
                                </p>
                            </div>

                            <div className="about__value-card">
                                <div className="about__value-icon">⚡</div>
                                <h4 className="about__value-title">
                                    Entregas a Tiempo
                                </h4>
                                <p className="about__value-text">
                                    Si digo 3 semanas, son 3 semanas. Planeo bien, comunico si hay algún imprevisto,
                                    y siempre cumplo los deadlines acordados.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Experience Timeline */}
                    <div className="about__experience">
                        <h3 className="about__experience-title">Mi Trayectoria</h3>

                        <div className="about__timeline">
                            <div className="about__timeline-line"></div>

                            <div className="about__timeline-items">
                                {experience.map((exp, index) => (
                                    <div key={index} className="about__timeline-item">
                                        <div className="about__timeline-dot"></div>

                                        <div className="about__timeline-content">
                                            <div className="about__experience-card">
                                                <span className="about__experience-period">
                                                    {exp.period}
                                                </span>
                                                <h4 className="about__experience-position">
                                                    {exp.position}
                                                </h4>
                                                <p className="about__experience-company">
                                                    {exp.company}
                                                </p>
                                                <p className="about__experience-description">
                                                    {exp.description}
                                                </p>

                                                <div className="about__experience-techs">
                                                    {exp.technologies.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="about__experience-tech"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="about__education">
                        <h3 className="about__education-title">Formación</h3>

                        <div className="about__education-grid">
                            {education.map((edu, index) => (
                                <div key={index} className="about__education-card">
                                    <div className="about__education-content">
                                        <div className="about__education-icon">
                                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            </svg>
                                        </div>
                                        <div className="about__education-info">
                                            <h4 className="about__education-degree">
                                                {edu.degree}
                                            </h4>
                                            <p className="about__education-institution">
                                                {edu.institution}
                                            </p>
                                            <div className="about__education-details">
                                                <span>{edu.period}</span>
                                                {edu.progress && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="about__education-progress">
                                                            {edu.progress}
                                                        </span>
                                                    </>
                                                )}
                                                {edu.completed && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="about__education-completed">
                                                            ✓ Completado
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div className="about__cta">
                        <p className="about__cta-text">
                            ¿Querés trabajar conmigo?
                        </p>
                        <a href="#contact" className="about__cta-button">
                            Conversemos sobre tu proyecto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}