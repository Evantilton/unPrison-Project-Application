import React, { Component } from 'react';
import { connect } from 'react-redux';
import Financials from './Financials/Financials';
import General from './General/General';
import Programs from './Programs/Programs';
import Travel from './Travel/Travel';
import './EventDetails.css';
import moment from 'moment';
import { Button, Select, TextField, Tab, Icon } from '@material-ui/core';

class EventDetails extends Component {

    //this grabs the current event and updates the four tabs reducers show they show the proper information for that event
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_CURRENT_EVENT', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_PROGRAMS_TABLE', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_TRAVEL_TABLE', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_FINANCIALS_TABLE', payload: this.props.match.params.id });
    }

    state = {
        general: true,
        financials: false,
        programs: false,
        travel: false,

        generalStyle: {
            backgroundColor: 'white',
        },
        financialsStyle: {
            backgroundColor: '#82caff',
        },
        programsStyle: {
            backgroundColor: '#82caff',
        },
        travelStyle: {
            backgroundColor: '#82caff',
        },
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

    //this sets the general reducer on input change
    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_GENERAL', payload: { value: event.target.value, property: event.target.name } })
    } //end handleInputChange

    // this dispatches a save to the database with the current reducer
    handleSaveChangesButtonClick = () => {
        this.props.dispatch({ type: 'SAVE_EVENTS_TRAVEL', payload: this.props.reduxState.eventsTravelReducer });
        this.props.dispatch({ type: 'SAVE_EVENTS_GENERAL', payload: this.props.reduxState.eventsGeneralReducer });
        this.props.dispatch({ type: 'SAVE_EVENTS_PROGRAMS', payload: this.props.reduxState.eventsProgramsReducer });
        this.props.dispatch({ type: 'SAVE_EVENTS_FINANCIALS', payload: this.props.reduxState.eventsFinancialsReducer });
    } //end handleSaveChangesButtonClick

    //this dispatches to delete the event, fetches the events to update the reducer and pushes the user back to event-list
    handleDeleteClick = () => {
        this.props.dispatch({ type: 'DELETE_EVENT', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_EVENTS' })
        this.props.history.push('/event-list')
    } //handleDeleteClick

    //this dispatchs to delete the venue
    handleDeleteButtonClick = (venueId) => {
        this.props.dispatch({ type: 'DELETE_VENUE', payload: venueId });
    } //handleDeleteButtonClick

    render() {
        return (
            <>
                <div className="header">
                    <h1 class="h1-other">{this.props.reduxState.venueDetailsReducer.name} <br />Event Details</h1>
                </div>
                <div className="mainWindow">
                    <div className="mainInfo">
                        <h3>
                            <label>Date:</label>
                            <TextField id="material-ui" type="date" name='confirmed_date' value={moment(this.props.reduxState.eventsGeneralReducer.confirmed_date).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </h3>
                    </div>
                    <Tab label="General" className="generalTab" onClick={() => this.handleTabClick('general', 'generalStyle')} style={this.state.generalStyle}>
                        General
                    </Tab>
                    <Tab label="Travel" className="travelTab" onClick={() => this.handleTabClick('travel', 'travelStyle')} style={this.state.travelStyle}>
                        Travel
                    </Tab>
                    <Tab label="Financials" className="financialsTab" onClick={() => this.handleTabClick('financials', 'financialsStyle')} style={this.state.financialsStyle}>
                        Financials
                    </Tab>
                    <Tab label="Programs" className="programsTab" onClick={() => this.handleTabClick('programs', 'programsStyle')} style={this.state.programsStyle}>
                        Programs
                    </Tab>

                    {this.state.general &&
                        <div className="tabWindow">
                            <General eventId={this.props.match.params.id} />
                        </div>
                    }
                    {this.state.financials &&
                        <div className="tabWindow">
                            <Financials eventId={this.props.match.params.id} />
                        </div>
                    }
                    {this.state.programs &&
                        <div className="tabWindow">
                            <Programs eventId={this.props.match.params.id} />
                        </div>
                    }
                    {this.state.travel &&
                        <div className="tabWindow">
                            <Travel eventId={this.props.match.params.id} />
                        </div>
                    } <Button startIcon={<Icon>delete</Icon>} variant="contained" color="secondary" className="tabButtonPosition1" onClick={() => { if (window.confirm('Are you sure you wish to delete this event? This cannot be undone.')) this.handleDeleteClick() }}>Delete Event</Button>
                    <Button startIcon={<Icon>save</Icon>} variant="contained" color="primary" className="tabButtonPosition2" onClick={this.handleSaveChangesButtonClick}>Save Changes</Button>
                </div>
            </>
        )
    }
} // End VenueDetails component

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(EventDetails);