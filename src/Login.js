import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Login() {
    return (
        <div>
            <Navbar />
            <br /><br /><br /><br/><br />
            <h2 className='header'>LOGIN</h2>
            <div className='login-form'>
                <form action=''>
                    <fieldset>
                        <label htmlFor='UserId'>User ID: </label>
                        <input type='text' id='UserId' name='UserId' required/><br />
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password' name='password' required/><br />
                    </fieldset>
                    <button type='submit' action='submit' className='btn btn-success'>Login</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login
