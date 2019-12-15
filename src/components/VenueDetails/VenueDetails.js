import React, { Component } from 'react';
import VenueGeneral from './General/General';
import VenueEvents from './Events/Events';
import './VenueDetails.css';

class VenueDetails extends Component {

    state = {
        general: true,
        events: false,
    }

    handleGeneralTabClick = () => {
        this.setState({
            general: true,
            events: false,
        });
    }

    handleEventsTabClick = () => {
        this.setState({
            general: false,
            events: true,
        });
    }

    render() {
        return (
            <>
                <div className="header">
                    <h1>Venue Details Component</h1>
                </div>
                <div className="mainWindow">
                    <div className="mainInfo">
                        <p>Area for venue name + address and primary contact info</p>
                    </div>
                    <div className="generalTab" onClick={this.handleGeneralTabClick}>
                        General
                    </div>
                    <div className="eventsTab" onClick={this.handleEventsTabClick}>
                        Events
                    </div>
                    {this.state.events ?
                        <div className="tabWindow">
                            <VenueEvents />
                        </div> :
                        <div className="tabWindow">
                            <VenueGeneral />
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default VenueDetails;