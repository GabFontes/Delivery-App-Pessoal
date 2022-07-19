import React from 'react';
import PropTypes from 'prop-types';

// Com Required
export default function InputText({
  type,
  name,
  testid,
  placeholder,
  onChange,
  value,
}) {
  return (
    <input
      data-testid={ testid }
      type={ type }
      name={ name }
      placeholder={ placeholder }
      onChange={ onChange }
      value={ value }
      required
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
