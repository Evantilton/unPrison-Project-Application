import React, { Component } from 'react';

class Travel extends Component {

    handleInputChange = (columnName, event) => {
        this.props.dispatch({ type:'EDIT_TRAVEL_TABLE', payload: [columnName, event.target.value] })
    }

    render() {
        return (
            <div>
                <h3>Travel Component</h3>
                <ul class="nobull">
                        <li >
                            <label>Nearest Airport:</label>
                            <input type="text" value={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Airport Code:</label>
                            <input type="text"></input>
                        </li>
                        <li >
                            <label>Flights Booked:</label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Flights Information:</label>
                            <input type="text"></input>
                        </li>
                        <li >
                            <label>Flights Departure:</label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Flights Return:</label>
                            <input type="date"></input>
                        </li>
                        <li >
                            <label>Hotel Booked:</label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Hotel Information:</label>
                            <input type="text"></input>
                        </li>
                        <li >
                            <label>Car Booked:</label>
                            <input type="checkbox"></input>
                        </li>
                        <li >
                            <label>Car Information:</label>
                            <input type="checkbox"></input>
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

export default Travel;