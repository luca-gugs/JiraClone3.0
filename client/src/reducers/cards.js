import {
  GET_CARDS_BY_COLUMN,
  REORDER_CARD_SAME_COL,
  CLEAR_CARDS,
  DELETE_CARD,
  CREATE_CARD,
} from '../actions/types';

const initalState = {
  cards: null,
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    // case DELETE_CARD:
    // console.log(state, 'state');
    // const newCards = state.cards.cards.map(elm => {
    //   console.log(elm, 'elm');
    //   if (elm.length > 0) {
    //     elm.filter(obj => {
    //       console.log(obj, 'obj');
    //       return obj;
    //     });
    //   }
    // });
    // for (var i = 0; i <= state.cards.cards.length - 1; ++i) {
    //   const newArray = state.cards.cards[i].filter(obj => {
    //     return obj._id !== payload._id;
    //   });
    // console.log(newArray, 'na');
    // }

    // state.
    // return {
    //   ...state,
    // };

    case CREATE_CARD:
      state.cards.cards[0].push(payload.card);
      return {
        ...state,
      };
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
