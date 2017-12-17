import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

function Tile(props) {
  return (
    <div className="tile">
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}

Tile.propTypes = {
  children: PropTypes.node.isRequired
};

Tile.defaultProps = {

};

export default Tile;
