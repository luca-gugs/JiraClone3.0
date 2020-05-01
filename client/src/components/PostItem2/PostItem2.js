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
  margin: 1rem 1rem 1rem 1rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
`;
const Name = styled.div`
  text-align: center;
`;
const Text = styled.div`
  font-size: 1.5rem;
  min-width: 425px;
  margin: 1rem 0;
`;
const StyledMoment = styled(Moment)`
  font-size: 0.75rem;
  margin-left: 0.5rem;
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

const PostItem2 = ({ data, addLike, removeLike, auth, deletePost }) => {
  const [showComments, setShowComments] = useState(false);
  console.log(data, 'data');
  console.log(auth, 'auth');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <PostHolder>
        <Row style={{ margin: '0.5rem' }}>
          <Col style={{ alignItems: 'center' }}>
            <Gravatar src={data.avatar} />
            <Name>
              <Link
                style={{ textAlign: 'center' }}
                to={`/profile/${data.user}`}
              >
                {data.name}
              </Link>
            </Name>
          </Col>

          <Col>
            <Row style={{ alignItems: 'center', padding: '0 0.75rem' }}>
              <Text>{data.text}</Text>
            </Row>

            <Row
              style={{
                alignItems: 'center',
                padding: '0.75rem',
                fontSize: '0.75rem',
              }}
            >
              Posted On{' '}
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
                  onClick={() => deletePost(data._id)}
                  className='btn btn-danger'
                >
                  X
                </button>
              )}
            </Row>
          </Col>
        </Row>
      </PostHolder>
      <Row style={{ marginLeft: '2rem' }}>
        {data.comments.length > 0
          ? data.comments.map((elm) => {
              return <CommentItem data={elm} postId={data._id} />;
            })
          : 'better luck next time... ya bitch'}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem2
);
