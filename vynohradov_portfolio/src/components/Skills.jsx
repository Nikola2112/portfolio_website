'use client';
import { FaJava, FaDocker, FaGitAlt, FaAws, FaGithub, FaGitlab } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiKubernetes, SiJunit5, SiHibernate, SiSwagger, SiJwt, SiSpringsecurity } from 'react-icons/si';
import { PiBracketsCurly } from 'react-icons/pi';
import { BsBoxes, BsGear } from 'react-icons/bs';

export default function Skills() {
    const skills = [
        { label: 'Java 8/11/17', icon: <FaJava /> },
        { label: 'Spring / Spring Boot', icon: <SiSpring /> },
        { label: 'Hibernate', icon: <SiHibernate /> },
        { label: 'PostgreSQL', icon: <SiPostgresql /> },
        { label: 'MySQL / MongoDB', icon: <SiMysql /> },
        { label: 'Redis', icon: <SiRedis /> },
        { label: 'Docker / Kubernetes', icon: <FaDocker /> },
        { label: 'AWS', icon: <FaAws /> },
        { label: 'Jenkins / CI/CD', icon: <BsGear /> },
        { label: 'JUnit / Mockito', icon: <SiJunit5 /> },
        { label: 'Spring Security / OAuth2 / JWT', icon: <SiSpringsecurity /> },
        { label: 'Git / GitHub / GitLab', icon: <FaGitAlt /> },
        { label: 'Microservices / MVC', icon: <BsBoxes /> },
        { label: 'REST / SOAP / Swagger', icon: <SiSwagger /> },
    ];

    return (
        <section id="skills" className="py-20 px-6 md:px-24 bg-[#151530] rounded-xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Технології</h2>
                <p className="text-gray-400 text-lg font-light">
                    Мій стек включає інструменти, що дозволяють створювати безпечні та масштабовані серверні рішення.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center bg-white/5 p-4 rounded-lg hover:bg-purple-800/10 transition"
                    >
                        <div className="text-purple-400 text-3xl mb-2">{skill.icon}</div>
                        <span className="text-white text-sm text-center">{skill.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}