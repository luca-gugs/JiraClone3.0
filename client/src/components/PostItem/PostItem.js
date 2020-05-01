import React, { useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import Like from '../../assets/like.png';
import Dislike from '../../assets/dislike.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addLike, removeLike, deletePost } from '../../actions/post';

import CommentItem from '../CommentItem/CommentItem';

const PostHolder = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15);
  margin: 1rem 0;
  padding: 1rem;
  width: 40rem;
`;

const Gravatar = styled.img`
  height: 5rem;
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

const PostItem = ({ data, addLike, removeLike, auth, deletePost }) => {
  const [showComments, setShowComments] = useState(false);
  console.log(data, 'data');
  console.log(auth, 'auth');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <PostHolder>
        <Row style={{ margin: '0.5rem' }}>
          <Gravatar src={data.avatar} />
          <Col>
            <Row style={{ alignItems: 'center', padding: '0.75rem' }}>
              <Link to={`/profile/${data.user}`}>
                <Name>{data.name}</Name>
              </Link>
              <StyledMoment format='MM/DD HH:mm'>{data.date}</StyledMoment>
              {!auth.loading && data.user === auth.user._id && (
                <button
                  type='button'
                  onClick={() => deletePost(data._id)}
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
          <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
            <LikeButton onClick={(e) => addLike(data._id)} src={Like} />
            <LikeCount>{data.likes.length}</LikeCount>
            <LikeButton onClick={(e) => removeLike(data._id)} src={Dislike} />
          </Col>
        </Row>

        <Row style={{ margin: '0.5rem' }}>
          <Link to={`posts/${data._id}`}>
            {data.comments.length > 1
              ? `${data.comments.length} Comments`
              : 'Join the Conversation'}
          </Link>
        </Row>
      </PostHolder>
      <Row style={{ marginLeft: '2rem' }}>
        {showComments &&
          data.comments.map((elm) => {
            return <CommentItem data={elm} />;
          })}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
