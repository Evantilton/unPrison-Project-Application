import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';

class Admin extends Component {

  state = {
    username: '',
    password: '',
  };

  componentDidMount = () => {
    this.getUsers();
  }

  //this gets all the non-admin users
  getUsers = () => {
    this.props.dispatch({ type: 'GET_USERS' }); 
  } //end getUsers

  //this handles the delete for the specific user
  handleDelete = (id) => {
    this.props.dispatch({ type: 'DELETE_USERS', payload: id });
  } //end handleDelete

  //this registers a new non-admin user with a username and password
  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          is_admin: false,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  //this handles the inputs for the username and password to set the state
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  } //end handleInputChange

  render() {
    return (

      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        {/* conditional renders to show inputs for only admin only for admin */}
        {/* this the inputs and buttons to register a new user */}
        {this.props.user.is_admin && (
          <p>Register New User</p>
        )}
        <div>
          {this.props.user.is_admin && (
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          )}
        </div>
        <div>
          {this.props.user.is_admin && (
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          )}
        </div>
        <div>
          {this.props.user.is_admin && (
            <Button id="material-ui" variant="contained" color="Primary" onClick={this.registerUser}> submit </Button>
          )}
        </div>
        {/* conditional renders to shows only for admin */}
        {/* This is the table of users */}
        {this.props.user.is_admin && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Username</TableCell>
                <TableCell></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.allUsers.map((users) => {
                return (
                  <TableRow id="TableRow" key={users.id}>
                    <TableCell>{users.id}</TableCell>
                    <TableCell>{users.username}</TableCell>
                    <TableCell><Button key={users.id} onClick={() => { if (window.confirm('Are you sure you wish to delete this user? This cannot be undone.')) this.handleDelete(users.id) }}> delete </Button></TableCell>
                  </TableRow>
                )
              })
              }
            </TableBody>
          </Table>
        )}
      </div >
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Admin);
