import React from 'react'
import './index.css'
import {Header} from '../src/components/header/Header'
import Home from './components/home/Home'

export const App = () => {
  return (
    <>
    <Header/>

    <main className="main">
      <Home/>
    </main>
    </>
  )
}
