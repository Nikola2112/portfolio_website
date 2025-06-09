import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'


export default function Home() {
  return (
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
  )
}
