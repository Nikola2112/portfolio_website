'use client';

import { useTranslation } from 'react-i18next';
import {
    FaJava,
    FaDocker,
    FaGitAlt,
    FaAws,
    FaGithub,
    FaGitlab,
} from 'react-icons/fa';
import {
    SiSpring,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiKubernetes,
    SiJunit5,
    SiHibernate,
    SiSwagger,
    SiJwt,
    SiSpringsecurity,
} from 'react-icons/si';
import { PiBracketsCurly } from 'react-icons/pi';
import { BsBoxes, BsGear } from 'react-icons/bs';

export default function Skills() {
    const { t } = useTranslation('skills');

    const skills = [
        { label: t('java'), icon: <FaJava /> },
        { label: t('spring'), icon: <SiSpring /> },
        { label: t('hibernate'), icon: <SiHibernate /> },
        { label: t('postgres'), icon: <SiPostgresql /> },
        { label: t('mysqlMongo'), icon: <SiMysql /> },
        { label: t('redis'), icon: <SiRedis /> },
        { label: t('dockerK8s'), icon: <FaDocker /> },
        { label: t('aws'), icon: <FaAws /> },
        { label: t('jenkins'), icon: <BsGear /> },
        { label: t('junit'), icon: <SiJunit5 /> },
        { label: t('security'), icon: <SiSpringsecurity /> },
        { label: t('git'), icon: <FaGitAlt /> },
        { label: t('microservices'), icon: <BsBoxes /> },
        { label: t('restSwagger'), icon: <SiSwagger /> },
    ];

    return (
        <section id="skills" className="py-20 px-6 md:px-24 bg-[#151530] rounded-xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t('title')}
                </h2>
                <p className="text-gray-400 text-lg font-light">
                    {t('intro')}
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
