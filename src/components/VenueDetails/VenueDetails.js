import React, { Component } from 'react';
import VenueGeneral from './General/General';
import VenueEvents from './Events/Events';

class VenueDetails extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Venue Details Component</h1>
                </div>
                <div>
                    <VenueGeneral />
                </div>
                <div>
                    <VenueEvents />
                </div>
            </>
        )
    }
}

export default VenueDetails;