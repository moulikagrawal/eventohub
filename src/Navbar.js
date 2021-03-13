import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import logo from './assets/images/logo.jpg'

function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-dark navbar-expand-sm'>
                <img src={logo} className='navbar-brand logo' />
                <div className='container'>
                    <ul className='navbar-nav'>
                        <Link className='navbar-link' to='/'><li className='nav-item'>Home</li></Link>
                        <Link className='navbar-link' to='/Events'><li className='nav-item'>Events</li></Link>
                        <Link className='navbar-link' to='/About'><li className='nav-item'>About</li></Link>
                        <Link className='navbar-link' to='/Contact'><li className='nav-item'>Contact Us</li></Link>
                        <Link className='navbar-link' to='/Login'><li className='nav-item'>Login/ Signup</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
