import React, { useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import Like from '../../assets/like.png';

const CommentHolder = styled.div`
  display: flex;
  background-color: white;
  margin: 1rem 0;
  padding: 1rem;
  width: 30rem;
`;

const Gravatar = styled.img`
  height: 3rem;
  border-radius: 5rem;
  margin: 1rem 1rem auto 1rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
`;
const Name = styled.div`
  margin-right: 1rem;
`;
const Text = styled.div`
  font-size: 1.5rem;
  min-width: 425px;
`;
const StyledMoment = styled(Moment)`
  font-size: 0.75rem;
`;
const LikeButton = styled.img`
  height: 5rem;
  :hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;
const LikeCount = styled.div``;

const ShowCommentsButton = styled.div``;

const CommentItem = ({ data }) => {
  console.log(data, 'comment data');

  return (
    <CommentHolder>
      <Gravatar src={data.avatar} />
      <Col>
        <Row style={{ alignItems: 'center', padding: '0.75rem' }}>
          <Name>{data.name}</Name>
          <StyledMoment format='MM/DD HH:mm'>{data.date}</StyledMoment>
        </Row>
        <Row style={{ alignItems: 'center', padding: '0 0.75rem' }}>
          <Text>{data.text}</Text>
        </Row>
      </Col>
    </CommentHolder>
  );
};

export default CommentItem;
