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
import {Button, Select} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

class VenueDetails extends Component {

    state = {
        general: true,
        events: false,
        secondaryContacts: false,
        generalStyle: {
            backgroundColor: 'white',
        },
        eventsStyle: {
            backgroundColor: '#82caff',
        },
        secondaryContactsStyle: {
            backgroundColor: '#82caff',
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ONE_VENUE', payload: this.props.match.params.id })
    }

    handleSaveChangesButtonClick = () => {
        this.props.dispatch({ type: 'SAVE_VENUES_GENERAL', payload: this.props.reduxState.venueDetailsReducer });
    }
    
    handleDeleteButtonClick = (venueId) => {
        this.props.dispatch({ type: 'DELETE_VENUE', payload: venueId });
        this.props.history.push('/home');
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
                        backgroundColor: 'white',
                    },
                })
            } else if (property.includes('Style')) {
                this.setState({
                    [property]: {
                        backgroundColor: '#82caff',
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
                            <VenueEvents savePrimary={this.handleInputChange}/>
                        </div>
                    }
                    {this.state.general &&
                        <div className="venueTabWindow">
                            <VenueGeneral savePrimary={this.handleInputChange}/>
                        </div>
                    }
                    {this.state.secondaryContacts &&
                        <div className="venueTabWindow">

                            <SecondaryContacts venueId={this.props.match.params.id} />

                            <SecondaryContacts venueId={this.props.match.params.id} savePrimary={this.handleInputChange}/>

                        </div>
                    }  <Button startIcon={<Icon>delete</Icon>} variant="contained"color="secondary" className="tabButtonPosition1" onClick={() => { if (window.confirm('Are you sure you wish to delete this venue? This cannot be undone and will delete all event information tied to venue as well.')) this.handleDeleteButtonClick(this.props.reduxState.venueDetailsReducer.id) }}>Delete Venue</Button>
                    <Button startIcon={<Icon>save</Icon>} variant="contained" color="primary" className="tabButtonPosition2" onClick={this.handleSaveChangesButtonClick}>Save Changes</Button>

                </div>
            </>
        )
    }
} // End VenueDetails component

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(VenueDetails));