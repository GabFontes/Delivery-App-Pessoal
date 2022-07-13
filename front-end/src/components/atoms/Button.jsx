import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  nameView,
  disabled,
  testId,
  onClick,
  name,
}) {
  return (
    <button
      type="submit"
      data-testid={ testId }
      onClick={ onClick }
      disabled={ disabled }
      name={ name }
    >
      { nameView }
    </button>
  );
}

Button.propTypes = {
  nameView: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  testId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
