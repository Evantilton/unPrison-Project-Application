import React, { Component } from 'react';

class VenueGeneral extends Component {
    render() {
        return (
            <div>
                <h3>Venue Details</h3>
                {/* Remember to add position value in database to contacts table 
                Also, do we want city, state, country, zip etc in addition to street address of venue? or do we want to just 
                string together those specific inputed values everywhere where we display full address? or vice versa?*/}
                    <ul className="nobull">
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

export default VenueGeneral;