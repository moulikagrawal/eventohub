import React from 'react'
import Navbar from './Navbar.js'
import Cards from './Cards.js'
import Footer from './Footer.js'
import { Component } from 'react'
import axios from 'axios'

function Events() {

    return (
            <div>
                <Navbar />
                <br /><br /><br /><br /><br />
                <Cards />
                <br />
                <Footer />
            </div>
        )
    }

export default Events
