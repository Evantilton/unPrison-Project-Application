import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import VenueGeneral from './General/General';
import VenueEvents from './Events/Events';
import SecondaryContacts from './SecondaryContacts/SecondaryContacts';
import './VenueDetails.css';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';


class VenueDetails extends Component {

    state = {
        general: true,
        events: false,
        secondaryContacts: false,
        generalStyle: {
            backgroundColor: 'antiquewhite',
        },
        eventsStyle: {
            backgroundColor: 'gray',
        },
        secondaryContactsStyle: {
            backgroundColor: 'gray',
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ONE_VENUE', payload: this.props.match.params.id })
    }

    // Function that takes in two paramaters related to local state properties, called on click of inner window tab
    // Sets the value of the tab that was clicked to true in local state, backgroundColor to 'antiquewhite', and all other booleans and backgroundColors to false and gray respectively
    handleTabClick = (propertyName, styleName) => {

        Object.keys(this.state).forEach(property => {
            if (property === propertyName) {
                this.setState({
                    [propertyName]: true,
                })
            } else if (property === styleName) {
                this.setState({
                    [styleName]: {
                        backgroundColor: 'antiquewhite',
                    },
                })
            } else if (property.includes('Style')) {
                this.setState({
                    [property]: {
                        backgroundColor: 'gray',
                    },
                })
            } else {
                this.setState({
                    [property]: false,
                })
            }
        });
    } // End handleTabClick function

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
                        <TextField id="textfield" variant="standard" type="text" name='contact_name' value={this.props.reduxState.venueDetailsReducer.contact_name || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </div>
                    <div className="primaryPhone">
                        <h3>Phone:</h3>
                        <TextField id="textfield" type="text" name='contact_phone' value={this.props.reduxState.venueDetailsReducer.contact_phone || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </div>
                    <div className="primaryEmail">
                        <h3>Primary Email:</h3>
                        <TextField id="textfield" type="text" name='contact_email' value={this.props.reduxState.venueDetailsReducer.contact_email || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </div>
                    <Tab label="General" className="venueGeneralTab" onClick={() => this.handleTabClick('general', 'generalStyle')} style={this.state.generalStyle}>
                        General
                    </Tab>
                    <Tab label="Events" className="venueEventsTab" onClick={() => this.handleTabClick('events', 'eventsStyle')} style={this.state.eventsStyle}>
                        Events
                    </Tab>
                    <Tab label="Contacts" className="venueContactsTab" onClick={() => this.handleTabClick('secondaryContacts', 'secondaryContactsStyle')} style={this.state.secondaryContactsStyle}>
                        Contacts
                    </Tab>
                    {this.state.events &&

                        <div className="venueTabWindow">
                            <VenueEvents />
                        </div>
                    }
                    {this.state.general &&
                        <div className="venueTabWindow">
                            <VenueGeneral />
                        </div>
                    }
                    {this.state.secondaryContacts &&
                        <div className="venueTabWindow">
                            <SecondaryContacts venueId={this.props.match.params.id}/>
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