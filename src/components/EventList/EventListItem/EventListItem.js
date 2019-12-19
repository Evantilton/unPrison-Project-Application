import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'; // imports moment.js to format dates correctly

class EventListItem extends Component {
    render() {
        return (
            <tr>
                {this.props.event.confirmed_date ?
                <td>{moment(this.props.event.confirmed_date).format('MM/DD/YYYY')}</td>:
                <td>No Confirmed Date</td>
    }
                <td>
                    {this.props.event.best_times}
                </td>
                <td>
                    {this.props.event.venue_id}
                </td>
                <td>
                    Primary Contact
                </td>
            </tr>
        );
    }
}

// Provides component access to reduxState through props
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(EventListItem);