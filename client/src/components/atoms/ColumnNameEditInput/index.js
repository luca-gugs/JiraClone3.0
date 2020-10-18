import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeColumnName } from '../../../actions/columns';

import Input from '../Input';
import { Holder, SubmitIcon } from './styles';

import CheckmarkImg from '../../../assets/check-mark.png';

const ColumnNameEditInput = ({
  currentTitle,
  columnId,
  changeTitleActiveState,
  changeColumnName,
}) => {
  const [title, setNewTitle] = useState();

  useEffect(() => {
    if (currentTitle) {
      setNewTitle(currentTitle);
    }
  }, [currentTitle]);

  const onSubmit = async e => {
    e.preventDefault();
    changeColumnName({ columnId, title });
    setTimeout(function () {
      changeTitleActiveState();
    }, 400);
  };

  return (
    <Holder>
      <Input
        style={{ marginRight: '1rem' }}
        value={title}
        onChange={setNewTitle}
      />
      <SubmitIcon src={CheckmarkImg} onClick={e => onSubmit(e)} />
    </Holder>
  );
};

export default connect(null, { changeColumnName })(ColumnNameEditInput);
