import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsSaga from '../../../../redux/sagas/contactsSaga';
import TextField from '@material-ui/core/TextField';
import {Button, Select} from '@material-ui/core';

class SecondaryContacts extends Component {

    handleDeleteContactButtonClick = (contactId) => {
        this.props.dispatch({ type: 'DELETE_SECONDARY_CONTACT', payload: contactId });
    }

    render() {
        return (
            <>
                {!this.props.contact.is_primary &&
                    <div>
                        <div>
                            <Button color="primary" variant="outlined">Make primary contact</Button>
                            <Button color="secondary" variant="outlined" onClick={() => this.handleDeleteContactButtonClick(this.props.contact.id)}>Delete Contact</Button>
                        </div>
                        <div>
                            <label>Name:</label>
                            <TextField type="text" name="contact_name" value={this.props.contact.contact_name}></TextField>
                        </div>
                        <div>
                            <label>Phone:</label>
                            <TextField type="text" name="contact_phone" value={this.props.contact.contact_phone}></TextField>
                        </div>
                        <div>
                            <label>Email:</label>
                            <TextField type="text" name="contact_email" value={this.props.contact.contact_email}></TextField>
                        </div>
                        <label>Position:</label>
                        <TextField type="text" name="position" value={this.props.contact.position}></TextField>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SecondaryContacts);