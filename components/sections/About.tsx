'use client';

import { experience, education } from '@/lib/data';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Sobre Mí
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Mi historia, mis valores y cómo llegué hasta acá
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Story Section - Con imagen */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        {/* Imagen/Avatar */}
                        <div className="order-2 md:order-1">
                            <div className="relative">
                                {/* Placeholder por ahora - reemplazar con tu foto */}
                                <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="w-full h-full flex items-center justify-center text-white text-8xl font-bold">
                                        FV
                                    </div>
                                </div>
                                {/* Decoración */}
                                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-400 rounded-2xl -z-10"></div>
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full -z-10"></div>
                            </div>
                        </div>

                        {/* Tu Historia */}
                        <div className="order-1 md:order-2">
                            <span className="text-blue-600 dark:text-blue-400 font-semibold mb-2 block">
                                Mi Historia
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                De la Secundaria Técnica a YPF
                            </h3>

                            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                <p>
                                    Empecé a programar en la secundaria técnica, donde descubrí que me apasionaba crear cosas que la gente pudiera usar.
                                    No era el típico nerd de computadoras - simplemente me gustaba resolver problemas de forma creativa.
                                </p>

                                <p>
                                    Después de recibirme como <strong className="text-gray-900 dark:text-white">Técnico en Informática</strong>,
                                    mientras estudiaba Ingeniería en Informática en la UNLaM, conseguí mi primera pasantía en Datalyst.
                                    Ahí aprendí lo que era trabajar en equipo y con metodologías profesionales.
                                </p>

                                <p>
                                    En 2023 di el salto al freelance, donde aprendí a <strong className="text-gray-900 dark:text-white">comunicarme
                                        con clientes reales</strong>, entender sus problemas y crear soluciones que realmente funcionen.
                                    Ese año desarrollé mi primer ecommerce que le aumentó las ventas 60% a mi cliente - y ahí supe que iba por buen camino.
                                </p>

                                <p>
                                    Hoy trabajo en <strong className="text-gray-900 dark:text-white">YPF</strong> en proyectos corporativos
                                    con SharePoint, mientras sigo desarrollando sitios para PyMEs que quieren crecer online.
                                    Lo mejor de los dos mundos: experiencia enterprise + contacto directo con emprendedores.
                                </p>
                            </div>

                            {/* Stats personales */}
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">Años Pro</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">8+</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">Proyectos</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">Satisfacción</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mis Valores */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Cómo Trabajo
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                                <div className="text-4xl mb-4">🎯</div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Enfocado en Resultados
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    No me importa solo que el código funcione - me importa que tu negocio crezca.
                                    Cada decisión técnica la tomo pensando en tus objetivos comerciales.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                                <div className="text-4xl mb-4">💬</div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Comunicación Clara
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Cero jerga técnica innecesaria. Te explico todo en español claro, te muestro avances
                                    semanales y respondo rápido por WhatsApp.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                                <div className="text-4xl mb-4">⚡</div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Entregas a Tiempo
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Si digo 3 semanas, son 3 semanas. Planeo bien, comunico si hay algún imprevisto,
                                    y siempre cumplo los deadlines acordados.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Experiencia Timeline */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Mi Trayectoria
                        </h3>

                        <div className="relative">
                            {/* Línea vertical */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-slate-700"></div>

                            <div className="space-y-12">
                                {experience.map((exp, index) => (
                                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}>
                                        {/* Punto en la línea */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800"></div>

                                        {/* Contenido */}
                                        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                                            }`}>
                                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                                                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                                                    {exp.period}
                                                </span>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                                                    {exp.position}
                                                </h4>
                                                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                                    {exp.company}
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                    {exp.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2 justify-start">
                                                    {exp.technologies.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
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

                    {/* Educación */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            Formación
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                {edu.institution}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span>{edu.period}</span>
                                                {edu.progress && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                                                            {edu.progress}
                                                        </span>
                                                    </>
                                                )}
                                                {edu.completed && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="text-green-600 dark:text-green-400 font-medium">
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
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                            ¿Querés trabajar conmigo?
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:scale-105"
                        >
                            Conversemos sobre tu proyecto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}