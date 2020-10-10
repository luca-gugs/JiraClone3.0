import React from 'react';
import { Link } from 'react-router-dom';

import { Holder, Text } from './styles';

const BoardCard = ({ title, id }) => {
  console.log(title, 'title');
  return (
    // <Link to={`/board/${id}`}>
    <Holder>
      <Text>{title}</Text>
    </Holder>
    // </Link>
  );
};
export default BoardCard;
