import React, { Component } from 'react';
import { connect } from 'react-redux';

class General extends Component {

    componentDidMount() {
        console.log('this.props.eventId is:',this.props.eventId)
        this.props.dispatch({ type: 'FETCH_GENERAL_TABLE', payload: this.props.eventId });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type:'SET_EXISTING_GENERAL', payload: { value: event.target.value, property: event.target.name } })
    }

    render() {
        return (
            <div>
                <h3>General Component</h3>
                    <ul class="nobullet">
                        <li><button className="tabButtonPosition">Delete Event</button><button className="tabButtonPosition">Save Changes</button></li>
   
                        <li >
                            <label>Date Last Contacted:</label>
                            <input type="date" name='date_last_contacted' value={this.props.reduxState.eventsGeneralReducer.date_last_contacted} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Best Day of Week:</label>
                            <input type="text" name='best_days_week' value={this.props.reduxState.eventsGeneralReducer.best_days_week} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Best Times:</label>
                            <input type="text" name='best_times' value={this.props.reduxState.eventsGeneralReducer.best_times} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Proposed Month:</label>
                            <input type="text" name='proposed_month' value={this.props.reduxState.eventsGeneralReducer.proposed_month} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Proposed Dates:</label>
                            <input type="text" name='proposed_dates' value={this.props.reduxState.eventsGeneralReducer.proposed_dates} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Confirmed Date:</label>
                            <input type="date" name='confirmed_date' value={this.props.reduxState.eventsGeneralReducer.confirmed_date} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Desired Focus:</label>
                            <input type="date" name='desired_focus' value={this.props.reduxState.eventsGeneralReducer.desired_focus} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Total Prison Count:</label>
                            <input type="number" name='total_count' value={this.props.reduxState.eventsGeneralReducer.total_count} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Expected Attendance:</label>
                            <input type="date" name='expected_attendance' value={this.props.reduxState.eventsGeneralReducer.expected_attendance} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Room Location:</label>
                            <input type="text" name='room_location' value={this.props.reduxState.eventsGeneralReducer.room_location} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Actual Attendance:</label>
                            <input type="number" name='actual_attendance' value={this.props.reduxState.eventsGeneralReducer.actual_attendance} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Demographics:</label>
                            <input type="text" name='demographics' value={this.props.reduxState.eventsGeneralReducer.demographics} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Flyer Mailed:</label>
                            <input type="checkbox" name='flyer_mailed' value={this.props.reduxState.eventsGeneralReducer.flyer_mailed} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Flyer Mailed Date:</label>
                            <input type="date" name='flyer_mailed_date' value={this.props.reduxState.eventsGeneralReducer.flyer_mailed_date} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Heard About:</label>
                            <input type="text" name='hear_about' value={this.props.reduxState.eventsGeneralReducer.hear_about} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>
                            <label>Event Notes:</label>
                            <input type="text"></input>
                        </li>
                    </ul>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(General);