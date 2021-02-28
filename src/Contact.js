import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Contact() {
    return (
        <div>
            <Navbar />
            <br /><br /><br /><br/><br />
            <h2 className='header'>CONTACT US</h2>
            <div className='feedback-form'>
                <form action='https://forms.gle/X1XYMCNAzvHRxof89'>
                    <fieldset>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' name='name' required/><br />
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' name='email' required/><br />
                        <label htmlFor='mobile'>Mobile: </label>
                        <input type='tel' id='mobile' name='mobile' /><br />
                        <label htmlFor='comments'>Comments: </label>
                        <textarea id='comments' name='comments' required/>
                    </fieldset>
                    <button type='submit' action='submit' className='btn btn-success'>Submit</button>
                </form>
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default Contact
