import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Settings extends React.Component {
  render() {
    console.log('Settings this.props', this.props);
    return (
      <div className="settings">
        Settings
      </div>
    );
  }
}

Settings.propTypes = {
  
};

Settings.defaultProps = {

};

export default Settings;
