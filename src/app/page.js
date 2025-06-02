'use client';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Blog from './components/Blog'
export default function Home() {
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
  )
}
