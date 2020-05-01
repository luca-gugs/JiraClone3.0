import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

import AddPostButton from '../../assets/addPostButton.png';
import CloseFormIcon from '../../assets/closeForm.png';

const FormArea = styled.textarea`
  font-size: ${(props) => (props.count < 30 ? '1.6rem' : '1rem')};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15);
  resize: none;
  display: flex;
  width: 35rem;
  margin: 1rem 0;
  height: 10rem;
  padding: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;

const SubmitPostButton = styled.div`
  padding: 0.5rem 3rem;
  border-radius: 5rem;
  font-size: 1.2rem;
  color: white;
  background-color: #1890ff;
`;

const AddPostClicker = styled.img`
  height: 3rem;
  margin-left: 1rem;
  :hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [posting, setPosting] = useState(false);
  const [wordCount, setCount] = useState(0);

  useEffect(() => {
    setCount(WordCount(text));
  }, [text]);

  function WordCount(str) {
    return str.split(' ').length;
  }

  console.log(wordCount, 'wordCount');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        alignItems: 'center',
      }}
    >
      <Row
        style={{
          flexDirection: 'row-reverse',
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
      {posting && (
        <FormArea
          name='texts'
          placeholder='Share your thoughts with the world'
          value={text}
          onChange={(e) => setText(e.target.value)}
          count={wordCount}
        />
      )}
      {text.length > 0 && posting && (
        <Row style={{ justifyContent: 'center' }}>
          <SubmitPostButton
            onClick={(e) => {
              e.preventDefault();
              addPost({ text });
              setPosting(false);
            }}
          >
            Post
          </SubmitPostButton>
        </Row>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addPost })(PostForm);
