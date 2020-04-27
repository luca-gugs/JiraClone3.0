import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../NavBar/Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../../actions/profile';

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
  width: 8rem;
  height: 1rem;
  padding: 0.25rem 0.2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f4f6f8;
  :focus {
    outline: none;
  }
`;

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

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    occupation: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
  }, [loading]);
  const {
    website,
    location,
    status,
    skills,
    occupation,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData className='pageData'>
        {/* {user && user.name ? (
          <Row style={{ margin: '1rem 0' }}>
            Hey {user.name} tell us about yourself
          </Row>
        ) : null} */}
        <Row>Edit Profile</Row>

        <BioSection className='bioSection'>
          <Row style={{ margin: '1rem 1rem' }}>
            {/* Occupation */}
            <FormItem>
              <Label>Occupation</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='occupation'
                value={occupation}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
            <FormItem>
              <Label>Status</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='status'
                value={status}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>
          <Row style={{ margin: '1rem 1rem' }}>
            {/* Location */}
            <FormItem>
              <Label>Location</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='location'
                value={location}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>
          <Row style={{ margin: '1rem 1rem' }}>
            {/* Location */}
            <FormItem>
              <Label>Skills</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='skills'
                value={skills}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>

          <Row style={{ margin: '1rem 1rem' }}>
            {/* Website */}
            <FormItem>
              <Label>Website</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='website'
                value={website}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
            {/* Facebook */}
            <FormItem>
              <Label>facebook</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
            {/* Twitter */}

            <FormItem>
              <Label>twitter</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>
          <Row style={{ margin: '1rem 1rem' }}>
            {/* Instagram */}
            <FormItem>
              <Label>instagram</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
            {/* Youtue */}
            <FormItem>
              <Label>youtube</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
            {/* LinkedIn */}
            <FormItem>
              <Label>linkedin</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>
          <Row style={{ margin: '1rem 1rem' }}>
            {/* Bio */}
            <FormItem>
              <Label>Bio</Label>
              <StyledInput
                type='text'
                placeholder=''
                name='bio'
                value={bio}
                onChange={(e) => onChange(e)}
              />
            </FormItem>
          </Row>
          <Row style={{ justifyContent: 'center', margin: '2rem 0' }}>
            <SubmitButton onClick={(e) => onSubmit(e)}>Submit</SubmitButton>
          </Row>
        </BioSection>
      </PageData>
    </Holder>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
