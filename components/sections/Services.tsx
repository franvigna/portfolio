import { servicesPymes, personalInfo } from '@/lib/data';

export default function Services() {
    const whatsappMessage = "Hola Francisco, quiero consultar por";
    const whatsappLink = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        ¿Qué Tipo de Sitio Necesitás?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Elegí el paquete que mejor se adapte a tu negocio
                    </p>
                </div>

                {/* Services Grid */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="grid md:grid-cols-3 gap-6">
                        {servicesPymes.map((service, index) => (
                            <div
                                key={index}
                                className={`relative group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 border-2 
                                    ${service.popular
                                        ? 'border-yellow-400 dark:border-yellow-500 hover:shadow-2xl scale-105 md:scale-110'
                                        : 'border-gray-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl'
                                    }`}
                            >
                                {/* Badge "Más Elegido" */}
                                {service.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <span className="px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold shadow-lg">
                                            ⭐ Más Elegido
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>

                                {/* Price - DESTACADO */}
                                <div className="mb-4">
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                        {service.price}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {service.priceNote}
                                    </div>
                                    <div className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 dark:text-blue-400">
                                        <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span className="font-medium">{service.delivery}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                                    {service.description}
                                </p>

                                {/* Divider */}
                                <div className="border-t border-gray-200 dark:border-slate-700 my-4"></div>

                                {/* Qué incluye */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                                        ✅ Qué incluye:
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Ideal para */}
                                <div className="pt-4 border-t border-gray-200 dark:border-slate-700 mb-4">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        <strong className="text-gray-700 dark:text-gray-300">Ideal para:</strong> {service.ideal}
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href={whatsappLink + ` ${service.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${service.popular
                                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600 shadow-md hover:shadow-lg'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    Consultar este paquete
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info adicional */}
                <div className="max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl">💡</div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                                ¿No estás seguro cuál necesitás?
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                Hablemos 15 minutos por WhatsApp y te ayudo a elegir la mejor opción para tu negocio. Sin compromiso.
                            </p>
                            <a
                                href={whatsappLink + " asesoramiento"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Quiero asesoramiento gratis
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats rápidos */}
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">8+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">2-4</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Semanas</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">30d</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Soporte</div>
                    </div>
                </div>
            </div>
        </section>
    );
}