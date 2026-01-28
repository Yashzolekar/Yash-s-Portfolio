
import './index.css'
import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Project from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

function App() {
  
  return (
    <>
    <Navbar/>
    <Hero />
    <About />
    <Skills/>
    <Project/>
    <Contact />
    <Footer/>
    </>
  )
}

export default App
