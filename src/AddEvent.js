import React from 'react'
import { useState } from 'react'
import './AddEvent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import axios from './axios.js'
import { Component } from 'react'

class AddEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventName: '',
            eventDate: '',
            eventTime: '',
            eventVenue: '',
            eventDesc: '',
            eventLink: ''
        }
    }

    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('/newEvent', {
            name: this.state.eventName,
            date: this.state.eventDate,
            time: this.state.eventTime,
            venue: this.state.eventVenue,
            description: this.state.eventDesc,
            link: this.state.eventLink
        })
            .then(response => {
                console.log(response, 'ok')
            })
    }

    render() {
        const { eventName, eventDate, eventTime, eventVenue, eventDesc, eventLink } = this.state;
        return (
            <div>
                <Navbar />
                <br /><br /><br /><br /><br />
                <h2 className='header'>ADD EVENT</h2>
                <div className='event-form'>
                    <form onSubmit={this.submitHandler}>
                        <fieldset>
                            <label htmlFor='event-name'>Event Name: </label>
                            <input type='text' id='name' name='eventName' value={eventName} onChange={this.changeHandler} /><br />
                            <label htmlFor='event-date'>Event Date: </label>
                            <input type='text' id='date' name='eventDate' value={eventDate} onChange={this.changeHandler} /><br />
                            <label htmlFor='event-time'>Event Time: </label>
                            <input type='text' id='time' name='eventTime' value={eventTime} onChange={this.changeHandler} /><br />
                            <label htmlFor='event-venue'>Event Venue: </label>
                            <input type='text' id='venue' name='eventVenue' value={eventVenue} onChange={this.changeHandler} /><br />
                            <label htmlFor='event-desc'>Event Description: </label>
                            <textarea id='desc' name='eventDesc' value={eventDesc} onChange={this.changeHandler} /><br />
                            <label htmlFor='event-link'>Event Link: </label>
                            <input type='text' id='link' name='eventLink' value={eventLink} onChange={this.changeHandler} /><br />
                        </fieldset>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </form>
                </div>
                <br />
                <Footer />
            </div>
        )
    }
}

export default AddEvent