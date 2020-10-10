import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAllBoards } from '../../actions/boards';

import BoardDisplay from '../../components/organisms/BoardDisplay';

const Dashboard = ({ getAllBoards, auth, boards }) => {
  useEffect(() => {
    getAllBoards();
  }, []);
  return (
    <div>
      <BoardDisplay boards={boards} />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  boards: state.boards,
});

export default connect(mapStateToProps, { getAllBoards })(Dashboard);
