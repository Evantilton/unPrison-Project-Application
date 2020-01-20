import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Button, Select } from '@material-ui/core';

class Contacts extends Component {

    //this handles the input and changes the travel reducer on input change
    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_VENUES_GENERAL', payload: { value: event.target.value, property: event.target.name } })
    } // end handleInputChange

    render() {
        return (
            <>
                <div>
                    <ul class="nobullet">
                        <h2 id="general-header">Contact 2</h2>
                        <li >
                            <label>Name:</label>
                            <TextField id="material-ui" type="text" name='contact_name_two' value={this.props.reduxState.venueDetailsReducer.contact_name_two} onChange={(event) => this.handleInputChange(event)}></TextField>                        </li>
                        <li >
                            <label>Phone:</label>
                            <TextField id="material-ui" type="text" name='contact_phone_two' value={this.props.reduxState.venueDetailsReducer.contact_phone_two} onChange={(event) => this.handleInputChange(event)}></TextField>                        </li>
                        <li >
                            <label>Email:</label>
                            <TextField id="material-ui" type="text" name='contact_email_two' value={this.props.reduxState.venueDetailsReducer.contact_email_two} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Position:</label>
                            <TextField id="material-ui" type="text" name='contact_position_two' value={this.props.reduxState.venueDetailsReducer.contact_position_two} onChange={(event) => this.handleInputChange(event)}></TextField>                        </li>
                        <h2 id="general-header">Contact 3</h2>
                        <li >
                            <label>Name:</label>
                            <TextField id="material-ui" type="text" name='contact_name_three' value={this.props.reduxState.venueDetailsReducer.contact_name_three} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Phone:</label>
                            <TextField id="material-ui" type="text" name='contact_phone_three' value={this.props.reduxState.venueDetailsReducer.contact_phone_three} onChange={(event) => this.handleInputChange(event)}></TextField>                        </li>
                        <li>
                            <label>Email:</label>
                            <TextField id="material-ui" type="text" name='contact_email_three' value={this.props.reduxState.venueDetailsReducer.contact_email_three} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Position:</label>
                            <TextField id="material-ui" type="text" name='contact_position_three' value={this.props.reduxState.venueDetailsReducer.contact_position_three} onChange={(event) => this.handleInputChange(event)}></TextField>                        </li>
                            <h2 id="general-header">Contact 4</h2>
                        <li >
                            <label>Name:</label>
                            <TextField id="material-ui" type="text" name='contact_name_four' value={this.props.reduxState.venueDetailsReducer.contact_name_four} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Phone:</label>
                            <TextField id="material-ui" type="text" name='contact_phone_four' value={this.props.reduxState.venueDetailsReducer.contact_phone_four} onChange={(event) => this.handleInputChange(event)}></TextField>                        </li>
                        <li >
                            <label>Email:</label>
                            <TextField id="material-ui" type="text" name='contact_email_four' value={this.props.reduxState.venueDetailsReducer.contact_email_four} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Position:</label>
                            <TextField id="material-ui" type="text" name='contact_position_four' value={this.props.reduxState.venueDetailsReducer.contact_position_four} onChange={(event) => this.handleInputChange(event)}></TextField>                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Contacts);