import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
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

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ONE_VENUE', payload: this.props.match.params.id })
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

    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_VENUES_GENERAL', payload: { value: event.target.value, property: event.target.name } })
    }

    render() {

        return (
            <>
                <div className="venueHeader">
                    <h1>{this.props.reduxState.venueDetailsReducer.name}</h1>
                </div>
                <div className="venueMainWindow">
                    <div className="primaryName">
                        <h3>Primary Contact:</h3>
                        <input type="text" name='contact_name' value={this.props.reduxState.venueDetailsReducer.contact_name || ''} onChange={(event) => this.handleInputChange(event)}></input>
                    </div>
                    <div className="primaryPhone">
                        <h3>Phone:</h3>
                        <input type="text" name='contact_phone' value={this.props.reduxState.venueDetailsReducer.contact_phone || ''} onChange={(event) => this.handleInputChange(event)}></input>
                    </div>
                    <div className="primaryEmail">
                        <h3>Primary Email:</h3>
                        <input type="text" name='contact_email' value={this.props.reduxState.venueDetailsReducer.contact_email || ''} onChange={(event) => this.handleInputChange(event)}></input>
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

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(VenueDetails));