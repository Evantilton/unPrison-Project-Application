import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem/EventListItem';

class EventList extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_EVENTS' }); // makes dispatch call to eventsSaga.js to fetch all events from database
  }

  render() {
    return (
      <div className="eventContainer">
        <h1>Event List</h1>
        <div className="listOptions">

          <button>Add Event</button>
          <input placeholder="Event Name" />
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
            <tr>
              <td>When: 02/10/2020
      <br />Time: 10:00am
      <br /><button>See Details</button>
              </td>
              <td>Location: Ramsey County Prison</td>
              <td>Contact: Benjamin Brown</td>

            </tr>
          </tbody>
        </table>
      </div>


    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(EventList);