import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div>
            <footer>
                <div className='footer-top'>
                    {/* <img src={logo} className='footer-img' alt='' /> */}
                    <div className='quick-access'>
                        <p className='title'>Quick Access</p>
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/Events'><li>Events</li></Link>
                            <Link to='/About'><li>About</li></Link>
                            <Link to='/Contact'><li>Contact Us</li></Link>
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
