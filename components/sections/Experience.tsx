import { experience } from '@/lib/data';

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Experiencia Profesional
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Empresas y proyectos en los que he trabajado
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 pb-12 border-l-2 border-blue-500 last:pb-0">
                            {/* Timeline dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-50 dark:border-slate-900"></div>

                            {/* Content Card */}
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                            {exp.position}
                                        </h3>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                                            {exp.company}
                                            {exp.client && (
                                                <span className="text-gray-600 dark:text-gray-400"> • Cliente: {exp.client}</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Location */}
                                {exp.location && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        {exp.location}
                                    </p>
                                )}

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Logros destacados:
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Download CV */}
                <div className="text-center mt-16">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Descargar CV completo
                    </a>
                </div>
            </div>
        </section>
    );
}