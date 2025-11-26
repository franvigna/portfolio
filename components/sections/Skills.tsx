import { skills } from '@/lib/data';

export default function Skills() {
    // Agrupar skills por categoría
    const groupedSkills = {
        languages: skills.filter(s => s.category === 'languages'),
        frontend: skills.filter(s => s.category === 'frontend'),
        backend: skills.filter(s => s.category === 'backend'),
        tools: skills.filter(s => s.category === 'tools'),
    };

    const categoryNames = {
        languages: 'Lenguajes de Programación',
        frontend: 'Frontend',
        backend: 'Backend & Databases',
        tools: 'Herramientas & Metodologías',
    };

    const levelColors = {
        expert: 'bg-green-500',
        advanced: 'bg-blue-500',
        intermediate: 'bg-yellow-500',
        beginner: 'bg-gray-500',
    };

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Tecnologías & Habilidades
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Stack tecnológico con el que trabajo día a día
                    </p>
                </div>

                {/* Skills by Category */}
                <div className="max-w-6xl mx-auto space-y-12">
                    {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                        <div key={category}>
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-blue-600 rounded"></span>
                                {categoryNames[category as keyof typeof categoryNames]}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {categorySkills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                                    >
                                        {/* Skill Name */}
                                        <p className="font-medium text-gray-900 dark:text-white mb-2">
                                            {skill.name}
                                        </p>

                                        {/* Level Indicator */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${levelColors[skill.level]} transition-all duration-500 group-hover:animate-pulse`}
                                                    style={{
                                                        width:
                                                            skill.level === 'expert' ? '100%' :
                                                                skill.level === 'advanced' ? '75%' :
                                                                    skill.level === 'intermediate' ? '50%' : '25%'
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                                {skill.level === 'expert' ? 'Experto' :
                                                    skill.level === 'advanced' ? 'Avanzado' :
                                                        skill.level === 'intermediate' ? 'Intermedio' : 'Básico'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="max-w-6xl mx-auto mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Nivel de dominio:
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400">Experto - Uso diario en proyectos complejos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400">Avanzado - Experiencia sólida en proyectos reales</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400">Intermedio - Capaz de desarrollar soluciones</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        ¿Necesitas estas tecnologías en tu proyecto?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Hablemos de tu proyecto →
                    </a>
                </div>
            </div>
        </section>
    );
}