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

  drawerLeft = () => {
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
        className={`drawer ${this.state.drawerOpen === 'left' && 'open'}`}
      >
        drawerLeft
      </div>
    )
  }

  drawerRight = () => {
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
        className={`drawer ${this.state.drawerOpen === 'right' && 'open'}`}
      >
        drawerRight
      </div>
    )
  }

  render() {
    console.log('this.state', this);
    return (
      <div className="authorization">
        {this.drawerLeft()}
        {this.drawerRight()}
      </div>
    );
  }
}

Authorization.propTypes = {

};

Authorization.defaultProps = {

};

export default Authorization;
