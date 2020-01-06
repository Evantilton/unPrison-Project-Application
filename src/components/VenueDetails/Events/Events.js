import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import moment from 'moment';

class VenueEvents extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_EVENTS_FOR_SPECIFIC_VENUE', payload: this.props.match.params.id })
    }

    goToEventDetails = (id) => {
        console.log('in gotoeventdetails');
        
        this.props.history.push(`/event-details/${id}`);
    }



    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                Event Date
                            </th>
                            <th>
                                Event Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.eventsListForVenuesTabReducer.map((event) => {
                            return(
                            <tr key={event.id}>
                                {event.confirmed_date ?
                                    <td>{moment(event.confirmed_date).format('MM/DD/YYYY')}</td> :
                                    <td>No Confirmed Date</td>
                                    }
                                <td>
                                    <button onClick={() => this.goToEventDetails(event.id)}>See Details</button>
                                </td>
                            </tr>
                        )})
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withRouter(VenueEvents));