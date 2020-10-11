import React, { useState, useEffect } from 'react';
import { colors } from './colorData';

import {
  Holder,
  SelectRow,
  ColorButton,
  Circle,
  NoneButton,
  Underline,
} from './styles';

const CardColorSelect = ({ value, onChange }) => {
  const [color, setColor] = useState('none');

  useEffect(() => {
    if (value) {
      setColor(value);
    }
  }, [value]);

  const colorChangeHandler = newColor => {
    onChange ? onChange(newColor) : setColor(newColor);
  };

  return (
    <Holder>
      {colors.map((elm, idx) => {
        return (
          <div>
            {elm.color ? (
              <ColorButton onClick={() => colorChangeHandler(elm.name)}>
                <Circle color={elm.color} />
                <Underline className={color === elm.name ? 'active' : ''} />
              </ColorButton>
            ) : (
              <NoneButton onClick={() => colorChangeHandler(elm.name)}>
                None
                <Underline className={color === elm.name ? 'active' : ''} />
              </NoneButton>
            )}
          </div>
        );
      })}
    </Holder>
  );
};

export default CardColorSelect;
