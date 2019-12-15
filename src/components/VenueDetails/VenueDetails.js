import React, { Component } from 'react';
import VenueGeneral from './General/General';
import VenueEvents from './Events/Events';
import './VenueDetails.css';

class VenueDetails extends Component {
    render() {
        return (
            <>
            <div className="header">
                    <h1>Venue Details Component</h1>
                </div>
            <div className="container">
                <div className="mainWindow">
                    <div className="mainInfo">
                        <p>Area for venue name + address and primary contact info</p>
                    </div>
                    <div className="generalTab">
                        General
                    </div>
                    <div className="eventsTab">
                        Events
                    </div>
                    <div className="tabWindow">
                        <VenueEvents />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default VenueDetails;