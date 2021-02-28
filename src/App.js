import React from 'react'
import './App.css'
import Navbar from './Navbar.js'
import Slider from './Slider.js'
import Intro from './Intro.js'
import Footer from './Footer.js'

function App() {
  return (
    <div>
      <Navbar />
      <br /><br /><br /><br /><br />
      <Slider />
      <br />
      <Intro />
      <Footer />
    </div>
  )
}

export default App
