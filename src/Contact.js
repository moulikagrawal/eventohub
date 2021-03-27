import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import axios from './axios.js'
import { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: '',
            comments: ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('/contact', {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            comments: this.state.comments
        })
            .then(response => {
                console.log(response, 'ok')
            })
            
        document.getElementById("confirmation").innerHTML = 'Submitted'
    }

    render() {
        const { name, email, mobile, comments } = this.state;
    return (
        <div>
            <Navbar />
            <br /><br /><br /><br/><br />
            <h2 className='header'>CONTACT US</h2>
            <p id='confirmation'></p>
            <div className='feedback-form'>
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' name='name' value={name} onChange={this.changeHandler} required/><br />
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' name='email' value={email} onChange={this.changeHandler} required/><br />
                        <label htmlFor='mobile'>Mobile: </label>
                        <input type='tel' id='mobile' name='mobile' value={mobile} onChange={this.changeHandler} /><br />
                        <label htmlFor='comments'>Comments: </label>
                        <textarea id='comments' name='comments' value={comments} onChange={this.changeHandler} required/>
                    </fieldset>
                    <button type='submit' action='submit' className='btn btn-success'>Submit</button>
                </form>
            </div>
            <br />
            <Footer />
        </div>
    )
    }
}

export default Contact
