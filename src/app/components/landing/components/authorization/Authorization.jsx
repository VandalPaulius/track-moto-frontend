import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import { Styles } from './assets'; // eslint-disable-line
import { LoginForm, RegisterForm } from './components';

class Authorization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: ''
    };
  }

  drawerLeft({ isOpen }) {
    return (
      <div
        onClick={() => this.setState((state) => ({
          ...state,
          drawerOpen: 'left'
        }))}
        className={`drawer ${isOpen && 'open'}`}
      >
        <div>
          {isOpen ? (
            <LoginForm
              form="loginForm"
              onSubmit={this.props.handleLogin}
            />
          ) : (
            <div>
              Login
            </div>
          )}
        </div>
      </div>
    );
  }

  drawerRight({ isOpen }) {
    return (
      <div
        onClick={() => this.setState(state => ({
          ...state,
          drawerOpen: 'right'
        }))}
        className={`drawer ${isOpen && 'open'}`}
      >
        <div className="auth-form">
          {isOpen ? (
            <RegisterForm
              form="registerForm"
              onSubmit={this.props.handleRegister}
            />
          ) : (
            <div>
              Register
            </div>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="authorization">
        {this.drawerLeft({ isOpen: this.state.drawerOpen === 'left' })}
        {this.drawerRight({ isOpen: this.state.drawerOpen === 'right' })}
      </div>
    );
  }
}

Authorization.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
};

Authorization.defaultProps = {

};

export default connect()(Authorization);
