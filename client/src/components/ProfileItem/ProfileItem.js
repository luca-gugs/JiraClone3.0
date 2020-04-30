import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  width: 30rem;
  margin: 1rem 0;
  padding: 1.5rem 0.75rem;
`;

const Row = styled.div`
  display: flex;
`;

const Name = styled.div`
  margin-right: 3rem;
  font-size: 1.5rem;
`;
const City = styled.div`
  display: flex;
  font-size: 0.75rem;
  color: grey;
`;
const Occupation = styled.div`
  margin-right: 1.5rem;
`;
const Status = styled.div``;

const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5rem;
  width: 8rem;
`;
const SkillItem = styled.div`
  margin-right: 0.25rem;
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
  font-size: 0.75rem;
`;
const ProfileItem = ({ data }) => {
  const {
    occupation,
    skills,
    status,
    bio,
    education,
    experience,
    location,
    user,
    website,
  } = data;

  const { name, _id, avatar } = user;
  console.log(data, 'data math');

  console.log(user, 'user math');
  console.log(skills, 'skills math');

  return (
    <ProfileHolder>
      <ProfileLeft>
        <Row style={{ alignItems: 'center', margin: '0.5rem 0' }}>
          <Name>{name}</Name>
          <City>{location}</City>
        </Row>
        <Row>
          {occupation && <Occupation>{occupation}</Occupation>}
          <Status>{status}</Status>
        </Row>
        <Row>
          <StyledLink to={`/profile/${_id}`}>See Full Profile</StyledLink>
        </Row>
      </ProfileLeft>

      {skills.length > 1 ? (
        <ProfileRight>
          <Row>Skills:</Row>

          <Row style={{ flexDirection: 'column' }}>
            {skills.slice(0, 4).map((elm) => {
              return <SkillItem>{elm},</SkillItem>;
            })}
          </Row>
        </ProfileRight>
      ) : null}
    </ProfileHolder>
  );
};

export default ProfileItem;
