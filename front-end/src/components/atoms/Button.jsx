import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  nameView,
  disabled,
  testid,
  onClick,
  name,
}) {
  return (
    <button
      type="button"
      data-testid={ testid }
      onClick={ onClick }
      disabled={ disabled }
      name={ name }
    >
      { nameView }
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  nameView: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};
