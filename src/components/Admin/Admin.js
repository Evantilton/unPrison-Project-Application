import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';

class Admin extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
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


        {/* <form onSubmit={this.registerUser}> */}
          <p>Register New User</p>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <button onClick={this.registerUser}> submit </button>
            {/* <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            /> */}
          </div>
        {/* </form> */}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
          <tr>
            <td>2</td>
            <td>Fred</td>
            <td><button>delete</button></td>
          </tr>
          
          <tr>
            <td>3</td>
            <td>Bob</td>
            <td><button>delete</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Admin);