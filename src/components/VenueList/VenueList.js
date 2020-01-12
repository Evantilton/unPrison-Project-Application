import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import VenueListItem from './VenueListItem/VenueListItem';
import './VenueList.css';
//styling imports
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';

class VenueList extends Component {

  state = {
    venue: {
      name: "",
      venue_type: "",
    },
    contact: {
      contact_name: "",
      is_primary: "",
    }
  }

  componentDidMount() {
    // on ready function
    this.props.dispatch({ type: 'GET_VENUES' })
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
        is_primary: "",
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
        contact_name: event.target.value,
        is_primary: true,
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
        <Container>
          <h1>Venue List</h1>

          <div className="listOptions">

            <div id="inputlabel">
            
              <TextField
                label="Venue Name"
                id="smallInput1"
                variant="outlined"
                size="small"
                value={this.state.venue.name}
                onChange={this.handleVenueInput}
              />
              
              <span>&nbsp;</span>
              <TextField
                label="Venue Contact"
                id="smallInput2"
                variant="outlined"
                size="small"
                value={this.state.contact.contact_name}
                onChange={this.handleContactInput}
              />
              <span>&nbsp;</span>
              <Select
                labelId="simple-outlined-drop"
                id="selectVenues"
                variant="outlined"
                displayEmpty
                style={{ width: `140px`, height: '40px'  }}
                value={this.state.venue.venue_type}
                onChange={this.handleDropDown('venue_type')}
              >

                <MenuItem value="prison">Prison</MenuItem>
                <MenuItem value="conference">Conference</MenuItem>
                <MenuItem value="school">School</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <Button variant="contained" size="normal" color="primary" className="venueButtons" onClick={this.newVenueAdded}>Add Venue</Button>
        
            </div>

          </div>

          <div className="listVenues"></div>
        
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Venue</TableCell>
                <TableCell>Primary Contact</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell align="right">Order By: <Select
                labelId="selectUnlined"
                id="sortDrop"
                style={{ width: `140px`, height: `30px` }}
              >
                <MenuItem>
                  <em>Order By</em>
                </MenuItem>
                <MenuItem value="prison">Prison</MenuItem>
                <MenuItem value="conference">Conference</MenuItem>
                <MenuItem value="school">School</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.venueReducer.map((venue) => {
                return (
                  <VenueListItem key={venue.id} venue={venue} />
                );
              })}
            </TableBody>
          </Table>
        </Container>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(VenueList));
