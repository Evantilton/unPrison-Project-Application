import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';

class Financials extends Component {

    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_FINANCIALS', payload: { value: event.target.value, property: event.target.name } })
    }
    render() {
        return (
            <div>
                <h3>Financials</h3>
                <ul class="nobullet">
                    <h1>Contributions</h1>
                    <li >
                        <label>Prison Contribution:</label>
                        <input type="number" name='prison_contribution' value={this.props.reduxState.eventsFinancialsReducer.prison_contribution} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Public Event Fee Paid:</label>
                        <input type="number" name='public_event_fee_paid' value={this.props.reduxState.eventsFinancialsReducer.public_event_fee_paid} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Public Event Donations:</label>
                        <input type="number" name='public_event_donations' value={this.props.reduxState.eventsFinancialsReducer.public_event_donations} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li>Total Income:
                        {Number((this.props.reduxState.eventsFinancialsReducer.prison_contribution))
                            + Number((this.props.reduxState.eventsFinancialsReducer.public_event_fee_paid))
                            + Number((this.props.reduxState.eventsFinancialsReducer.public_event_donations))}
                    </li>

                    <h1>Travel Costs</h1>
                    <li >
                        <label>Travel:</label>
                        <input type="number" name='expenses_travel' value={this.props.reduxState.eventsFinancialsReducer.expenses_travel} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Air:</label>
                        <input type="number" name='expenses_air' value={this.props.reduxState.eventsFinancialsReducer.expenses_air} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Hotel:</label>
                        <input type="number" name='expenses_hotel' value={this.props.reduxState.eventsFinancialsReducer.expenses_hotel} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Car:</label>
                        <input type="number" name='expenses_car' value={this.props.reduxState.eventsFinancialsReducer.expenses_car} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Meals:</label>
                        <input type="number" name='expenses_meals' value={this.props.reduxState.eventsFinancialsReducer.expenses_meals} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li>Total Travel:
                        {Number((this.props.reduxState.eventsFinancialsReducer.expenses_travel))
                            + Number((this.props.reduxState.eventsFinancialsReducer.expenses_air))
                            + Number((this.props.reduxState.eventsFinancialsReducer.expenses_hotel))
                            + Number((this.props.reduxState.eventsFinancialsReducer.expenses_car))
                            + Number((this.props.reduxState.eventsFinancialsReducer.expenses_meals))}
                    </li>

                    <h1>Supplies/Other Cost</h1>
                    <li >
                        <label>Supplies:</label>
                        <input type="number" name='expenses_supplies' value={this.props.reduxState.eventsFinancialsReducer.expenses_supplies} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Printing:</label>
                        <input type="number" name='expenses_printing' value={this.props.reduxState.eventsFinancialsReducer.expenses_printing} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Purchases</label>
                        <input type="number" name='expenses_purchases' value={this.props.reduxState.eventsFinancialsReducer.expenses_purchases} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Pre time costs:</label>
                        <input type="number" name='expenses_prep_time_costs' value={this.props.reduxState.eventsFinancialsReducer.expenses_prep_time_costs} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Staffing/consultants:</label>
                        <input type="number" name='expenses_staffing_consultants' value={this.props.reduxState.eventsFinancialsReducer.expenses_staffing_consultants} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                    <li >
                        <label>Total Supplies/Other:
                        {(Number(this.props.reduxState.eventsFinancialsReducer.expenses_supplies)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_printing)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_purchases)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_prep_time_costs)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_staffing_consultants))}
                        </label>

                    </li>
                    <li >
                        <label>Total Expenses:
                        {(Number(this.props.reduxState.eventsFinancialsReducer.expenses_travel)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_air)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_hotel)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_car)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_meals)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_supplies)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_printing)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_purchases)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_prep_time_costs)
                                + Number(this.props.reduxState.eventsFinancialsReducer.expenses_staffing_consultants))}
                        </label>

                    </li>
                    <li>
                        <label>Financials Notes:</label>
                        <input type="text" name='financials_notes' value={this.props.reduxState.eventsFinancialsReducer.financials_notes} onChange={(event) => this.handleInputChange(event)}></input>
                    </li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Financials);



