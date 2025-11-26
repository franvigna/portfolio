import { projects } from '@/lib/data';

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Proyectos Destacados
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Soluciones reales que he desarrollado para clientes y empresas
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
                        >
                            {/* Image */}
                            <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-6xl opacity-20">
                                        {project.featured && '⭐'}
                                    </div>
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Destacado
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>

                                {/* Client */}
                                {project.client && (
                                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
                                        Cliente: {project.client}
                                    </p>
                                )}

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                            Código
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            Demo
                                        </a>
                                    )}
                                    {!project.github && !project.demo && (
                                        <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                                            Proyecto bajo NDA
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        ¿Tienes un proyecto en mente?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Trabajemos juntos →
                    </a>
                </div>
            </div>
        </section>
    );
}