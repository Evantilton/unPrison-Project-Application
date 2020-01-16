import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
// styling imports
import Container from '@material-ui/core/Container';
import { TextField, Button, Paper } from '@material-ui/core';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Container id="logContainer"> <Paper id="logPaper"> <div className="logDiv">
          {this.props.errors.loginMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.loginMessage}
            </h2>
          )}
          
            <div id="logTitle">Login</div>
            

                <TextField
                  label="Username"
                  id="userInput"
                  variant="outlined"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />

                <br /><br />
                
                <TextField
                  id="userPass"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />

             <br />
             <br/><div align="center">
              <Button variant="contained" className="logButtons" color="primary" onClick={this.login} disableElevation>Login</Button>
              <br />
              </div>
              </div>
              </Paper>
      
        </Container>
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

export default connect(mapStateToProps)(LoginPage);
