import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/NavBar/Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../utils/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from '../../components/ProfileItem/ProfileItem';

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

const Profiles = ({ getProfiles, profile }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData style={{ alignItems: 'center' }}>
        {profile && profile.profiles.length > 1 ? (
          profile.profiles.map((elm) => {
            return <ProfileItem data={elm} />;
          })
        ) : (
          <Spinner />
        )}
      </PageData>
    </Holder>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  alert: state.alert,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
