import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { MainContent }from './components/Main-Content'
import { Footer } from './components/footer'

export function App() {
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}
