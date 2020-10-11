import React from 'react';

import { Holder, Text, StyledLink } from './styles';

const BoardCard = ({ title, id }) => {
  return (
    <StyledLink to={`/board/${id}`}>
      <Holder>
        <Text>{title}</Text>
      </Holder>
    </StyledLink>
  );
};
export default BoardCard;
