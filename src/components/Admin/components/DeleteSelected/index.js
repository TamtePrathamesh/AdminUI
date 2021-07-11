import React from 'react';
import PropTypes from 'prop-types';
import { WithBoundary } from '../../../common';

import './style.css';

const DeleteSelected = ({ deleteSelected }) => {
  return (
    <div className="footer">
      <button data-testid="deleteSelected" className="deleteSelected" onClick={() => deleteSelected()}>
        Delete Selected
      </button>
    </div>
  );
};

DeleteSelected.propTypes = {
  deleteSelected: PropTypes.func,
};

export default WithBoundary(React.memo(DeleteSelected));
