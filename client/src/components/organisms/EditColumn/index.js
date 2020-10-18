import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteColumn } from '../../../actions/columns';
import { useToggle } from '../../../utils/useToggle';

import EllipsisImg from '../../../assets/ellipsis.png';
import { SettingsButton, SettingsColumn, ItemRow } from './styles';

const EditColumn = ({
  changeTitleActiveState,
  columnId,
  boardId,
  deleteColumn,
}) => {
  const [active, setActive] = useState(false);
  const { ref, isOpen, setIsOpen } = useToggle(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const deleteColumnHandler = () => {
    deleteColumn({ columnId, boardId });
  };

  return (
    <div>
      <SettingsButton src={EllipsisImg} onClick={isOpenHandler} />
      <SettingsColumn className={isOpen ? 'active' : ''} ref={ref}>
        <ItemRow onClick={changeTitleActiveState}>Edit Column Name</ItemRow>
        <ItemRow onClick={deleteColumnHandler}>Delete Column</ItemRow>
      </SettingsColumn>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteColumn })(EditColumn);
