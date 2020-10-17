import React, { useState, useEffect, useCallback } from 'react';
import { BaseInput } from './styles';

const Input = ({ label, value, onChange, ...otherProps }) => {
  const [localValue, setLocalValue] = useState();

  useEffect(() => {
    if (value) {
      setLocalValue(value);
    }
  }, [value]);

  const handleChange = useCallback(
    event => {
      const newValue = event.target.value;
      onChange ? onChange(newValue) : setLocalValue(newValue);
    },
    [onChange]
  );

  return (
    <BaseInput
      placeholder={label || 'Label'}
      value={localValue}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default Input;
