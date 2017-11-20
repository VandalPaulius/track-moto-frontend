import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Authorization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: ''
    }
  }

  drawerLeft = ({ isOpen }) => {
    const loginForm = () => (
      <div>
        <div className="item">
          <span className="label">email</span>
          <input className="value" />
        </div>
        <div className="item">
          <span className="label">password</span>
          <input className="value" />
        </div>
      </div>
    );

    const loginButton = ({ className }) => (
      <button
        className={className}
        onClick={() => this.props.handleLogin({})}
      >
        Log in
      </button>
    );

    return (
      <div
        onMouseEnter={() => this.setState((state) => ({
          ...state,
          drawerOpen: 'left'
        }))}
        onMouseLeave={() => this.setState((state) => ({
          ...state,
          drawerOpen: ''
        }))}
        className={`drawer ${isOpen && 'open'}`}
      >
        <div className="auth-form">
          {isOpen && loginForm()}
            <div className="button-panel">
              {loginButton({ className: 'button light' })}
            </div>
        </div>
      </div>
    )
  }

  drawerRight = ({ isOpen }) => {
    const registerForm = () => (
      <div>
        <div className="item">
          <span className="label">email</span>
          <input className="value" />
        </div>
        <div className="item">
          <span className="label">password</span>
          <input className="value" />
        </div>
        <div className="item">
          <span className="label">password repeat</span>
          <input className="value" />
        </div>
      </div>
    );

    const registerButton = ({ className }) => (
      <button
        className={className}
        onClick={() => this.props.handleRegister({})}
      >
        Register
      </button>
    );

    return (
      <div
        onMouseEnter={() => this.setState((state) => ({
          ...state,
          drawerOpen: 'right'
        }))}
        onMouseLeave={() => this.setState((state) => ({
          ...state,
          drawerOpen: ''
        }))}
        className={`drawer ${isOpen && 'open'}`}
      >
        <div className="auth-form">
          {isOpen && registerForm()}
          <div  className="button-panel">
            {registerButton({ className: 'button light' })}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="authorization">
        {this.drawerLeft({ isOpen: this.state.drawerOpen  === 'left' })}
        {this.drawerRight({ isOpen: this.state.drawerOpen  === 'right' })}
      </div>
    );
  }
}

Authorization.propTypes = {
  user: PropTypes.shape({}),
  handleRegister: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
};

Authorization.defaultProps = {

};

export default Authorization;
