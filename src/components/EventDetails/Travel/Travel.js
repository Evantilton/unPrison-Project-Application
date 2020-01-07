import React, { Component } from 'react';
import { connect } from 'react-redux';

class Travel extends Component {

    componentDidMount() {
        console.log('this.props.eventId is:', this.props.eventId)
        this.props.dispatch({ type: 'FETCH_TRAVEL_TABLE', payload: this.props.eventId });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type:'SET_EXISTING_TRAVEL', payload: { value: event.target.value, property: event.target.name } });
    }

    handleSaveChangesButtonClick = () => {
        this.props.dispatch({ type:'SAVE_EVENTS_TRAVEL', payload: this.props.reduxState.eventsTravelReducer });
    }

    render() {
        return (
            <div>
                <h3>Travel Component</h3>
                <ul class="nobullet">
                    <li><button className="tabButtonPosition" onClick={this.handleSaveChangesButtonClick}>Save Changes</button></li>
                    <li >
                        <label>Nearest Airport:</label>
                        <input type="text" name='nearest_airport' value={this.props.reduxState.eventsTravelReducer.nearest_airport} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Airport Code:</label>
                        <input type="text" name='airport_code' value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>


                    <li >
                        <label>Flights Booked:</label>
                        <select name='flights_booked' value={this.props.reduxState.eventsTravelReducer.flights_booked} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>


                    <li >
                        <label>Flights Information:</label>
                        <input type="text" name='flight_information' value={this.props.reduxState.eventsTravelReducer.flight_information} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Flights Departure:</label>
                        <input type="date" name='flight_departure' value={this.props.reduxState.eventsTravelReducer.flight_departure} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Flights Return:</label>
                        <input type="date" name='flight_return' value={this.props.reduxState.eventsTravelReducer.flight_return} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Hotel Booked:</label>
                        <select name='hotel_booked' value={this.props.reduxState.eventsTravelReducer.hotel_booked} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Hotel Information:</label>
                        <input type="text" name='hotel_information' value={this.props.reduxState.eventsTravelReducer.hotel_information} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Car Booked:</label>
                        <select name='car_booked' value={this.props.reduxState.eventsTravelReducer.car_booked} onChange={(event) => this.handleInputChange(event)}>
                            <option value="false">no</option>
                            <option value="true">yes</option>
                        </select>
                    </li>
                    <li >
                        <label>Car Information:</label>
                        <input type="text" name='car_information' value={this.props.reduxState.eventsTravelReducer.car_information} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Travel Notes:</label>
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

export default connect(mapStateToProps)(Travel);