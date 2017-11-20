import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import { Sidebar, Map } from './components';

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <Sidebar
          handleLogout={this.props.handleLogout}
        />
        <Map />
      </div>
    );
  }
}

Panel.propTypes = {
  user: PropTypes.shape({}),
  handleLogout: PropTypes.func.isRequired,
};

Panel.defaultProps = {
  user: {}
};

export default Panel;
