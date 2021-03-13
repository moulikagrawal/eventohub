import React from 'react'
import './Cards.css'
import './AddEvent.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './assets/images/1.jpg'
import { Component } from 'react'
import axios from './axios.js'

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get('/getEvents')
            .then(response => {
                console.log(response, 'ok')
                this.setState({events: response.data})
            })
    }

    render () {
        const {events} = this.state
    return (
        <div>
            <h2 className='header'>EVENTS</h2>
            <div className='row d-flex justify-content-center'>
                {events.map((event) =>(
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>{event.description}</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4 className='event-head'>{event.name}</h4>
                        <p className='content'>
                            Event Date:{event.date}<br />
                            Event Time:{event.time}<br />
                            Venue:{event.venue}<br />
                            Description:{event.description}<br />
                            Link:{event.link}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
}
export default Cards
