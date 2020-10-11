import React from 'react';

import BoardCard from '../../atoms/BoardCard';
import { DisplayRow } from './styles';

const BoardDisplay = ({ boards }) => {
  return (
    <DisplayRow>
      {boards &&
        boards.boards.map((elm, idx) => {
          return <BoardCard title={elm.title} id={elm._id} key={idx} />;
        })}
    </DisplayRow>
  );
};

export default BoardDisplay;
