import React, { Component } from 'react';

class VenueEvents extends Component {
    render() {
        return (
            <div>
            <h1>Venue Events Needs Work</h1>
            
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
              {/* {this.props.reduxState.eventsReducer.map((event) => { */}
                <tr>
                {/* {this.props.event.confirmed_date ?
                <td>{moment(this.props.event.confirmed_date).format('MM/DD/YYYY')}</td>:
                <td>No Confirmed Date</td> */}
    {/* } */}
                <td>
                    Needs Work!{/* {this.props.best_times} */}
                </td>
                <td>
                    {/* {this.props.event.venue_id} */}
                </td>
                <td>
                    Primary Contact
                </td>
            </tr>
              {/* }) */}
              {/* } */}
            </tbody>
          </table>
          </div>  
        )
    }
}

export default VenueEvents;