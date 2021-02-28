import Events from './Events.js'
import './Navbar.css'
// import logo from './bulb.png'
import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-dark navbar-expand-sm'>
                {/* <img src={logo} className='navbar-brand logo'/> */}
                    <div className='container'>
                        <ul className='navbar-nav'>
                            <a className='navbar-link' href='#'><li className='nav-item'>HOME</li></a>
                            <a className='navbar-link' href='#'><li className='nav-item'>EVENTS</li></a>
                            <a className='navbar-link' href='#'><li className='nav-item'>ABOUT</li></a>
                            <a className='navbar-link' href='#'><li className='nav-item'>CONTACT US</li></a>
                        </ul>
                    </div>  
            </nav>
        </div>
    )
}

export default Navbar
