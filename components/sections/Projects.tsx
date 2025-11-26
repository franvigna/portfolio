import { projects, personalInfo } from '@/lib/data';

export default function Projects() {
    const whatsappMessage = "Hola Francisco, vi tu portfolio y quiero consultar por un proyecto similar";
    const whatsappLink = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    // Separar proyectos destacados primero
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Trabajos Reales
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Proyectos que generan resultados para mis clientes
                    </p>
                </div>

                {/* Proyectos Destacados */}
                {featuredProjects.length > 0 && (
                    <div className="mb-12">
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {featuredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-400 dark:border-yellow-500"
                                >
                                    {/* Image Placeholder con gradiente */}
                                    <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-white text-7xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                                                {'🚀'}
                                            </div>
                                        </div>

                                        {/* Badge destacado */}
                                        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                            ⭐ Destacado
                                        </div>

                                        {/* Resultado si existe */}
                                        {project.result && (
                                            <div className="absolute bottom-4 left-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold text-center shadow-lg">
                                                📈 {project.result}
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
                                                📍 {project.client}
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
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                                                >
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                    </svg>
                                                    Ver Demo
                                                </a>
                                            )}
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
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Otros Proyectos */}
                {otherProjects.length > 0 && (
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Otros Proyectos
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {otherProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500"
                                >
                                    {/* Image Placeholder */}
                                    <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-white text-6xl opacity-20">
                                                {project.projectType === 'corporativo' ? '🏢' : '💼'}
                                            </div>
                                        </div>

                                        {/* Tag de tipo */}
                                        <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                            {project.projectType === 'corporativo' ? 'Enterprise' : 'PyME'}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h3>

                                        {project.client && (
                                            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
                                                📍 {project.client}
                                            </p>
                                        )}

                                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                                            {project.demo ? (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                                                >
                                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                    </svg>
                                                    Ver Demo
                                                </a>
                                            ) : (
                                                <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                                                    🔒 Proyecto confidencial (NDA)
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Final - Más grande y destacado */}
                <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4">
                        ¿Tu Proyecto es el Siguiente?
                    </h3>
                    <p className="text-lg mb-6 text-blue-100">
                        Conversemos sin compromiso. Te cuento cómo puedo ayudarte y te paso un presupuesto claro.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hablemos por WhatsApp
                        </a>
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            Ver Paquetes y Precios
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-blue-100">
                        ✅ Primera consulta gratis • ✅ Presupuesto en 24-48hs • ✅ Sin compromiso
                    </p>
                </div>
            </div>
        </section>
    );
}