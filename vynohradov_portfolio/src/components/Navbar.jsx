'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';
import { FiMail, FiPhone } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import useTheme from '../hooks/useTheme';
import Contacts from "@/components/Contacts";

export default function Navbar() {
    const { t } = useTranslation('navbar');
    const { theme, toggleTheme } = useTheme();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 shadow-md transition-all duration-300 ${
                scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/70 backdrop-blur-xl'
            } text-white`}
        >
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold bg-white text-black rounded-full w-11 h-11 flex items-center justify-center">
                    {t('logo')}
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <GiHamburgerMenu size={24} />
                    </button>
                </div>

                {/* Desktop menu */}
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

                {/* Icons & CV */}
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

                    {/* CV button */}
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

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute right-0 top-0 bg-black/90 w-2/3 h-full p-6 md:hidden flex flex-col gap-5 animate-slide-in">
                    <a href="#hero" className="hover:text-purple-400 text-white">
                        {t('home')}
                    </a>
                    <a href="#about" className="hover:text-purple-400 text-white">
                        {t('about')}
                    </a>
                    <a href="#projects" className="hover:text-purple-400 text-white">
                        {t('projects')}
                    </a>
                    <a href="#contacts" className="hover:text-purple-400 text-white">
                        {t('contacts')}
                    </a>
                    <a
                        href="/Java_Developer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 text-white"
                    >
                        {t('viewCv')}
                    </a>
                </div>
            )}
        </nav>
    );
}
