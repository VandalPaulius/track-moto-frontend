import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as appActions from './App.actions';
import { Styles } from './assets'; // eslint-disable-line

class App extends Component {
  render() {
    if (this.props.authorized) {
      return (
        <div>
          Map
        </div>
      );
    }
    return (
      <div className="App">
        Landing
      </div>
    );
  }
}

App.propTypes = {
  authorized: PropTypes.bool
};

App.defaultProps = {
  authorized: false
};

const mapStateToProps = state => ({
  authorized: state.app.authorized,
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(appActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);

