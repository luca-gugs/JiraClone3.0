import axios from 'axios';
import { GET_ALL_BOARDS, BOARD_GET_FAILED, CREATE_BOARD } from './types';

//Get Boards
export const getAllBoards = () => async dispatch => {
  try {
    const res = await axios.get('/api/boards/all');
    dispatch({
      type: GET_ALL_BOARDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOARD_GET_FAILED,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Create Board
export const createBoard = ({ title }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ title });

  try {
    const res = await axios.post('/api/boards', body, config);

    dispatch({ type: CREATE_BOARD, payload: res.data });
  } catch (error) {
    console.log(error);
    // dispatch({ type: REGISTER_FAIL });
  }
};
