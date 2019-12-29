import React, { Component } from 'react';
import { connect } from 'react-redux';

class VenueGeneral extends Component {

    handleDeleteButtonClick = (venueId) => {
        this.props.dispatch({ type: 'DELETE_VENUE', payload: venueId });
    }

    render() {
        return (
            <div>
                <h3>Venue Details</h3>
                    <ul className="nobullet">
                        <li>
                        <button className="tabButtonPosition" onClick={() => { if (window.confirm('Are you sure you wish to delete this venue? This cannot be undone and will delete all event information tied to venue as well.')) this.handleDeleteButtonClick(this.props.reduxState.venueDetailsReducer.id) }}>Delete Venue</button>
                        <button className="tabButtonPosition">Save Changes</button>
                        </li>
                        <li>
                            <label>Venue Type:</label>
                            <select name="venueType" defaultValue="prison">
                                <option value="prison">Prison</option>
                                <option value="conference">Conference</option>
                                <option value="school">School/University</option>
                                <option value="other">Other</option>
                            </select>
                        </li>
                        <li>
                            <label>City:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>State:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Country:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Zip:</label>
                            <input type="text"></input>
                        </li>
                        <h3>Secondary Contacts</h3>
                        <p>contact:</p>
                        <li>
                            <label>Name:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Phone:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="text"></input>
                        </li>
                        <p>contact:</p>
                        <li>
                            <label>Name:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Phone:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="number"></input>
                        </li>
                    </ul>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(VenueGeneral);