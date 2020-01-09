import React, { Component } from 'react';
import { connect } from 'react-redux';

class SecondaryContacts extends Component {

    render() {
        return (
         <div>
             Secondary Contacts
         </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SecondaryContacts);