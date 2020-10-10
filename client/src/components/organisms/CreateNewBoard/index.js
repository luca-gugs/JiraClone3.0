import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../../actions/boards';

import Input from '../../atoms/Input';
import { Row } from '../../../utils/GlobalStyles';

import {
  ShowButton,
  PageFill,
  NewBoardForm,
  BackgroundColor,
  Header,
  GoButton,
} from './styles';

const CreateNewBoard = ({ createBoard }) => {
  const [formActive, setFormActive] = useState(false);
  const [title, setTitle] = useState();

  const handleClick = () => {
    setFormActive(!formActive);
  };

  const onSubmit = async e => {
    e.preventDefault();
    createBoard({ title });
    setFormActive(false);
    window.location.reload(false);
  };

  return (
    <div>
      <ShowButton onClick={handleClick}>Start a New Board</ShowButton>
      <PageFill className={formActive ? 'active' : ''}>
        <NewBoardForm>
          <Header>Ready To Make A New Board</Header>
          <div style={{ margin: '1rem 0' }}>
            <Input label='Name Your Board' value={title} onChange={setTitle} />
          </div>
          <GoButton onClick={onSubmit}>Go</GoButton>
        </NewBoardForm>
        <BackgroundColor onClick={handleClick} />
      </PageFill>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { createBoard })(CreateNewBoard);
