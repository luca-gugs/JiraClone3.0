import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCard } from '../../../actions/cards';

import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import CardColorSelect from '../../atoms/CardColorSelect';

import PlusImg from '../../../assets/plus.png';

import { Row } from '../../../utils/GlobalStyles';

import {
  ShowButton,
  PageFill,
  NewBoardForm,
  BackgroundColor,
  Header,
  GoButton,
  ShowIcon,
} from './styles';

const CreateNewCard = ({ createCard, id }) => {
  const [formActive, setFormActive] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [color, setColor] = useState('none');

  const handleClick = () => {
    setFormActive(!formActive);
  };

  const onSubmit = async e => {
    e.preventDefault();
    createCard({ title, description, columnId: id, color });
    setFormActive(false);
    setTitle('');
    setDescription('');
    setColor('none');
  };

  return (
    <div>
      <ShowIcon onClick={handleClick} src={PlusImg} />
      <PageFill className={formActive ? 'active' : ''}>
        <NewBoardForm>
          <Header>Add a Task</Header>
          <div style={{ margin: '1rem 0', width: '100%' }}>
            <Input label='Name Your Card' value={title} onChange={setTitle} />
          </div>
          <div style={{ margin: '1rem 0', width: '100%' }}>
            <TextArea
              label='Set A Description'
              value={description}
              onChange={setDescription}
            />
          </div>
          <div style={{ margin: '1rem 0 2rem 0' }}>
            <CardColorSelect value={color} onChange={setColor} />
          </div>

          <GoButton onClick={onSubmit}>Go</GoButton>
        </NewBoardForm>
        <BackgroundColor onClick={handleClick} />
      </PageFill>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { createCard })(CreateNewCard);
