import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import moment from 'moment';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';
class VenueEvents extends Component {

    componentDidMount() {
        //dispatchs a call to get the events just for that specific venue
        this.props.dispatch({ type: 'GET_EVENTS_FOR_SPECIFIC_VENUE', payload: this.props.match.params.id })
    }

    //pushes the user to the event details page of that specific event
    goToEventDetails = (id) => {
        this.props.history.push(`/event-details/${id}`);
    } //end goToEventDetails

    render() {
        return (
            <div>

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Event Date
                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.eventsListForVenuesTabReducer.map((event) => {
                            return (
                                <TableRow id="TableRow" key={event.id}>
                                    {event.confirmed_date ?
                                        <TableCell>{moment(event.confirmed_date).format('MM/DD/YYYY')}</TableCell> :
                                        <TableCell>No Confirmed Date</TableCell>
                                    }
                                    <TableCell >
                                        <Button variant="outlined" color="primary" onClick={() => this.goToEventDetails(event.id)}>Details</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withRouter(VenueEvents));