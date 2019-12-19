import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem/EventListItem';

class EventList extends Component {


  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_EVENTS' }); // makes dispatch call to eventsSaga.js to fetch all events from database
    this.getVenues();
  }

  getVenues = () => {
    this.props.dispatch({ type: 'GET_VENUES'})
  }

  render() {
    return (
      <div className="eventContainer">
        <h1>Event List</h1>
        <div className="listOptions">
          <select >
            {/* Brings in names of venues previously created and their ids to use in event creation */}
          {this.props.reduxState.venueReducer.map((location) => {
                                return (
                                    <option key={location.id} value={location.id}>{location.name}</option>
                                );
                            })}
            </select>

        
            <button>Create Event</button>

        </div>

          <div className="listEvents"></div>

          <table border="1">
            <thead>
              <tr>
                <th>
                  Event Date
            </th>
                <th>
                  Event Time
            </th>
                <th>
                  Event Location
            </th>
                <th>
                  Primary Contact
            </th>
              </tr>
            </thead>
            <tbody>
              {this.props.reduxState.eventsReducer.map((event) => {
                return (
                  <EventListItem key={event.id} event={event} />
                );
              })
              }
            </tbody>
          </table>
          <pre>{JSON.stringify(this.props,null,2)}</pre>
        </div>


        )
      }
    }
    
const mapStateToProps = reduxState => ({
          reduxState,
});
        
export default connect(mapStateToProps)(EventList);