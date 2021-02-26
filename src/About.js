import React from 'react'
import './About.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'


function About() {
    return (
        <div>
            <Navbar />
            <br />
            <div className='about-desc'>
                <h2>About Us</h2>
                <p>We at .... aim to connect audience to events</p>
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default About
