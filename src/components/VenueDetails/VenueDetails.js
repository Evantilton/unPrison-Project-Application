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
        this.props.dispatch({type: 'GET_ONE_VENUE', payload: this.props.match.params.id})
        // this.props.dispatch({type:'GET_VENUES'});
        // this.setCurrentVenue();
    }

    // setCurrentVenue = () => {
    //     this.props.reduxState.venueReducer.forEach(venue => {
    //         if (venue.id == this.props.match.params.id) {
    //             this.props.dispatch({ type: 'SET_CURRENT_VENUE', payload: venue })
    //         } else {
    //             console.log('this venue was not a match:', venue);
    //         }
            
    //     });
    // }


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
                    <h1>{this.props.reduxState.venueDetailsReducer.name}</h1>
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

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(VenueDetails));