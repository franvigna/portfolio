import { personalInfo } from '@/lib/data';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                    Hola, soy <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
                    {personalInfo.title}
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    {personalInfo.bio}
                </p>
                <div className="flex gap-4 justify-center">

                    <a href="#projects"
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Ver Proyectos
                    </a>

                    <a href="#contact"
                        className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </section>
    );
}