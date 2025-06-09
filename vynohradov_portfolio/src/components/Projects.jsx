'use client';

import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import img from '@/images/img.png';
import img1 from '@/images/img_1.png';
import img2 from '@/images/img_2.png';
import img3 from '@/images/img_3.png';
import img4 from '@/images/img_4.png';
import img5 from '@/images/img_5.png';
import img6 from '@/images/img_6.png';
import img7 from '@/images/img_7.png';
import img8 from '@/images/img_8.png';

const projects = [
    {
        title: 'WareHouse',
        github: 'https://github.com/Nikola2112/WareHouseApp',
        github2: 'https://github.com/Nikola2112/ServerWarehouse',
        tech: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'REST API'],
        desc: 'Інвентарна система для управління складом. Два репозиторії: фронтенд і бекенд, реалізовано автентифікацію, управління товарами та звіти.',
        image: img,
        githubLabels: ['Frontend', 'Backend'],
    },
    {
        title: 'DB Team Project',
        github: 'https://github.com/Nikola2112/db-team-project',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
        desc: 'Командний проєкт: система для збереження, аналізу та фільтрації даних з UI та авторизацією.',
        image: img1,
        githubLabels: ['Fullstack'],
    },
    {
        title: 'Kube Essential',
        github: 'https://github.com/Nikola2112/kube-essential',
        tech: ['Kubernetes', 'Docker', 'Helm'],
        desc: 'Збірка YAML-шаблонів, хелм-чартів та базових скриптів для розгортання додатків у Kubernetes-кластерах.',
        image: img7,
        githubLabels: ['DevOps'],
    },
    {
        title: 'Sales Platform DevOps',
        github: 'https://github.com/Nikola2112/sales-platform-DevOps',
        tech: ['Docker', 'Jenkins', 'Kubernetes', 'CI/CD'],
        desc: 'DevOps-інфраструктура для платформи продажів із CI/CD, логуванням та моніторингом.',
        image: img8,
        githubLabels: ['DevOps'],
    },
    {
        title: 'WatchStore DevOps',
        github: 'https://github.com/Nikola2112/watchstore-DevOps',
        tech: ['Docker', 'Kubernetes', 'Grafana', 'Prometheus'],
        desc: 'Автоматизація розгортання для магазину годинників з повним моніторингом та масштабуванням.',
        image: img2,
        githubLabels: ['DevOps'],
    },
    {
        title: 'Telegram Bot',
        github: 'https://github.com/Nikola2112/telegrambot',
        tech: ['Java', 'Telegram API', 'Spring Boot'],
        desc: 'Телеграм-бот для обробки запитів, повідомлень, інтерфейсів адміністрування.',
        image: img6,
        githubLabels: ['Backend'],
    },
    {
        title: 'Telegram Bot Currency',
        github: 'https://github.com/Nikola2112/telegram-bot-currency-project',
        tech: ['Java', 'Spring Boot', 'REST API'],
        desc: 'Бот для перегляду актуального курсу валют з можливістю підписки та повідомлень.',
        image: img4,
        githubLabels: ['Backend'],
    },
    {
        title: 'Short URL Project',
        github: 'https://github.com/Nikola2112/short-url-project',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
        desc: 'Сервіс скорочення посилань із підтримкою редиректу та статистики.',
        image: img5,
        githubLabels: ['Backend'],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 md:px-24 bg-[#101030]">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Портфоліо</h2>
                <p className="text-gray-400 text-lg font-light">
                    Добірка pet-проєктів, що демонструють мій стек, практичні навички та підхід до розробки.
                </p>
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
                                    <FiExternalLink className="text-lg" />
                                    Backend
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}