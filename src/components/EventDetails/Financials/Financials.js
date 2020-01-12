import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {Button, Select} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

class Financials extends Component {

    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_FINANCIALS', payload: { value: event.target.value, property: event.target.name } })
    }
    render() {
        return (
            <div>
                <h2 id="general-header">Financials</h2>
                <ul class="nobullet">
                    <h1>Contributions</h1>
                    <li >
                        <label>Prison Contribution:</label>
                        <TextField id="material-ui"type="number" name='prison_contribution' value={this.props.reduxState.eventsFinancialsReducer.prison_contribution} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Public Event Fee Paid:</label>
                        <TextField id="material-ui" type="number" name='public_event_fee_paid' value={this.props.reduxState.eventsFinancialsReducer.public_event_fee_paid} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Public Event Donations:</label>
                        <TextField id="material-ui"type="number" name='public_event_donations' value={this.props.reduxState.eventsFinancialsReducer.public_event_donations} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>Total Income:
                        {Number((this.props.reduxState.eventsFinancialsReducer.prison_contribution))
                            + Number((this.props.reduxState.eventsFinancialsReducer.public_event_fee_paid))
                            + Number((this.props.reduxState.eventsFinancialsReducer.public_event_donations))}
                    </li>

                    <h1>Travel Costs</h1>
                    <li >
                        <label>Travel:</label>
                        <TextField id="material-ui"type="number" name='expenses_travel' value={this.props.reduxState.eventsFinancialsReducer.expenses_travel} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Air:</label>
                        <TextField id="material-ui"type="number" name='expenses_air' value={this.props.reduxState.eventsFinancialsReducer.expenses_air} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Hotel:</label>
                        <TextField id="material-ui"type="number" name='expenses_hotel' value={this.props.reduxState.eventsFinancialsReducer.expenses_hotel} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Car:</label>
                        <TextField id="material-ui"type="number" name='expenses_car' value={this.props.reduxState.eventsFinancialsReducer.expenses_car} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Meals:</label>
                        <TextField id="material-ui"type="number" name='expenses_meals' value={this.props.reduxState.eventsFinancialsReducer.expenses_meals} onChange={(event) => this.handleInputChange(event)}></TextField>
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
                        <TextField id="material-ui"type="number" name='expenses_supplies' value={this.props.reduxState.eventsFinancialsReducer.expenses_supplies} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Printing:</label>
                        <TextField id="material-ui"type="number" name='expenses_printing' value={this.props.reduxState.eventsFinancialsReducer.expenses_printing} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Purchases</label>
                        <TextField id="material-ui"type="number" name='expenses_purchases' value={this.props.reduxState.eventsFinancialsReducer.expenses_purchases} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Pre time costs:</label>
                        <TextField id="material-ui"type="number" name='expenses_prep_time_costs' value={this.props.reduxState.eventsFinancialsReducer.expenses_prep_time_costs} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li >
                        <label>Staffing/consultants:</label>
                        <TextField id="material-ui"type="number" name='expenses_staffing_consultants' value={this.props.reduxState.eventsFinancialsReducer.expenses_staffing_consultants} onChange={(event) => this.handleInputChange(event)}></TextField>
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
                        <TextField id="material-ui"type="text" name='financials_notes' value={this.props.reduxState.eventsFinancialsReducer.financials_notes} onChange={(event) => this.handleInputChange(event)}></TextField>
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



