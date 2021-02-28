import React from 'react'
import './Footer.css'
import logo from './bulb.png'

function Footer() {
    return (
        <div>
            <footer>
                <div className='footer-top'>
                    <img src={logo} className='footer-img' alt='' />
                    <div className='quick-access'>
                        <p className='title'>Quick Access</p>
                        <ul>    
                            <li>Home</li>
                            <li>Events</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>Conceptualised and Created by @Moulik</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
