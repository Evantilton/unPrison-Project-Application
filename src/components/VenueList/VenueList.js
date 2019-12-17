import React, { Component } from 'react';


class VenueList extends Component {

  state = {
    addVenueButton: false,
    venue: {
      name: "",
      venue_type: "",
    },
    contact: {
      contact_name: "",
    }
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
    // will add new Venue to database
    console.log('Creating venue');
    // this.props.dispatch({ type: 'POST_VENUE', payload: this.state.venue })
    // this.props.dispatch({ type: 'POST_CONTACT', payload: this.state.contact })
    this.setState({
      addVenueButton: false
    })
  }

  handleVenueInput = (event) => {
    // captures user input for venue name in state
    console.log('Venue input',  event.target.value);
    this.setState({
      venue: {
        ...this.state.venue,
        name: event.target.value,
      }
    });
  }

  handleContactInput = (event) => {
    // captures user input for contact name in state
    console.log('Contact input', event.target.value);
    this.setState({
      contact: {
        ...this.state.contact,
        contact_name: event.target.value
      }
    });
  }

  handleDropDown = propertyName => (event) => {
    // captures user input for venue type in state
    console.log('Drop Down', event.target.value);
    this.setState({
      venue: {
        ...this.state.venue,
        [propertyName]: event.target.value,
      }
    });
  }


  render() {
    return (
      <div className="venueContainer">
        <h1>Venue List</h1>
        <div className="listOptions">
          {this.state.addVenueButton ?

            <div>
              <input value={this.state.venue.name} onChange={this.handleVenueInput} placeholder="Venue Name" />
              <input value={this.state.contact.contact_name} onChange={this.handleContactInput} placeholder="Contact" />
              <select value={this.state.venue.venue_type}
                onChange={this.handleDropDown('venue_type')}>
                {/* Placeholder values. Waiting for Deborah to reply with types. */}
                <option value=""></option>
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