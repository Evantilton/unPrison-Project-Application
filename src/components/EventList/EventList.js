import React, { Component } from 'react';

class EventList extends Component {
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
          <tbody>
            <tr>
              <td>When: 12/30/2019
      <br />Time: 8:00am
      <br /><button>See Details</button>
              </td>
              <td>Location: St. Cloud Pen</td>
              <td>Contact: Sarah Smith</td>
            </tr>
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

export default EventList;