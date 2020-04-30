import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar/Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getCurrentProfile } from '../../actions/profile';

export const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PageData = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const PersonalInfoHolder = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0rem;
  @media (max-width: 768px) {
    height: 120px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;
export const WallHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 1440px;
`;

export const GravatarHolder = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 15rem;
  background-color: white;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 95px;
    min-width: 95px;
    height: 95px;
    margin: 0 2rem;
  }
`;

export const BioSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  margin-top: 2rem;
  background-color: white;

  @media (max-width: 768px) {
    width: 95px;
    height: 95px;
    margin: 0 2rem;
    width: 350px;
  }
`;
const Row = styled.div`
  display: flex;
`;

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const user = auth.user;
  const currentUser = profile.profile;
  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData className='pageData'>
        <PersonalInfoHolder className='personalInfoHolder'>
          <GravatarHolder className='gravatarHolder'></GravatarHolder>
          <BioSection className='bioSection'>
            {/* UserName */}
            <Row>{user && user.name ? user.name : null}</Row>
            {/* Bio */}
            <Row>{currentUser && currentUser.bio ? currentUser.bio : null}</Row>
            {/* Status */}
            <Row>
              {currentUser && currentUser.status ? currentUser.status : null}
            </Row>
            <Row>
              {currentUser && <Link to='edit-profile'>Edit Profile</Link>}
            </Row>
          </BioSection>
        </PersonalInfoHolder>
        <WallHolder className='wallHolder'>
          {!currentUser ? (
            <Row style={{ margin: '1rem' }}>
              <Link to='/create-profile'>Add Profile + </Link>
            </Row>
          ) : null}
        </WallHolder>
      </PageData>
    </Holder>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
