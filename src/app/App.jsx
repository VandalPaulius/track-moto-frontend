import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as appActions from './App.actions';
import { Styles } from './assets'; // eslint-disable-line
import { Landing } from './components';

class App extends Component {
  render() {
    if (this.props.user.authorized) {
      return (
        <div>
          Map
        </div>
      );
    }
    return (
      <div>
        <Landing
          user={this.props.user}
          handleSetAuthorizedStatus={this.props.actions.handleSetAuthorizedStatus}
          handleRegister={this.props.actions.handleRegister}
          handleLogin={this.props.actions.handleLogin}
        />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    handleSetAuthorizedStatus: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({
    authorized: PropTypes.bool
  })
};

App.defaultProps = {
  user: {
    authorized: false
  }
};

const mapStateToProps = state => ({
  user: state.app.user
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(appActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);

