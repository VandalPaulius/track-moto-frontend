import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import * as panelActions from './Panel.actions';
import { Sidebar, Map } from './components';

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <Sidebar
          handleLogout={this.props.handleLogout}
          user={this.props.user}
          handleLoadTrackers={this.props.actions.handleLoadTrackers}
        />
        <Map />
      </div>
    );
  }
}

Panel.propTypes = {
  user: PropTypes.shape({}),
  handleLogout: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    handleLoadTrackers: PropTypes.func.isRequired
  }).isRequired
};

Panel.defaultProps = {
  user: {}
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(panelActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Panel);
