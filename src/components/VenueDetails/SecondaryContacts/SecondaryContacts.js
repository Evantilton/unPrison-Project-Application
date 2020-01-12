import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {Button, Select} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

class SecondaryContacts extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_CONTACTS', payload: this.props.venueId });
    }

    handleDeleteContactButtonClick = (contactId) => {
        this.props.dispatch({ type: 'DELETE_SECONDARY_CONTACT', payload: contactId });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_SECONDARY_CONTACTS', payload: { value: event.target.value, property: event.target.name } });
    }

    addSecondaryContactButtonClick = () => {
        this.props.dispatch({ type: 'ADD_SECONDARY_CONTACT', payload: this.props.VenueId });
    }

    handleMakePrimaryContactButtonClick = (contactId) => {
        this.props.dispatch({ type: 'MARK_CONTACT_AS_PRIMARY', payload: { contactId: contactId, venueId: this.props.venueId } });
    }

    handleSaveChangesButtonClick = () => {
        this.props.dispatch({ type: 'SAVE_VENUES_CONTACTS', payload: this.props.reduxState.secondaryContactsReducer });
    }

    render() {
        if(this.props.reduxState.contactsReducer[0]) {
            return(
            <>
            <div>
            <Button startIcon={<Icon>save</Icon>} variant="contained" color="primary" className="tabButtonPosition" onClick={this.handleSaveChangesButtonClick}>Save Changes</Button>
            </div>
            <div>
            <Button color="primary" variant="outlined" onClick={this.addSecondaryContactButtonClick}>Add Secondary contact</Button>
            </div>
            {this.props.reduxState.contactsReducer.map((contact) => {
                        return(
                    <div>
                        <div>
                            <Button color="primary" variant="outlined" onClick={() => this.handleMakePrimaryContactButtonClick(contact.id)}>Make primary contact</Button>
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
            )} else {
                return(
                    <div>
                        There are currently no secondary contacts for this venue.
                    </div>
                )
            }
    }
    }

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SecondaryContacts);