import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hackathons } from './components/Hackathons'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Intro />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
