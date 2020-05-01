import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addComment } from '../../actions/post';

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

const CommentForm = ({ addComment, postId }) => {
  const [text, setText] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        alignItems: 'center',
      }}
    >
      <FormArea
        name='texts'
        placeholder='Comment'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Row style={{ justifyContent: 'center' }}>
        <SubmitPostButton
          onClick={(e) => {
            e.preventDefault();
            addComment(postId, { text });
            setText('');
          }}
        >
          Post
        </SubmitPostButton>
      </Row>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });
export default connect(null, { addComment })(CommentForm);
