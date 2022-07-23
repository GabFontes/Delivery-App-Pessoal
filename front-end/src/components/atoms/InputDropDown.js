import PropTypes from 'prop-types';
import React from 'react';

// Falta corrigir o map: dropdown e valores com os nomes corretos

export default function InputDropDown({
  name,
  testid,
  options,
  onChange,
}) {
  return (
    <select
      name={ name }
      data-testid={ testid }
      onChange={ onChange }
    >
      { options
        .map((option) => <option key={ option } value={ option }>{ option }</option>) }
    </select>
  );
}

InputDropDown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
