'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    // берём стартовый язык из i18next (он же уже знает uk/en)
    const [lang, setLang] = useState(i18n.language || 'uk');

    // синхронизируем локальное состояние, если язык изменили в другом месте
    useEffect(() => {
        const onLangChanged = (lng) => setLang(lng);
        i18n.on('languageChanged', onLangChanged);
        return () => i18n.off('languageChanged', onLangChanged);
    }, [i18n]);

    const handleLangChange = (l) => {
        if (l === lang) return;          // нечего менять
        i18n.changeLanguage(l);          // переключаем i18next
        localStorage.setItem('lng', l);  // запоминаем выбор
        setLang(l);                      // обновляем кнопку
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