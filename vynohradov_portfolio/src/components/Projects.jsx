'use client';

import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import img from '@/images/img.png';
import img1 from '@/images/img_1.png';
import img2 from '@/images/img_2.png';
import img3 from '@/images/img_3.png';
import img4 from '@/images/img_4.png';
import img5 from '@/images/img_5.png';
import img6 from '@/images/img_6.png';
import img7 from '@/images/img_7.png';
import img8 from '@/images/img_8.png';

export default function Projects() {
    const { t } = useTranslation('projects');

    const projects = [
        {
            title: t('warehouse.title'),
            github: 'https://github.com/Nikola2112/WareHouseApp',
            github2: 'https://github.com/Nikola2112/ServerWarehouse',
            tech: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'REST API'],
            desc: t('warehouse.desc'),
            image: img,
            githubLabels: ['Frontend', 'Backend'],
        },
        {
            title: t('db.title'),
            github: 'https://github.com/Nikola2112/db-team-project',
            tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
            desc: t('db.desc'),
            image: img1,
            githubLabels: ['Fullstack'],
        },
        {
            title: t('kube.title'),
            github: 'https://github.com/Nikola2112/kube-essential',
            tech: ['Kubernetes', 'Docker', 'Helm'],
            desc: t('kube.desc'),
            image: img7,
            githubLabels: ['DevOps'],
        },
        {
            title: t('sales.title'),
            github: 'https://github.com/Nikola2112/sales-platform-DevOps',
            tech: ['Docker', 'Jenkins', 'Kubernetes', 'CI/CD'],
            desc: t('sales.desc'),
            image: img8,
            githubLabels: ['DevOps'],
        },
        {
            title: t('watch.title'),
            github: 'https://github.com/Nikola2112/watchstore-DevOps',
            tech: ['Docker', 'Kubernetes', 'Grafana', 'Prometheus'],
            desc: t('watch.desc'),
            image: img2,
            githubLabels: ['DevOps'],
        },
        {
            title: t('bot.title'),
            github: 'https://github.com/Nikola2112/telegrambot',
            tech: ['Java', 'Telegram API', 'Spring Boot'],
            desc: t('bot.desc'),
            image: img6,
            githubLabels: ['Backend'],
        },
        {
            title: t('currency.title'),
            github: 'https://github.com/Nikola2112/telegram-bot-currency-project',
            tech: ['Java', 'Spring Boot', 'REST API'],
            desc: t('currency.desc'),
            image: img4,
            githubLabels: ['Backend'],
        },
        {
            title: t('short.title'),
            github: 'https://github.com/Nikola2112/short-url-project',
            tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
            desc: t('short.desc'),
            image: img5,
            githubLabels: ['Backend'],
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 md:px-24 bg-[#101030]">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t('title')}
                </h2>
                <p className="text-gray-400 text-lg font-light">{t('intro')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white/5 p-8 rounded-xl">
                        <div className="w-full mb-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="rounded-md w-full object-cover"
                                placeholder="blur"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 text-base mb-4">{project.desc}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-sm bg-purple-800/20 text-purple-300 px-3 py-1 rounded"
                                >
                  {tech}
                </span>
                            ))}
                        </div>

                        <div className="flex gap-6 text-base font-medium">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:underline flex items-center gap-2"
                            >
                                <FiExternalLink className="text-lg" />
                                {project.github2 ? 'Frontend' : 'GitHub'}
                            </a>

                            {project.github2 && (
                                <a
                                    href={project.github2}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-400 hover:underline flex items-center gap-2"
                                >
                                    <FiExternalLink className="text-lg" /> Backend
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
