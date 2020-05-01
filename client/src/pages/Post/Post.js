import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getPost } from '../../actions/post';

import Navbar from '../../components/NavBar/Navbar';
import Spinner from '../../utils/Spinner';

import PostItem2 from '../../components/PostItem2/PostItem2';

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

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  console.log(post, 'post');
  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData style={{ alignItems: 'center' }}>
        {post ? <PostItem2 data={post} /> : <Spinner />}
      </PageData>
    </Holder>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);
