import { servicesPymes, personalInfo } from '@/lib/data';

export default function Services() {
    const whatsappMessage = "Hola Francisco, quiero consultar por";
    const whatsappLink = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section id="services" className="services">
            <div className="services__container">
                {/* Header */}
                <div className="services__header">
                    <h2 className="services__title">
                        ¿Qué Tipo de Sitio Necesitás?
                    </h2>
                    <p className="services__subtitle">
                        Elegí el paquete que mejor se adapte a tu negocio
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services__grid-container">
                    <div className="services__grid">
                        {servicesPymes.map((service, index) => (
                            <div
                                key={index}
                                className={`service-card ${service.popular ? 'service-card--popular' : ''}`}
                            >
                                {/* Badge "Más Elegido" */}
                                {service.popular && (
                                    <div className="service-card__badge">
                                        ⭐ Más Elegido
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="service-card__icon">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="service-card__title">
                                    {service.title}
                                </h3>

                                {/* Price - DESTACADO */}
                                <div className="service-card__price-container">
                                    <div className="service-card__price">
                                        {service.price}
                                    </div>
                                    <div className="service-card__price-note">
                                        {service.priceNote}
                                    </div>
                                    <div className="service-card__delivery">
                                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span>{service.delivery}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="service-card__description">
                                    {service.description}
                                </p>

                                {/* Divider */}
                                <div className="service-card__divider"></div>

                                {/* Qué incluye */}
                                <div>
                                    <h4 className="service-card__includes-title">
                                        ✅ Qué incluye:
                                    </h4>
                                    <ul className="service-card__includes-list">
                                        {service.includes.map((item, idx) => (
                                            <li key={idx} className="service-card__includes-item">
                                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Ideal para */}
                                <div className="service-card__ideal">
                                    <strong>Ideal para:</strong> {service.ideal}
                                </div>

                                {/* CTA Button */}
                                <a
                                    href={whatsappLink + ` ${service.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`service-card__cta ${service.popular ? 'service-card__cta--popular' : ''}`}
                                >
                                    Consultar este paquete
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info adicional */}
                <div className="services__info-box">
                    <div className="services__info-content">
                        <div className="services__info-icon">💡</div>
                        <div>
                            <h4 className="services__info-title">
                                ¿No estás seguro cuál necesitás?
                            </h4>
                            <p className="services__info-text">
                                Hablemos 15 minutos por WhatsApp y te ayudo a elegir la mejor opción para tu negocio. Sin compromiso.
                            </p>
                            <a
                                href={whatsappLink + " asesoramiento"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="services__info-link"
                            >
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Quiero asesoramiento gratis
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats rápidos */}
                <div className="services__stats">
                    <div className="services__stat">
                        <div className="services__stat-value">100%</div>
                        <div className="services__stat-label">Satisfacción</div>
                    </div>
                    <div className="services__stat">
                        <div className="services__stat-value">8+</div>
                        <div className="services__stat-label">Proyectos</div>
                    </div>
                    <div className="services__stat">
                        <div className="services__stat-value">2-4</div>
                        <div className="services__stat-label">Semanas</div>
                    </div>
                    <div className="services__stat">
                        <div className="services__stat-value">30d</div>
                        <div className="services__stat-label">Soporte</div>
                    </div>
                </div>
            </div>
        </section>
    );
}