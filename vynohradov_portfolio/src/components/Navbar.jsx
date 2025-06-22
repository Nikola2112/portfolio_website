'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';
import { FiMail, FiPhone, FiHome, FiUser, FiFolder, FiSend } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import '../i18n';
import LanguageSwitcher from './LanguageSwitcher';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
    const { t } = useTranslation('navbar');
    const { theme, toggleTheme } = useTheme();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Top Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 px-6 py-4 shadow-md transition-all duration-300 ${
                    scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/70 backdrop-blur-xl'
                } text-white`}
            >
                <div className="flex justify-between items-center">
                    {/* Mobile language switcher (left) */}
                    <div className="md:hidden">
                        <LanguageSwitcher />
                    </div>

                    {/* Logo (center) */}
                    <div className="text-xl font-bold bg-white text-black rounded-full w-11 h-11 flex items-center justify-center">
                        {t('logo')}
                    </div>

                    {/* Desktop menu (right) */}
                    <div className="hidden md:flex gap-6 text-base">
                        <a href="#hero" className="hover:underline underline-offset-4">
                            {t('home')}
                        </a>
                        <a href="#about" className="hover:underline underline-offset-4">
                            {t('about')}
                        </a>
                        <a href="#projects" className="hover:underline underline-offset-4">
                            {t('projects')}
                        </a>
                        <a href="#contacts" className="hover:underline underline-offset-4">
                            {t('contacts')}
                        </a>
                    </div>

                    {/* Desktop icons & CV (right) */}
                    <div className="hidden md:flex gap-5 items-center text-xl">
                        <a href="https://github.com/Nikola2112" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-purple-400" />
                        </a>
                        <a href="https://linkedin.com/in/nikolai-vynohradov" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-purple-400" />
                        </a>
                        <a href="mailto:nikolaivynohradov@gmail.com">
                            <FiMail className="hover:text-purple-400" />
                        </a>
                        <a href="tel:+447786525317">
                            <FiPhone className="hover:text-purple-400" />
                        </a>
                        <a href="https://t.me/nick_uk_v" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="hover:text-purple-400" />
                        </a>
                        <a
                            href="/Java_Developer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm border border-purple-500 rounded-full px-4 py-1 hover:bg-purple-500 hover:text-white transition"
                        >
                            {t('viewCv')}
                        </a>
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            {/* Bottom Mobile Navbar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-gray-700 flex justify-around items-center py-2 md:hidden">
                <a href="#hero" className="flex flex-col items-center text-white hover:text-purple-400 transition">
                    <FiHome className="text-xl" />
                    <span className="text-xs">{t('home')}</span>
                </a>
                <a href="#about" className="flex flex-col items-center text-white hover:text-purple-400 transition">
                    <FiUser className="text-xl" />
                    <span className="text-xs">{t('about')}</span>
                </a>
                <a href="#projects" className="flex flex-col items-center text-white hover:text-purple-400 transition">
                    <FiFolder className="text-xl" />
                    <span className="text-xs">{t('projects')}</span>
                </a>
                <a href="#contacts" className="flex flex-col items-center text-white hover:text-purple-400 transition">
                    <FiSend className="text-xl" />
                    <span className="text-xs">{t('contacts')}</span>
                </a>
            </div>
        </>
    );
}