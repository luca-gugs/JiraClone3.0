import {
  GET_CARDS_BY_COLUMN,
  REORDER_CARD_SAME_COL,
  CLEAR_CARDS,
  DELETE_CARD,
} from '../actions/types';

const initalState = {
  cards: null,
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CARDS_BY_COLUMN:
      return {
        ...state,
        cards: payload,
      };

    case CLEAR_CARDS: {
      return {
        ...state,
        cards: null,
      };
    }

    default:
      return state;
  }
}
