import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllBoards } from '../../actions/boards';

import BoardDisplay from '../../components/organisms/BoardDisplay';
import CreateNewBoard from '../../components/organisms/CreateNewBoard';
import { PageWrapper } from '../../utils/GlobalStyles';

const Dashboard = ({ getAllBoards, auth, boards }) => {
  useEffect(() => {
    getAllBoards();
  }, [auth]);
  return (
    <PageWrapper>
      <div style={{ minHeight: '1200rem' }}>
        <BoardDisplay boards={boards} />
        <CreateNewBoard />
      </div>
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  boards: state.boards,
});

export default connect(mapStateToProps, { getAllBoards })(Dashboard);
