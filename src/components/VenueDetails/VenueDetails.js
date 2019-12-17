import React, { Component } from 'react';
import VenueGeneral from './General/General';
import VenueEvents from './Events/Events';
import './VenueDetails.css';

class VenueDetails extends Component {

    state = {
        general: true,
        events: false,
        generalStyle: {
            backgroundColor: 'antiquewhite',
        },
        eventsStyle: {
            backgroundColor: 'gray',
        },
    }

    // Conditionally renders VenueGeneral component in tabWindow
    // Sets background color of general tab to white and events tab to gray
    handleGeneralTabClick = () => {
        this.setState({
            general: true,
            events: false,
            generalStyle: {
                backgroundColor: 'antiquewhite',
            },
            eventsStyle: {
                backgroundColor: 'gray',
            },
        });
    } // End handleGeneralTabClick

    // Conditionally renders VenueEvents component in tabWindow
    // Sets background color of events tab to white and general tab to gray
    handleEventsTabClick = () => {
        this.setState({
            general: false,
            events: true,
            generalStyle: {
                backgroundColor: 'gray',
            },
            eventsStyle: {
                backgroundColor: 'antiquewhite',
            },
        });
    } // End handleEventsTabClick

    render() {
        return (
            <>
                <div className="venueHeader">
                    <h1>St. Cloud Penitentiary</h1>
                </div>
                <div className="venueMainWindow">
                    <div className="primaryName">
                    <h3>Primary Contact:</h3>
                    <p>Sally Smith</p>
                    </div>
                    <div className="primaryPhone">
                    <h3>Phone:</h3>
                    <p>651-500-0875</p>
                    </div>
                    <div className="primaryEmail">
                    <h3>Primary Email:</h3>
                    <p>chris@ferbers.us</p>
                    </div>
                    <div className="venueGeneralTab" onClick={this.handleGeneralTabClick} style={this.state.generalStyle}>
                        General
                    </div>
                    <div className="venueEventsTab" onClick={this.handleEventsTabClick} style={this.state.eventsStyle}>
                        Events
                    </div>
                    {this.state.events ?
                        <div className="venueTabWindow">
                            <VenueEvents />
                        </div> :
                        <div className="venueTabWindow">
                            <VenueGeneral />
                        </div>
                    }
                </div>
            </>
        )
    }
} // End VenueDetails component

export default VenueDetails;