import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '../../../../../images/delete.png';
import EditIcon from '../../../../../images/editing.png';

import { WithBoundary } from '../../../../../common';

import './style.css';

const AdminActions = ({ onDelete = () => null, onEditMode = () => null, id = '' }) => {
  return (
    <>
      <div className="actionItems">
        <img
          data-testid="editRow"
          src={EditIcon}
          alt="cant display"
          className="actionIcons"
          onClick={() => onEditMode(true)}
        />
        <img
          data-testid="deleteRow"
          src={DeleteIcon}
          alt="cant display"
          className="actionIcons"
          onClick={() => onDelete(id)}
        />
      </div>
    </>
  );
};

AdminActions.propTypes = {
  onDelete: PropTypes.func,
  onEditMode: PropTypes.func,
  id: PropTypes.string,
};

export default WithBoundary(React.memo(AdminActions));
