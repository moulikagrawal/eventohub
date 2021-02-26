import Events from './Events.js'
import './Navbar.css'
import logo from './bulb.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-dark navbar-expand-sm bg-dark'>
                {/* <img src={logo} className='navbar-brand logo'/> */}
                    <div className='container'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'><a className='nav-link' href='#'>Home</a></li>
                            <li className='nav-item'><a className='nav-link' href='./Events.js'>Events</a></li>
                            <li className='nav-item'><a className='nav-link' href='#'>About</a></li>
                            <li className='nav-item'><a className='nav-link' href='#'>Contact Us</a></li>
                        </ul>
                    </div>  
            </nav>
        </div>
    )
}

export default Navbar
