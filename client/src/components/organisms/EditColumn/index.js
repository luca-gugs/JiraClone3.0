import React, { useState } from 'react';
import { useToggle } from '../../../utils/useToggle';

import EllipsisImg from '../../../assets/ellipsis.png';
import { SettingsButton, SettingsColumn, ItemRow } from './styles';

const EditColumn = ({ changeTitleActiveState }) => {
  const [active, setActive] = useState(false);
  const { ref, isOpen, setIsOpen } = useToggle(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SettingsButton src={EllipsisImg} onClick={isOpenHandler} />
      <SettingsColumn className={isOpen ? 'active' : ''} ref={ref}>
        <ItemRow onClick={changeTitleActiveState}>Edit Column Name</ItemRow>
        <ItemRow>Delete Column</ItemRow>
      </SettingsColumn>
    </div>
  );
};

export default EditColumn;
