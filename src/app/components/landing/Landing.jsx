import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import { Authorization } from './components';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="header">
          <Authorization />
        </div>
        <div className="description">
          Service description
        </div>
      </div>
    );
  }
}

Landing.propTypes = {

};

Landing.defaultProps = {

};

export default Landing;
