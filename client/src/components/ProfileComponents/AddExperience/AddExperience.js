import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addExperience } from '../../../actions/profile';

import Navbar from '../../NavBar/Navbar';

const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const PageData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 90vh;
`;

const BioSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 40rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  background-color: white;
  margin: 3rem 0;
`;
const Row = styled.div`
  display: flex;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`;

const Label = styled.div``;

const StyledInput = styled.input`
  width: 12rem;
  height: 1rem;
  padding: 0.25rem 0.2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f4f6f8;
  :focus {
    outline: none;
  }
`;
const DescriptionInput = styled.textarea`
  resize: none;
  display: flex;
  width: 12rem;
  height: 5rem;
  padding: 0.25rem 0.2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f4f6f8;
  :focus {
    outline: none;
  }
`;
const DateInput = styled.input`
  width: 7.25rem;
  height: 1rem;
  padding: 0.25rem 0.2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f4f6f8;
  :focus {
    outline: none;
  }
`;
const CheckBox = styled.input``;

const SubmitButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 3rem;
  color: white;
  background-color: #1890ff;
  text-decoration: none;
  border-radius: 3rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12);

  :hover {
    transform: scale(1.03);
  }
`;

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData className='pageData'>
        <Row>Add Experience</Row>

        <BioSection className='bioSection'>
          {/* Company */}
          <Row style={{ margin: '1rem 1rem' }}>
            <FormItem>
              <Label>Company Name</Label>
              <StyledInput
                type='text'
                placeholder='Google'
                name='company'
                value={company}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>

          {/* Location */}
          <Row style={{ margin: '1rem 1rem' }}>
            <FormItem>
              <Label>Location</Label>
              <StyledInput
                type='text'
                placeholder='San Francisco, CA'
                name='location'
                value={location}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>

          {/* Role */}
          <Row style={{ margin: '1rem 1rem' }}>
            <FormItem>
              <Label>Role</Label>
              <StyledInput
                type='text'
                placeholder='Salesman, Product Manager, etc.'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>

          {/* From/To */}
          <Row style={{ margin: '1rem 1rem' }}>
            <FormItem>
              <Label>From</Label>
              <DateInput
                type='date'
                placeholder=''
                name='from'
                value={from}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
            <FormItem>
              <Label>To</Label>
              <DateInput
                type={toDateDisabled ? 'text' : 'date'}
                placeholder={toDateDisabled ? 'NA' : ''}
                name='to'
                value={to}
                onChange={(e) => onChange(e)}
                disabled={toDateDisabled ? 'disabled' : ''}
              />
            </FormItem>
          </Row>

          {/* Current Job */}
          <Row style={{ margin: '1rem 1rem' }}>
            <FormItem style={{ flexDirection: 'row' }}>
              <Label style={{ marginRight: '1rem' }}>Current Job</Label>
              <StyledInput
                type='checkbox'
                name='current'
                value={current}
                checked={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />
            </FormItem>
          </Row>

          {/* Job Description */}
          <Row style={{ margin: '1rem 1rem' }}>
            <FormItem>
              <Label>Job Description</Label>
              <DescriptionInput
                type='text'
                placeholder='What Did You Do In this Role'
                name='description'
                value={description}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>

          <Row style={{ justifyContent: 'center', margin: '2rem 0' }}>
            <SubmitButton
              onClick={(e) => {
                e.preventDefault();
                addExperience(formData, history);
              }}
            >
              Submit
            </SubmitButton>
          </Row>
        </BioSection>
      </PageData>
    </Holder>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
