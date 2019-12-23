import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import VenueListItem from './VenueListItem/VenueListItem';



class VenueList extends Component {

  state = {
    venue: {
      name: "",
      venue_type: "",
    },
    contact: {
      contact_name: "",
    }
  }

  componentDidMount() {
    // on ready function
    this.props.dispatch({ type: 'GET_VENUES'})
  }

  newVenueAdded = () => {
    // will add new Venue to database
    console.log('Creating venue');
    this.props.dispatch({ type: 'POST_VENUE', payload: this.state })
    // this.props.dispatch({ type: 'POST_CONTACT', payload: this.state.contact })
    this.setState({
      venue: {
        name: "",
        venue_type: "",
      },
      contact: {
        contact_name: "",
      }
    });
  }

  handleVenueInput = (event) => {
    // captures user input for venue name in state
    this.setState({
      venue: {
        ...this.state.venue,
        name: event.target.value,
      }
    });
  }

  handleContactInput = (event) => {
    // captures user input for contact name in state
    this.setState({
      contact: {
        ...this.state.contact,
        contact_name: event.target.value
      }
    });
  }

  handleDropDown = propertyName => (event) => {
    // captures user input for venue type in state
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
              <button onClick={this.newVenueAdded}>Create Venue</button>
            </div>

<div align="right">
          <select>
            {/* Use a sort table function? */}
            <option>Order By</option>
            <option value="prison">Prison</option>
            <option value="conference">Conference</option>
            <option value="school">School</option>
            <option value="other">Other</option>
          </select>
</div>

        </div>

        <div className="listVenues"></div>
        {/* Using table without headers for potential sort system and thinking we can style it to look like what we want. */}
        <table border="1">
          <thead>
            <tr>
              <th>Venue</th>
              <th>Primary Contact</th>
              <th>Primary Contact Phone Number</th>
            </tr>
            </thead>
            <tbody>
            {this.props.reduxState.venueReducer.map((venue) => {
              return (
                <VenueListItem key={venue.id} venue={venue} />
              );
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(VenueList));
