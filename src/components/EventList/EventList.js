import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem/EventListItem';
//style imports
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';

class EventList extends Component {

  state = {
    venue_id: "",
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_EVENTS' }); // makes dispatch call to eventsSaga.js to fetch all events from database
    this.getVenues(); 
  }

  //makes dispatch call to get all the venues and update the reducer
  getVenues = () => {
    this.props.dispatch({ type: 'GET_VENUES' })
  } //end getVenues

  // makes dispatch call to create add an event to the database
  createEventButton = () => {
    this.props.dispatch({ type: 'POST_EVENTS', payload: this.state })
  } //createEventButton

  // updates state with the proper venue.id as it is selected from the dropdown
  handleChangeForVenue = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  } //end hangleChangeForVenue

  render() {
    return (
      <div className="eventContainer">
        <Container>
          <h1 className="h1-main" id="eventHeader">Event List</h1>
          <div className="listOptions">
            <InputLabel shrink id="venue-event">Select a Venue</InputLabel>
            <Select
              variant="outlined"
              labelId="venue-event"
              style={{ width: `150px`, height: `40px`, margin: `10px` }}
              onChange={this.handleChangeForVenue('venue_id')}>
              {/* Brings in names of venues previously created and their ids to use in event creation */}
              {this.props.reduxState.venueReducer.map((location) => {
                return (
                  <MenuItem key={location.id} value={location.id}>{location.name}</MenuItem>
                );
              })}
            </Select>
            <span>&nbsp;</span>
            <Button variant="contained" size="normal" color="primary" className="eventButtons" onClick={this.createEventButton} >Create Event</Button>
          </div>
          <div className="listEvents"></div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event Date</TableCell>
                <TableCell>Event Time</TableCell>
                <TableCell>Event Location</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.eventsReducer.map((event) => {
                return (
                  <EventListItem key={event.id} event={event} />
                );
              })
              }
            </TableBody>
          </Table>
          {/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(EventList);