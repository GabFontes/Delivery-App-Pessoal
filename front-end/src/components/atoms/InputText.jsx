import React from 'react';

// Com Required
export default function InputText({
  type,
  name,
  testId,
  placeholder,
  onChange,
  value,
}) {
  return (
    <input
      data-testid={ testId }
      type={ type }
      name={ name }
      placeholder={ placeholder }
      onChange={ onChange }
      value={ value }
      required
    />
  );
}
