import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Profiles from './components/Profiles'
import Honors from './components/Honors'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const THEMES = ['modern', 'light', 'dark']

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'modern'
    }
    return 'modern'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'modern')
    if (theme !== 'light') root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => {
      const idx = THEMES.indexOf(t)
      return THEMES[(idx + 1) % THEMES.length]
    })
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Experience />
        <Profiles />
        <Projects />
        <Skills />
        <Honors />
        <Publications />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
