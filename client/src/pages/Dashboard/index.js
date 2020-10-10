import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAllBoards } from '../../actions/boards';

import BoardDisplay from '../../components/organisms/BoardDisplay';
import { PageWrapper } from '../../utils/GlobalStyles';
const Dashboard = ({ getAllBoards, auth, boards }) => {
  useEffect(() => {
    getAllBoards();
  }, [auth]);
  return (
    <PageWrapper>
      <div style={{ minHeight: '1200rem' }}>
        <BoardDisplay boards={boards} />
      </div>
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  boards: state.boards,
});

export default connect(mapStateToProps, { getAllBoards })(Dashboard);
