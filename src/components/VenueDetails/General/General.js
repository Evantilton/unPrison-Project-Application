import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {Button, Select} from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';
class VenueGeneral extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_VENUES_GENERAL_TABLE', payload: this.props.match.params.id }); //fetches the information for the venue
        this.props.dispatch({ type: 'FETCH_CONTACTS', payload: this.props.match.params.id }); //fetches all the contacts and updates the reducer
    }

    // this updates the venues general reducer on input change
    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_VENUES_GENERAL', payload: { value: event.target.value, property: event.target.name } });
    } //end handleInputChange

    render() {
        return (
            <>
            <div>
                <h3 id="general-header">Venue Details</h3>
                <ul className="nobullet">
                    <li>
                        
                    </li>
                    <li>
                        <label>Venue Type:</label>
                        <Select id="material-ui" type='text' name="venue_type" value={this.props.reduxState.venueDetailsReducer.venue_type || ''} onChange={(event) => this.handleInputChange(event)}>
                            <option value="prison">Prison</option>
                            <option value="conference">Conference</option>
                            <option value="school">School/University</option>
                            <option value="other">Other</option>
                        </Select>
                    </li>

                    <li>
                        <label>Venue Name:</label>
                        <TextField id="material-ui"type="text" name='name' value={this.props.reduxState.venueDetailsReducer.name || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>

                    <li>
                        <label>Street Address:</label>
                        <TextField id="material-ui"type="text" name='street_address' value={this.props.reduxState.venueDetailsReducer.street_address || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>City:</label>
                        <TextField id="material-ui"type="text" name='city' value={this.props.reduxState.venueDetailsReducer.city || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>State:</label>
                        <TextField id="material-ui"type="text" name='state' value={this.props.reduxState.venueDetailsReducer.state || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Country:</label>
                        <TextField id="material-ui"type="text" name='country' value={this.props.reduxState.venueDetailsReducer.country || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Zip:</label>
                        <TextField id="material-ui"type="text" name='zip' value={this.props.reduxState.venueDetailsReducer.zip || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                </ul>
            </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(VenueGeneral));

