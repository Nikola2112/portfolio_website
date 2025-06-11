'use client';
import { FiDownload, FiEye } from 'react-icons/fi';

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-24 md:px-24 bg-transparent font-sans"
        >
            <div className="max-w-4xl text-left">
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-8 font-heading">
                    Про мене
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light">
                    Я Java-розробник із понад 2 роками досвіду створення високонавантажених, надійних додатків.
                    Маю досвід із Java, Spring, Docker, Kubernetes, AWS, PostgreSQL та CI/CD. Оптимізую бізнес-процеси,
                    інтегрую API та створюю рішення, що мають реальну цінність для користувачів і компаній.
                </p>

                <div className="space-y-14 mt-6">
                    {/* ClueSoft Solution */}
                    <div className="flex items-start gap-6 group">
                        <div className="bg-purple-500/10 text-purple-400 p-4 rounded-full text-3xl">
                            🧠
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                                Java Software Developer
                            </h4>
                            <p className="text-lg text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                                ClueSoft Solution · Червень 2024 – Березень 2025
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2 text-base">
                                <li>Оптимізував e-commerce платформу (–90% розбіжностей в інвентарі)</li>
                                <li>Розробив систему платежів і трекінгу замовлень (–35% часу, +99% точності)</li>
                                <li>Покращив UX: +25% утримання, +18% конверсія</li>
                                <li>REST API для інтеграцій: –50% downtime, +30% швидкості</li>
                                <li><strong>Stack:</strong> Java, Spring, Hibernate, PostgreSQL, AWS, Docker, Jenkins</li>
                            </ul>
                        </div>
                    </div>

                    {/* Nestify UA */}
                    <div className="flex items-start gap-6 group">
                        <div className="bg-purple-500/10 text-purple-400 p-4 rounded-full text-3xl">
                            💼
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                                Junior Java Developer
                            </h4>
                            <p className="text-lg text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                                Nestify UA · Вересень 2022 – Червень 2024
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2 text-base">
                                <li>Автоматизував роботу з даними (–80% ручної праці)</li>
                                <li>Розробив систему підписання документів (–60% часу, 100% відповідність нормам)</li>
                                <li>Нові фічі: +30% залучення, +50К відвідувачів/міс</li>
                                <li>Інтеграція зовнішніх API: +95% точності, –70% застарілих даних</li>
                                <li><strong>Stack:</strong> Java, Spring, Kafka, PostgreSQL, AWS, Keycloak, Jenkins</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Кнопки резюме */}
                <div className="mt-16 flex flex-col sm:flex-row gap-4 text-center">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 transition-colors duration-300 text-lg shadow-lg hover:shadow-purple-500/40"
                    >
                        <FiDownload className="text-2xl" />
                        Завантажити резюме
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 transition-colors duration-300 text-lg shadow-lg hover:shadow-purple-500/40"
                    >
                        <FiEye className="text-2xl" />
                        Переглянути резюме
                    </a>
                </div>
            </div>
        </section>
    );
}