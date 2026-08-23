import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from "./components/Projects"
import Contact from './components/contact'
import Footer from "./components/Footer"
import SectionDivider from "./components/SectionDivider"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
