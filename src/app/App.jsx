import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as appActions from './App.actions';
import { Styles } from './assets'; // eslint-disable-line
import { Landing, Panel } from './components';

class App extends Component {
  render() {
    if (this.props.user.authorized) {
      return (
        <div>
          <Panel
            handleLogout={this.props.actions.handleLogout}
          />
        </div>
      );
    }
    return (
      <div>
        <Landing
          user={this.props.user}
          handleRegister={this.props.actions.handleRegister}
          handleLogin={this.props.actions.handleLogin}
        />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({
    authorized: PropTypes.bool
  })
};

App.defaultProps = {
  user: {
    authorized: true //false //dev
  }
};

const mapStateToProps = state => ({
  user: state.app.user
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(appActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);

