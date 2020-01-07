import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';

class VenueGeneral extends Component {

    componentDidMount() {
        console.log('this.props.match.params.id is:',this.props.match.params.id)
        this.props.dispatch({ type: 'FETCH_VENUES_GENERAL_TABLE', payload: this.props.match.params.id });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type:'SET_EXISTING_VENUES_GENERAL', payload: { value: event.target.value, property: event.target.name } })
    }

    render() {
        return (
            <div>
                <h3>Venue Details</h3>
                    <ul className="nobullet">
                        <li>
                        <button className="tabButtonPosition">Delete Venue</button><button className="tabButtonPosition">Save Changes</button>
                        </li>
                        <li>
                            <label>Venue Type:</label>
                            <select type='text' name="venue_type" defaultValue={this.props.reduxState.venueDetailsReducer.venue_type || ''} onChange={(event) => this.handleInputChange(event)}>
                                <option value="prison">Prison</option>
                                <option value="conference">Conference</option>
                                <option value="school">School/University</option>
                                <option value="other">Other</option>
                            </select>
                        </li>
                        <li>
                            <label>Street Address:</label>
                            <input type="text" name='street_address' value={this.props.reduxState.venueDetailsReducer.street_address || ''} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>City:</label>
                            <input type="text" name='city' value={this.props.reduxState.venueDetailsReducer.city || ''} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>State:</label>
                            <input type="text" name='state' value={this.props.reduxState.venueDetailsReducer.state || ''} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Country:</label>
                            <input type="text" name='country' value={this.props.reduxState.venueDetailsReducer.country || ''} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Zip:</label>
                            <input type="text" name='zip' value={this.props.reduxState.venueDetailsReducer.zip || ''} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <h3>Secondary Contacts</h3>
                        <p>contact:</p>
                        <li>
                            <label>Name:</label>
                            <input type="text" ></input>
                        </li>
                        <li>
                            <label>Phone:</label>
                            <input type="text" ></input>
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="text" ></input>
                        </li>
                        <p>contact:</p>
                        <li>
                            <label>Name:</label>
                            <input type="text" ></input>
                        </li>
                        <li>
                            <label>Phone:</label>
                            <input type="text" ></input>
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="number" ></input>
                        </li>
                    </ul>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(VenueGeneral));