import React, { Component } from 'react';
import { connect } from 'react-redux';

class Travel extends Component {

    componentDidMount() {
        console.log('this.props.eventId is:',this.props.eventId)
        this.props.dispatch({ type: 'FETCH_TRAVEL_TABLE', payload: this.props.eventId });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type:'SET_EXISTING_TRAVEL', payload: { value: event.target.value, property: event.target.name } })
    }

    render() {
        return (
            <div>
                <h3>Travel Component</h3>
                <ul class="nobull">
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
                            <input type="checkbox" onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Flights Information:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Flights Departure:</label>
                            <input type="date" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Flights Return:</label>
                            <input type="date" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Hotel Booked:</label>
                            <input type="checkbox" onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Hotel Information:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Car Booked:</label>
                            <input type="checkbox" onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Car Information:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
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