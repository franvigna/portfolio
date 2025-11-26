'use client';

import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const whatsappMessage = "Hola Francisco, quiero consultar por un proyecto";
    const whatsappLink = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        ¿Listo para Empezar?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Elegí cómo querés contactarme
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* OPCIÓN 1: WhatsApp - PRIORITARIA */}
                    <div className="mb-8 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-2xl">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-2xl font-bold">WhatsApp</h3>
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                                        ⚡ RECOMENDADO
                                    </span>
                                </div>
                                <p className="text-green-50 mb-4 text-lg">
                                    La forma más rápida de conectar. Te respondo en minutos durante horario laboral.
                                </p>
                                <div className="space-y-2 mb-6 text-sm text-green-50">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Respuesta inmediata (horario laboral)
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Podemos compartir pantalla si es necesario
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Coordinamos llamada o videollamada fácil
                                    </div>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 shadow-lg hover:scale-105"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Abrir WhatsApp Ahora
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-slate-50 dark:bg-slate-900 text-gray-500 dark:text-gray-400">
                                o si preferís
                            </span>
                        </div>
                    </div>

                    {/* OPCIÓN 2: Formulario + Info de contacto */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info - Sidebar */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Otros Medios de Contacto
                                </h3>

                                {/* Email */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                                        <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline break-all text-sm">
                                            {personalInfo.email}
                                        </a>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            Respondo en 24-48hs
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Ubicación</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{personalInfo.location}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            Trabajo remoto con toda Argentina y LATAM
                                        </p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Redes</h4>
                                        <div className="flex gap-3">
                                            <a
                                                href={personalInfo.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                            <a
                                                href={personalInfo.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                                    💡 Tip para una respuesta rápida
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Contame qué tipo de sitio necesitás (tienda, landing, web completa) y tu presupuesto aproximado. Así puedo darte una respuesta más precisa.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Enviar Mensaje
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white resize-none text-sm"
                                        placeholder="Contame sobre tu proyecto..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                >
                                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <div className="p-3 bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-400 rounded-lg text-sm">
                                        ✅ ¡Mensaje enviado! Te respondo pronto.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-500 text-red-700 dark:text-red-400 rounded-lg text-sm">
                                        ❌ Error al enviar. Escribime directo a: {personalInfo.email}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}