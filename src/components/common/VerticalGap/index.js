import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

const VerticalGap = ({ height = 0 }) => {
  return <div className={Style.gap} style={{ height: `${height}px` }}></div>;
};

VerticalGap.propTypes = {
  height: PropTypes.string,
};

export default VerticalGap;
