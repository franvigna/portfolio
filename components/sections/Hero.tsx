import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            {/* Efectos de fondo */}
            <div className="hero__bg-grid"></div>
            <div className="hero__bg-blur-1"></div>
            <div className="hero__bg-blur-2"></div>

            <div className="hero__container">
                <div className="hero__content">
                    {/* Badge disponibilidad */}
                    <div className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Disponible para nuevos proyectos
                    </div>

                    {/* Título */}
                    <h1 className="hero__title">
                        Hola, soy Francisco<br />
                        <span className="hero__title-gradient">
                            Desarrollador Web Full Stack
                        </span>
                    </h1>

                    {/* Subtítulo */}
                    <p className="hero__subtitle">
                        Creo sitios web que hacen crecer negocios. Trabajo en YPF y ayudo a PyMEs a tener presencia online profesional.
                    </p>

                    {/* CTAs principales */}
                    <div className="hero__ctas">
                        <Link href="#about" className="hero__cta-primary">
                            Conocer más sobre mí
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </Link>
                        <Link href="#projects" className="hero__cta-secondary">
                            Ver Mis Trabajos
                        </Link>
                    </div>

                    {/* Value Props */}
                    <div className="hero__value-props">
                        {personalInfo.valueProps.map((prop, index) => (
                            <div key={index} className="hero__value-prop">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>{prop}</span>
                            </div>
                        ))}
                    </div>

                    {/* Social proof */}
                    <div className="hero__social-proof">
                        <div className="hero__avatars">
                            <div className="hero__avatar">CA</div>
                            <div className="hero__avatar">HC</div>
                            <div className="hero__avatar">MA</div>
                        </div>
                        <span>8+ clientes satisfechos</span>
                    </div>

                    {/* Scroll indicator */}
                    <div className="hero__scroll">
                        <Link href="#services">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}