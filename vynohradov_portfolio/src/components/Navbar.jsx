'use client';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';
import { FiMail, FiPhone } from 'react-icons/fi';
import { BsMoon, BsSun } from 'react-icons/bs';
import LanguageSwitcher from './LanguageSwitcher';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark text-white px-6 py-3 shadow-md flex justify-between items-center">

            {/* Меню */}
            <div className="flex gap-6 text-sm">
                <a href="#hero" className="hover:underline underline-offset-4">Home</a>
                <a href="#about" className="hover:underline underline-offset-4">About</a>
                <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
                <a href="#blog" className="hover:underline underline-offset-4">Articles</a>
            </div>

            {/* Логотип */}
            <div className="text-xl font-bold bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                NV
            </div>

            {/* Іконки */}
            <div className="flex gap-4 items-center text-lg">
                <a href="https://github.com" target="_blank"><FaGithub className="hover:text-neon" /></a>
                <a href="https://linkedin.com" target="_blank"><FaLinkedin className="hover:text-neon" /></a>
                <a href="mailto:example@gmail.com"><FiMail className="hover:text-neon" /></a>
                <a href="tel:+380971234567"><FiPhone className="hover:text-neon" /></a>
                <a href="https://t.me/vynohradov" target="_blank"><FaTelegram className="hover:text-neon" /></a>



                <LanguageSwitcher />
            </div>
        </nav>
    );
}