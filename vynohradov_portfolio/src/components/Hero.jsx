'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import img from '@/images/Sofia.jpeg'; // заміни на твоє фото

export default function Hero() {
    const fullText = 'Java Backend Developer';
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-24 py-24"
        >
            {/* Текстова частина */}
            <div className="w-full md:w-1/2 text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                    Nikolay Vynohradov
                </h1>

                <h2 className="text-2xl md:text-3xl text-purple-400 font-medium mb-6">
                    <span className="whitespace-nowrap border-r-2 border-purple-400 animate-pulse pr-1">
                        {displayedText}
                    </span>
                </h2>

                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8">
                    Ласкаво прошу до мого портфоліо! Я Java-розробник, який не боїться складних викликів. Створюю безпечні, продуктивні та функціональні сервіси й додатки. Постійно навчаюся, вдосконалюю свої навички та впроваджую сучасні технології.
                </p>

                <div className="flex gap-4">
                    <a href="https://github.com/Nikola2112" target="_blank" rel="noreferrer" className="group bg-[#141323] p-4 rounded-full hover:bg-purple-500/10 transition">
                        <FaGithub className="text-purple-400 text-2xl group-hover:text-white transition" />
                    </a>
                    <a href="https://linkedin.com/in/nikolai-vynohradov" target="_blank" rel="noreferrer" className="group bg-[#141323] p-4 rounded-full hover:bg-purple-500/10 transition">
                        <FaLinkedin className="text-purple-400 text-2xl group-hover:text-white transition" />
                    </a>
                    <a href="https://t.me/vynohradov" target="_blank" rel="noreferrer" className="group bg-[#141323] p-4 rounded-full hover:bg-purple-500/10 transition">
                        <FaTelegramPlane className="text-purple-400 text-2xl group-hover:text-white transition" />
                    </a>
                </div>
            </div>

            {/* Фото */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Image
                    src={img}
                    alt="Nikolay Vynohradov"
                    width={400}
                    height={400}
                    className="rounded-full object-cover shadow-xl w-80 h-80 md:w-[400px] md:h-[400px]"
                    priority
                />
            </div>
        </section>
    );
}