import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';

class Admin extends Component {

  state = {
    username: '',
    password: '',
  };

  componentDidMount = () => {
    this.getUsers();
  }

  getUsers = () => {
    console.log("getting users")
    this.props.dispatch({ type: 'GET_USERS' });
  }

  handleDelete = (id) => {
    console.log("delete click", "this is id", id)
    this.props.dispatch({ type: 'DELETE_USERS', payload: id });
  }

  registerUser = (event) => {
    console.log("registering user")
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }



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

        {/* 
        these conditional renders need to be consolidated */}

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
            <button onClick={this.registerUser}> submit </button>
          )}
        </div>

        {this.props.user.is_admin && (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {this.props.allUsers.map((users) => {
                return (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.username}</td>
                    <td><button key={users.id} onClick={() => { if (window.confirm('Are you sure you wish to delete this user? This cannot be undone.')) this.handleDelete(users.id) }}> delete </button></td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        )}

      </div >

    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Admin);
