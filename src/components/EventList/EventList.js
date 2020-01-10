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
    venue_id:"",
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_EVENTS' }); // makes dispatch call to eventsSaga.js to fetch all events from database
    this.getVenues();
  }

  getVenues = () => {
    this.props.dispatch({ type: 'GET_VENUES' })
  }

  createEventButton = () =>{
    this.props.dispatch({ type: 'POST_EVENTS', payload: this.state})
  }

  handleChangeForVenue = propertyName => (event) => {
    console.log(event.target.value);
    this.setState({
            [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="eventContainer">
         <Container>
        <h1>Event List</h1>
        <div className="listOptions">
        <InputLabel shrink id="venue-event">Select a Venue</InputLabel>
        <Select
        variant="outlined"
        labelId="venue-event"
        style={{ width: `150px`, height: `30px` }}
        onChange={this.handleChangeForVenue('venue_id')}> 
          
        
            {/* Brings in names of venues previously created and their ids to use in event creation */}
          {this.props.reduxState.venueReducer.map((location) => {
                                return (
                                    <MenuItem key={location.id} value={location.id}>{location.name}</MenuItem>
                                );
                            })}
            </Select>
            <span>&nbsp;</span>
            <Button variant="contained" size="small" className="eventButtons" onClick={this.createEventButton} disableElevation>Create Event</Button>

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
          </Container>
        </div>


        )
      }
    }
    
const mapStateToProps = reduxState => ({
          reduxState,
});
        
export default connect(mapStateToProps)(EventList);