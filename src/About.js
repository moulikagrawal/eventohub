import React from 'react'
import './About.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Moulik from './assets/images/moulik.jpg'
import {IconButton} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'

function About() {
    return (
        <div>
            <Navbar />
            <br /><br /><br /><br /><br />
            <h2 className='header'>ABOUT US</h2>
            <div className='row d-flex justify-content-center'>
                <div className='flip-card'>
                    <div className='flip-card-front'>
                        <img src={Moulik} class='about-img' alt="about-img" />
                        <h4 className='name'>Moulik Agrawal</h4>
                    </div>
                    <div className='flip-card-rear'>
                        <div className='bio'>
                            <h2>Moulik Agrawal</h2>
                            <h4>Full Stack Web Developer</h4>
                            <br />
                            <p>An observant and keen learner currently pursuing B.Tech in CSE and looking out for opportunities in Full Stack Web Developement.</p><br /><br />
                            <IconButton><a href="https://www.linkedin.com/in/moulik-agrawal/" target="_blank"><LinkedInIcon style={{ fontSize: 50 }}/></a></IconButton>
                            <IconButton><a href="https://github.com/moulikagrawal" target="_blank"><GitHubIcon style={{ fontSize: 50 }}/></a></IconButton>
                            <IconButton><a href="https://www.instagram.com/agrawal_moulik/" target="_blank"><InstagramIcon style={{ fontSize: 50 }}/></a></IconButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-desc'>
                <p>We at <strong>Event Easy</strong> aim to connect audience to the events they like.</p>
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default About
