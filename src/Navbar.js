import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-dark navbar-expand-sm'>
                {/* <img src={logo} className='navbar-brand logo'/> */}
                    <div className='container'>
                        <ul className='navbar-nav'>
                            <Link className='navbar-link' to='/'><li className='nav-item'>HOME</li></Link>
                            <Link className='navbar-link' to='/Events'><li className='nav-item'>EVENTS</li></Link>
                            <Link className='navbar-link' to='/About'><li className='nav-item'>ABOUT</li></Link>
                            <Link className='navbar-link' to='/Contact'><li className='nav-item'>CONTACT US</li></Link>
                        </ul>
                    </div>  
            </nav>
        </div>
    )
}

export default Navbar
