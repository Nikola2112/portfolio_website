'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ⬇️ Синхронно підтягуємо всі словники, щоб SSR одразу бачив тексти
import ukNavbar  from './locales/uk/navbar.json';
import enNavbar  from './locales/en/navbar.json';
import ukHero    from './locales/uk/hero.json';
import enHero    from './locales/en/hero.json';
import ukAbout   from './locales/uk/about.json';
import enAbout   from './locales/en/about.json';
import ukSkills  from './locales/uk/skills.json';
import enSkills  from './locales/en/skills.json';
import ukProjects from './locales/uk/projects.json';
import enProjects from './locales/en/projects.json';
import ukContacts from './locales/uk/contacts.json';
import enContacts from './locales/en/contacts.json';


// Мова, яку сервер віддає за замовчуванням;
// клієнт може перемикнути мову після гідрації (через LanguageSwitcher)
const SERVER_DEFAULT_LANG = 'uk';

// Ініціалізація без асинхронних бекендів і детекторів — усе відбувається синхронно
i18n
    .use(initReactI18next)
    .init({
        // усі ресурси одразу в памʼяті, тож SSR бачить переклади миттєво
        resources: {
            uk: {
                navbar: ukNavbar,
                hero:   ukHero,
                about:  ukAbout,
                skills: ukSkills,
                projects:  ukProjects,
                contacts:  ukContacts,
            },
            en: {
                navbar: enNavbar,
                hero:   enHero,
                about:  enAbout,
                skills: enSkills,
                projects:  enProjects,
                contacts:  enContacts,
            },
        },

        // простори імен, які доступні в проєкті
        ns: ['navbar', 'hero', 'about', 'skills',"projects" ,"contacts"],
        defaultNS: 'navbar',

        // стартова та fallback‑мова
        lng: SERVER_DEFAULT_LANG,
        fallbackLng: 'uk',
        supportedLngs: ['uk', 'en'],

        interpolation: { escapeValue: false },

        // важливо для SSR — ініціалізація блокує до повної готовності
        initImmediate: false,

        // вимикаємо Suspense, щоб не обгортати компоненти
        react: { useSuspense: false },
    });

export default i18n;
