import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import moment from 'moment'; // imports moment.js to format dates correctly

class EventListItem extends Component {

    goToEventDetails = () => {
        this.props.history.push(`/event-details/${this.props.event.id}`);
    }

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
                    {this.props.event.name}
                </td>
                <td>
                    <button onClick={this.goToEventDetails}>See Details</button>
                </td>
            </tr>
        );
    }
}

// Provides component access to reduxState through props
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(EventListItem));