'use client';

import { useTranslation } from 'react-i18next';
import { FiDownload, FiEye } from 'react-icons/fi';
import '../i18n';


export default function About() {
    const { t, i18n } = useTranslation('about');
    const cluesoft = t('cluesoft', { returnObjects: true });
    const nestify = t('nestify', { returnObjects: true });

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-24 md:px-24 bg-transparent font-sans"
        >
            <div className="max-w-4xl text-left">
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-8 font-heading">
                    {t('title')}
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light">
                    {t('intro')}
                </p>

                <div className="space-y-14 mt-6">
                    {/* ClueSoft Solution */}
                    <JobBlock data={cluesoft} />

                    {/* Nestify UA */}
                    <JobBlock data={nestify} />
                </div>

                {/* CV buttons */}
                <div className="mt-16 flex flex-col sm:flex-row gap-4 text-center">
                    <a
                        href="/Java_Developer.pdf"
                        download
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 transition-colors duration-300 text-lg shadow-lg hover:shadow-purple-500/40"
                    >
                        <FiDownload className="text-2xl" />
                        {t('downloadCv')}
                    </a>
                    <a
                        href="/Java_Developer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 transition-colors duration-300 text-lg shadow-lg hover:shadow-purple-500/40"
                    >
                        <FiEye className="text-2xl" />
                        {t('viewCv')}
                    </a>
                </div>
            </div>
        </section>
    );
}

function JobBlock({ data }) {
    if (!data) return null;

    const { icon, position, company, bullets = [], stack } = data;

    return (
        <div className="flex items-start gap-6 group">
            <div className="bg-purple-500/10 text-purple-400 p-4 rounded-full text-3xl">
                {icon}
            </div>
            <div>
                <h4 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {position}
                </h4>
                <p className="text-lg text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                    {company}
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2 text-base">
                    {bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                    ))}
                    {stack && (
                        <li>
                            <strong>Stack:</strong> {stack}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}