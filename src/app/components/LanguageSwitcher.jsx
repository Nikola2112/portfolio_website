'use client';
import { useTranslation } from 'next-i18next';
'use client';
export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    return (
        <div className="flex space-x-2">
            <button onClick={() => i18n.changeLanguage('uk')} className={i18n.language === 'uk' ? 'text-neon' : ''}>UK</button>
            <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'text-neon' : ''}>EN</button>
        </div>
    );
}