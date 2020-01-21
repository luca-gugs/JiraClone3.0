import React from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar/Navbar';

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

const Dashboard = () => {
  return (
    <Holder>
      <Navbar />
      <PageData>
        <PersonalInfoHolder>
          <GravatarHolder></GravatarHolder>
          <BioSection></BioSection>
        </PersonalInfoHolder>
        <WallHolder></WallHolder>
      </PageData>
    </Holder>
  );
};

export default Dashboard;
