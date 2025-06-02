import { Navbar, Hero, About, Skills, Projects, Contacts, Blog } from '../components';
import { appWithTranslation } from 'next-i18next';

function Home() {
    return (
        <main className="bg-dark text-white">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contacts />
            <Blog />
        </main>
    );
}

export default appWithTranslation(Home);