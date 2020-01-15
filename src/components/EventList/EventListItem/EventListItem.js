import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment'; // imports moment.js to format dates correctly
//style imports
import { TableCell, TableRow } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class EventListItem extends Component {

    //this pushes the user to the correct event
    goToEventDetails = () => {
        this.props.history.push(`/event-details/${this.props.event.id}`);
    } //end goToEventDetails
    render() {
        return (
            <TableRow id="TableRow">
                {this.props.event.confirmed_date ?
                    <TableCell>{moment(this.props.event.confirmed_date).format('MM/DD/YYYY')}</TableCell> :
                    <TableCell>No Confirmed Date</TableCell>
                }
                <TableCell>{this.props.event.best_times}</TableCell>
                <TableCell> {this.props.event.name}</TableCell>
                <TableCell align="right"><Button variant="outlined" size="small" color="primary" onClick={this.goToEventDetails}>Details</Button></TableCell>
            </TableRow>
        );
    }
}

// Provides component access to reduxState through props
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(EventListItem));