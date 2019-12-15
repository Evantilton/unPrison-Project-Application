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
                <div className="header">
                    <h1>Venue Details Component</h1>
                </div>
                <div className="mainWindow">
                    <div className="mainInfo">
                        <p>Area for venue name + address and primary contact info</p>
                    </div>
                    <div className="generalTab" onClick={this.handleGeneralTabClick} style={this.state.generalStyle}>
                        General
                    </div>
                    <div className="eventsTab" onClick={this.handleEventsTabClick} style={this.state.eventsStyle}>
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
} // End VenueDetails component

export default VenueDetails;