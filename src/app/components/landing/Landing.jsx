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
            user={this.props.user}
            handleRegister={this.props.handleRegister}
            handleLogin={this.props.handleLogin}
          />
        </div>
        <div className="description">
          Service description
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  user: PropTypes.shape({}),
  handleRegister: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

Landing.defaultProps = {
  user: {}
};

export default Landing;
