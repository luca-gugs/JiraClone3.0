import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/NavBar/Navbar';
import Spinner from '../../utils/Spinner';
import { getProfileById } from '../../actions/profile';

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

const Profile = ({
  match,
  getProfileById,
  auth,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  console.log(auth.user, 'auth');
  return (
    <Holder className='holder'>
      <Navbar className='navbar' />
      <PageData style={{ alignItems: 'center' }}>
        {profile ? <Row>{profile.user.name}</Row> : <Spinner />}

        <Link to='/profiles'> Back to Community </Link>
        <div>
          {profile &&
          auth.isAuthenticated &&
          auth.user._id === profile.user._id ? (
            <Link to='/edit-profile'>Edit Profile</Link>
          ) : null}
        </div>
      </PageData>
    </Holder>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
