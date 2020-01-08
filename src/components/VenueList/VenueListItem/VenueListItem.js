import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'; // imports moment.js to format dates correctly

class VenueListItem extends Component {

    goToVenueDetails = () => {
        this.props.history.push(`/venue-details/${this.props.venue.id}`)
    }

    render() {
        return (
            <TableRow>
               <TableCell >{this.props.venue.name}
                <br /><button onClick={this.goToVenueDetails}>See Details</button></TableCell >
                <TableCell >{this.props.venue.contact_name}</TableCell >
                <TableCell >{this.props.venue.street_address}</TableCell >
                </TableRow>
        );
    }
}

// Provides component access to reduxState through props
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(VenueListItem));