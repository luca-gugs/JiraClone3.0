import {
  GET_ALL_BOARDS,
  BOARD_GET_FAILED,
  CREATE_BOARD,
} from '../actions/types';

const initialState = {
  boards: [],
  newBoard: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BOARD:
      return {
        ...state,
      };
    case GET_ALL_BOARDS:
      return {
        ...state,
        boards: payload,
      };
    case BOARD_GET_FAILED:
      return {
        ...state,
        newBoard: payload,
      };

    default:
      return state;
  }
}
