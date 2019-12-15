import React, { Component } from 'react';

class VenueList extends Component {
  render() {
    return (
      <div className="venueContainer">
        <h1>Venue List</h1>
        <div className="listOptions">
          <button>Add Venue</button>
          <input placeholder="Venue Name" />
          <input placeholder="Contact" />
          <select>
            {/* Placeholder values. Waiting for Deborah to reply with types. */}

            <option value="prison">Prison</option>
            <option value="conference">Conference</option>
            <option value="school">School</option>
            <option value="other">Other</option>
          </select>

          <select>
            {/* Use a sort table function? */}
            <option>Order By</option>
            <option value="prison">Prison</option>
            <option value="conference">Conference</option>
            <option value="school">School</option>
            <option value="other">Other</option>
          </select>
          <button>Create Venue</button>
        </div>

        <div className="listVenues"></div>

        <table>
 <tbody>
  <tr>
    <td>St. Cloud Pen
      <br />Primary Contact: Sarah Smith
    </td>
    <td>Phone: 123-456-7890</td>
    <td>Address: 1000 maple st.</td>
  </tr>
  <tr>
  <td>Ramsey County Prison
      <br />Primary Contact: Benjamin Brown
    </td>
    <td>Phone: 123-456-7890</td>
    <td>Address: 4300 maple st.</td>
  </tr>
  </tbody>
</table>
      </div>
    )
  }
}

export default VenueList;