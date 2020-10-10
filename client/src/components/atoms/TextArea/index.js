import React, { useState, useEffect, useCallback } from 'react';
import { BaseTextArea } from './styles';

const TextArea = ({ label, value, onChange }) => {
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
    <BaseTextArea
      placeholder={label || 'Label'}
      value={localValue}
      onChange={handleChange}
    />
  );
};

export default TextArea;
