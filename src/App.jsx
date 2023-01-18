import React from 'react'
import './index.css'
import {Header} from '../src/components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'

export const App = () => {
  return (
    <>
    <Header/>

    <main className="main">
      <Home/>
      <About/>
      <Skills/>
    </main>
    </>
  )
}
