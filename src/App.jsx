import React from 'react'
import './index.css'
import {Header} from '../src/components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

export const App = () => {
  return (
    <>
    <Header/>

    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}
