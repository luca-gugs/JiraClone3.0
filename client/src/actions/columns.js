import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  CLEAR_COLUMNS,
  CREATE_COL,
  GET_COLUMNS_BY_BOARD,
  DELETE_COLUMNS,
} from './types';

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
  } catch (error) {
    console.log(error, 'error');
  }
};

//Delete Column
export const deleteColumn = ({ columnId, boardId }) => async dispatch => {
  try {
    const res = await axios.delete(`/api/columns/${columnId}/${boardId}`);
    dispatch({
      type: DELETE_COLUMNS,
      payload: { columnId, boardId, columnKey: res.data.columnId },
    });
  } catch (error) {
    console.log(error, 'error');
  }
};

//Change Column Name
export const changeColumnName = ({ columnId, title }) => async dispatch => {
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

    dispatch({
      type: CLEAR_COLUMNS,
    });
  } catch (error) {
    console.log(error, 'error');
  }
};

//Clear Columns Reducer
export const clearCol = () => async dispatch => {
  dispatch({
    type: CLEAR_COLUMNS,
  });
};
