'use client';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const [lang, setLang] = useState('en');

    const handleLangChange = (l) => {
        setLang(l);
        // Можеш додати реальну i18n зміну мови тут
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => handleLangChange('en')}
                className={`px-2 py-1 rounded-lg text-sm font-semibold border ${
                    lang === 'en'
                        ? 'bg-purple-600 text-white border-white'
                        : 'bg-dark text-gray-400 border-transparent'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => handleLangChange('uk')}
                className={`px-2 py-1 rounded-lg text-sm font-semibold border ${
                    lang === 'uk'
                        ? 'bg-purple-600 text-white border-white'
                        : 'bg-dark text-gray-400 border-transparent'
                }`}
            >
                UK
            </button>
        </div>
    );
}