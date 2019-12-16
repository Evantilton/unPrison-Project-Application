import React, { Component } from 'react';

class General extends Component {
    render() {
        return (
            <div>
                <h3>General Component</h3>
                    <ul class="nobull">
                        <li >
                            <label>Date Last Contacted:</label>
                            <input type="date"></input>
                        </li>
                        <li>
                            <label>Best Day of Week:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Best Times:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Proposed Month:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Proposed Dates:</label>
                            <input type="date"></input>
                            <input type="date"></input>
                        </li>
                        <li>
                            <label>Confirmed Date:</label>
                            <input type="date"></input>
                        </li>
                        <li>
                            <label>Desired Focus:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Total Prison Count:</label>
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Expected Attendance:</label>
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Room Location:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Actual Attendance:</label>
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Demographics:</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>Flyer Mailed:</label>
                            <input type="checkbox"></input>
                        </li>
                        <li>
                            <label>Flyer Mailed Date:</label>
                            <input type="date"></input>
                        </li>
                        <li>
                            <label>Heard About:</label>
                            <input type="text"></input>
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

export default General;