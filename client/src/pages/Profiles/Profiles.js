import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/NavBar/Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../utils/Spinner';
import { getProfiles } from '../../actions/profile';

export const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PageData = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #f9f9f9;
  min-height: 90vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Profiles = ({ getProfiles, profile: { profile, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData>
        <Spinner />
        Hi
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
