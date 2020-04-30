import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getPosts } from '../../actions/post';

import Navbar from '../../components/NavBar/Navbar';
import PostForm from '../../components/PostForm/PostForm';
import PostItem from '../../components/PostItem/PostItem';
import Spinner from '../../utils/Spinner';

import AddPostButton from '../../assets/addPostButton.png';
import CloseFormIcon from '../../assets/closeForm.png';

export const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PageData = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  min-height: 90vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Row = styled.div`
  display: flex;
`;

const AddPostClicker = styled.img`
  height: 3rem;
  margin-left: 1rem;
  :hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

const Posts = ({ getPosts, post: { posts, loading } }) => {
  const [posting, setPosting] = useState(false);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData style={{ alignItems: 'center' }}>
        <Row
          style={{
            flexDirection: 'row-reverse',
            width: '90%',
            alignItems: 'center',
          }}
        >
          {!posting && (
            <AddPostClicker
              src={AddPostButton}
              onClick={() => setPosting(true)}
            />
          )}
          {!posting && 'Add Post'}

          {posting && (
            <AddPostClicker
              src={CloseFormIcon}
              onClick={() => setPosting(false)}
            />
          )}
          {posting && 'Close Post Form'}
        </Row>
        {posting && <PostForm />}
        {posts && posts.length > 1 ? (
          posts.map((elm) => {
            return <PostItem data={elm} />;
          })
        ) : (
          <Spinner />
        )}
      </PageData>
    </Holder>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Posts);
