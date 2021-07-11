import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SearchAdmin = ({ onFilter }) => {
  return (
    <>
      <input
        data-testid="search"
        id="search"
        type="text"
        placeholder="Search by name, email or role"
        onChange={onFilter}
      />
    </>
  );
};

SearchAdmin.propTypes = {
  onFilter: PropTypes.func,
};

export default React.memo(SearchAdmin);
