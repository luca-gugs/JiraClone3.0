import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { CREATE_COL, GET_COLUMNS_BY_BOARD } from './types';

//Get Columns By Board
export const getColumnsByBoard = ({ id }) => async dispatch => {
  try {
    const res = await axios.get(`/api/columns/all/${id}`);

    dispatch({ type: GET_COLUMNS_BY_BOARD, payload: res.data });
  } catch (error) {
    console.log(error);
    // dispatch({ type: REGISTER_FAIL });
  }
};

//Create Column
export const createNewColumn = ({ title, boardId }) => async dispatch => {
  console.log(title, boardId, 'cre.new.col.props');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {
    title,
    columnId: uuidv4(),
    boardId,
  };
  try {
    const res = await axios.post('/api/columns', body, config);
    dispatch({ type: CREATE_COL, payload: res.data });

    console.log(res, 'res');
  } catch (error) {
    console.log(error, 'error');
  }
};

export const changeColumnName = ({ columnId, title }) => async dispatch => {
  console.log(columnId, title, 'in action');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {
    title,
  };
  try {
    const res = await axios.post(`/api/columns/${columnId}`, body, config);
    console.log(res, 'res');
  } catch (error) {
    console.log(error, 'error');
  }
};
