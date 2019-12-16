import React, { Component } from 'react';

class Financials extends Component {
    render() {
        return (
            <div>
                <h3>Financials</h3>
                <ul class="nobull">
                    <h1>Contributions</h1>
                        <li >
                            <label>Prison Contribution:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Public Event Fee Paid:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Public Event Donations:</label>
                            <input type="number"></input>
                        </li>
                        <li>Total Income:</li>

                        <h1>Travel Costs</h1>
                        <li >
                            <label>Travel:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Air:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Hotel:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Car:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Meals:</label>
                            <input type="number"></input>
                        </li>
                        <li>Total Travel</li>

                        <h1>Supplies Cost</h1>
                        <li >
                            <label>Supplies:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Printing:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Purchases</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Pre time costs:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Staffing/consultants:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Total Other:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Total Expenses:</label>
                            <input type="number"></input>
                        </li>
                        <li >
                            <label>Expenses Notes:</label>
                            <input type="text"></input>
                        </li>
                        <button>+add expenses notes</button>
                        </ul>
            </div>
        )
    }
}

export default Financials;
	

