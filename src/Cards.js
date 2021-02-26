import React from 'react'
import img1 from './1.jpg'
import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Cards() {
    return (
        <div>
            <h2 className='event-header'>Events:</h2>
            <div className='row d-flex justify-content-center'>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
                <div className='event-card'>
                    <div className='event-card-front'>
                        <img src={img1} className='event-img' alt='Event'/>
                        <div className='event-desc'>
                            <p>Event Description</p>
                        </div>
                    </div>
                    <div className='event-card-rear'>
                        <h4>Event Heading</h4>
                        <p className='content'>
                            Event Date:<br />
                            Event Time:<br />
                            Venue:<br />
                            Description:<br />
                            Link:
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
