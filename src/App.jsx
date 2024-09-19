import { useState } from 'react'
import akatsuki from "./assets/images/akatsuki.png"
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
    </div>
  )

}

export default App
