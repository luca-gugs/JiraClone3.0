import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const FormArea = styled.textarea`
  font-size: ${(props) => (props.count < 30 ? '1.6rem' : '1rem')};
  resize: none;
  display: flex;
  width: 35rem;
  height: 10rem;
  padding: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
`;

const PostForm = (props) => {
  const [formData, setFormData] = useState('');
  const [wordCount, setCount] = useState(0);

  useEffect(() => {
    setCount(WordCount(formData));
  }, [formData]);

  function WordCount(str) {
    return str.split(' ').length;
  }

  console.log(wordCount, 'wordCount');

  return (
    <div>
      <FormArea
        name='texts'
        placeholder='Share your thoughts with the world'
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
        count={wordCount}
      />
      {formData.length > 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            addPost({ formData });
          }}
        ></button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addPost })(PostForm);
