import React from 'react';
// import PropTypes from 'prop-types';

export default function SelectInput({ sellerOptions, sellerValue }) {
  const sellers = sellerOptions();

  return (
    <select
      data-testid="customer_checkout__select-seller"
      onChange={ sellerValue }
    >
      {
        sellers.map((name, id, index) => (
          <option value={ id } key={ index }>{ name }</option>
        ))
      }
    </select>
  );
}

SelectInput.propTypes = {
  sellerOptions: PropTypes.func.isRequired,
  sellerValue: PropTypes.func.isRequired,
};
