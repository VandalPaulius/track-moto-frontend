import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import { Authorization } from './components';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="header">
          <Authorization
            handleRegister={this.props.handleRegister}
            handleLogin={this.props.handleLogin}
          />
        </div>
        <div className="description">
          Track Moto is a free motorcycle tracking service. Just build a tracker by our instructions and you are good to go! (Tracker needs a SIM card with internet access)
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Landing;
