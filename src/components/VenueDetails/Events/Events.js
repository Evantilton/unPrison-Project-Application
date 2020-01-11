import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import moment from 'moment';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';

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
                
                <Table border="1">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Event Date
                            </TableCell>
                            <TableCell>
                                Event Details
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.eventsListForVenuesTabReducer.map((event) => {
                            return(
                            <TableRow id="TableRow" key={event.id}>
                                {event.confirmed_date ?
                                    <TableCell>{moment(event.confirmed_date).format('MM/DD/YYYY')}</TableCell> :
                                    <TableCell>No Confirmed Date</TableCell>
                                    }
                                <TableCell>
                                    <Button variant="contained" onClick={() => this.goToEventDetails(event.id)}>See Details</Button>
                                </TableCell>
                            </TableRow>
                        )})
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