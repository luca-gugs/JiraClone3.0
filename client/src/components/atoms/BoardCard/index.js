import React from 'react';

import { Holder, Text, StyledLink } from './styles';

const BoardCard = ({ title, id }) => {
  console.log(title, 'title');
  return (
    <StyledLink to={`/board/${id}`}>
      <Holder>
        <Text>{title}</Text>
      </Holder>
    </StyledLink>
  );
};
export default BoardCard;
