'use client';
import { useTranslation } from 'next-i18next';

export default function Hero() {
    const { t } = useTranslation();
    return (
        <section id="hero" className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold text-neon">{t('hero.title')}</h1>
            <p className="mt-4 max-w-xl">{t('hero.description')}</p>
        </section>
    );
}