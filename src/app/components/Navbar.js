'use client';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    return (
        <nav className="flex justify-between items-center p-4 text-neon">
            <div className="text-lg font-bold">UM</div>
            <div className="space-x-4">
                <Link href="#about">{t('navbar.about')}</Link>
                <Link href="#skills">{t('navbar.skills')}</Link>
                <Link href="#projects">{t('navbar.projects')}</Link>
                <Link href="#contacts">{t('navbar.contacts')}</Link>
                <Link href="#blog">{t('navbar.blog')}</Link>
                <button onClick={() => i18n.changeLanguage('uk')} className="ml-4">UK</button>
                <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            </div>
        </nav>
    );
}