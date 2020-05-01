import React, { useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';
import Like from '../../assets/like.png';

const CommentHolder = styled.div`
  display: flex;
  background-color: white;
  margin: 1rem 0;
  padding: 1rem;
  width: 30rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15);
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

const CommentItem = ({ data, deleteComment, auth, user, postId }) => {
  console.log(data, 'comment data');

  return (
    <CommentHolder>
      <Gravatar src={data.avatar} />
      <Col>
        <Row style={{ alignItems: 'center', padding: '0.75rem' }}>
          <Name>{data.name}</Name>
          <StyledMoment format='MM/DD HH:mm'>{data.date}</StyledMoment>
          {!auth.loading && data.user === auth.user._id && (
            <button
              type='button'
              style={{
                marginLeft: '1rem',
                backgroundColor: 'red',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => deleteComment(postId, data._id)}
              className='btn btn-danger'
            >
              X
            </button>
          )}
        </Row>
        <Row style={{ alignItems: 'center', padding: '0 0.75rem' }}>
          <Text>{data.text}</Text>
        </Row>
      </Col>
    </CommentHolder>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
