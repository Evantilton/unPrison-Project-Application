import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {Button, Select} from '@material-ui/core';

class SecondaryContacts extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_CONTACTS' });
    }

    handleDeleteContactButtonClick = (contactId) => {
        this.props.dispatch({ type: 'DELETE_SECONDARY_CONTACT', payload: contactId });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_SECONDARY_CONTACTS', payload: { value: event.target.value, property: event.target.name } });
    }

    render() {
        return (
            <>
            {this.props.reduxState.contactsReducer.map((contact) => {
                        return(
                    <div>
                        <div>
                            <Button color="primary" variant="outlined">Make primary contact</Button>
                            <Button color="secondary" variant="outlined" onClick={() => this.handleDeleteContactButtonClick(contact.id)}>Delete Contact</Button>
                        </div>
                        <div>
                            <label>Name:</label>
                            <TextField type="text" name="contact_name" value={contact.contact_name} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </div>
                        <div>
                            <label>Phone:</label>
                            <TextField type="text" name="contact_phone" value={contact.contact_phone} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </div>
                        <div>
                            <label>Email:</label>
                            <TextField type="text" name="contact_email" value={contact.contact_email} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </div>
                        <label>Position:</label>
                        <TextField type="text" name="position" value={contact.position} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </div>
            )})
        }
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SecondaryContacts);