

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import moment from 'moment'; // imports moment.js to format dates correctly

class VenueListItem extends Component {

    goToVenueDetails = () => {
        this.props.history.push(`/venue-details/${this.props.venue.id}`)
    }

    render() {
        return (
            <tr>
                <td>{this.props.venue.name}<button onClick={this.goToVenueDetails}>See Details</button></td>
                <td>{this.props.venue.street_address}</td>
                <td>{this.props.venue.contact_name}</td>
                <td>{this.props.venue.contact_phone}</td>
            </tr>
        );
    }
}

// Provides component access to reduxState through props
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(VenueListItem));