import React, { Component } from 'react';








class VenueList extends Component {

  state = {

    addVenueButton: false

  }

  createVenue = () => {
    // when Add Venue button is clicked, conditionally renders more inputs and buttons onto the DOM
    console.log('Add New Venue');
    this.setState({
      addVenueButton: true
    })
  }

    removeFields = () => {
      // when Create Venue button is clicked, removes conditionally rendered inputs and buttons from the DOM
      console.log('Creating venue');
      this.setState({
        addVenueButton: false
      })
 
    }
    render() {
      return (
        <div className="venueContainer">
          <h1>Venue List</h1>
          <div className="listOptions">
            {this.state.addVenueButton ?

              <div>
                <input placeholder="Venue Name" />
                <input placeholder="Contact" />
                <select>
                  {/* Placeholder values. Waiting for Deborah to reply with types. */}
                  <option value="prison">Prison</option>
                  <option value="conference">Conference</option>
                  <option value="school">School</option>
                  <option value="other">Other</option>
                </select>
                <button onClick={this.removeFields}>Create Venue</button>
              </div> :
              <button onClick={this.createVenue}>Add Venue</button>
            }



            <select>
              {/* Use a sort table function? */}
              <option>Order By</option>
              <option value="prison">Prison</option>
              <option value="conference">Conference</option>
              <option value="school">School</option>
              <option value="other">Other</option>
            </select>


          </div>

          <div className="listVenues"></div>
          {/* Using table without headers for potential sort system and thinking we can style it to look like what we want. */}
          <table border="1">
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
                <td>Phone: 321-456-7890</td>
                <td>Address: 4300 maple st.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }

  export default VenueList;