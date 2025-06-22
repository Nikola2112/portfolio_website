'use client';

import { useTranslation } from 'react-i18next';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import '../i18n';

export default function Contacts() {
    const { t } = useTranslation('contacts');

    const links = [
        {
            icon: <FiMail />,
            label: t('email.label'),
            href: 'mailto:nikolaivynohradov@gmail.com',
            text: 'nikolaivynohradov@gmail.com',
        },
        {
            icon: <FiGithub />,
            label: 'GitHub', // название сервиса редко переводят, оставляем как есть
            href: 'https://github.com/Nikola2112',
            text: 'github.com/Nikola2112',
        },
        {
            icon: <FiLinkedin />,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/nikolai-vynohradov/',
            text: 'linkedin.com/in/nikolai-vynohradov',
        },
        {
            icon: <FiSend />,
            label: 'Telegram',
            href: 'https://t.me/nick_uk_v',
            text: '@nick_uk_v',
        },
    ];

    return (
        <footer className="py-24 px-6 md:px-24 bg-[#0f0f25] text-white">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h2>
                <p className="text-gray-400 text-lg font-light mb-10">{t('intro')}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {links.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-br from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 transition-transform transform hover:-translate-y-1 hover:shadow-2xl p-6 rounded-xl flex items-center gap-4 text-white"
                        >
                            <div className="text-3xl">{item.icon}</div>
                            <div className="text-left">
                                <p className="font-semibold text-lg">{item.label}</p>
                                <p className="text-sm text-gray-300">{item.text}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <p className="mt-16 text-sm text-gray-500">
                    &copy; {t('copyright')} {new Date().getFullYear()}.
                </p>
            </div>
        </footer>
    );
}