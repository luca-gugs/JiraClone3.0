import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  GET_CARDS_BY_COLUMN,
  REORDER_CARD_SAME_COL,
  REORDER_CARD_DIFFERENT_COL,
  CLEAR_CARDS,
  CLEAR_COLUMNS,
  DELETE_CARD,
} from './types';

export const clearCol = () => async dispatch => {
  dispatch({
    type: CLEAR_COLUMNS,
  });
};

//Get Cards By Columns
export const getCardsByColumn = props => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = { columnIds: props };

  try {
    const res = await axios.post('/api/cards/getallcards', body, config);
    dispatch({ type: GET_CARDS_BY_COLUMN, payload: res.data });
  } catch (error) {
    console.log(error, 'error');
  }
};

// createCard
export const createCard = props => async dispatch => {
  const { title, description, columnId, color } = props;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {
    title,
    cardId: uuidv4(),
    columnId,
    description,
    color,
  };
  try {
    const res = await axios.post('/api/cards', body, config);
  } catch (error) {
    console.log(error, 'error');
  }
};

// deleteCard
export const deleteCard = (columnId, _id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/cards/${_id}/${columnId}`);
    dispatch({
      type: DELETE_CARD,
      payload: _id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearCards = () => async dispatch => {
  dispatch({
    type: CLEAR_CARDS,
  });
};

//reorderCards(WITHIN AND BETWEEN COLS)
export const reorderCards = props => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { destination, draggableId, source, columns } = props;

  const startList = columns.filter(function (obj) {
    return obj._id === source.droppableId;
  });

  const finishList = columns.filter(function (obj) {
    return obj._id === destination.droppableId;
  });

  const withinColumn = startList[0]._id === finishList[0]._id;
  if (withinColumn) {
    const newCardIds = Array.from(startList[0].cardIds);
    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);

    const newSameColumnList = {
      ...startList[0],
      cardIds: newCardIds,
    };

    const body = {
      sameColumnId: source.droppableId,
      samecolumnCardIds: newCardIds,
    };

    dispatch({
      type: REORDER_CARD_SAME_COL,
      payload: { newSameColumnList },
    });
    try {
      const res = await axios.post(
        '/api/cards/reorder/samecolumn',
        body,
        config
      );
    } catch (error) {
      console.log(error, 'error');
    }
    return;
  }

  const removedCardIds = Array.from(startList[0].cardIds);
  const addedCardIds = Array.from(finishList[0].cardIds);
  removedCardIds.splice(source.index, 1);
  addedCardIds.splice(destination.index, 0, draggableId);

  const newDifferentColumnsList = {
    [source.droppableId]: {
      ...columns[source.droppableId],
      cardIds: removedCardIds,
    },
    [destination.droppableId]: {
      ...columns[destination.droppableId],
      cardIds: addedCardIds,
    },
  };

  const body = {
    removedColumnId: source.droppableId,
    addedColumnId: destination.droppableId,
    removedColumnCardIds: removedCardIds,
    addedColumnCardIds: addedCardIds,
  };

  dispatch({
    type: REORDER_CARD_DIFFERENT_COL,
    payload: { newDifferentColumnsList },
  });

  try {
    const res = await axios.post(
      '/api/cards/reorder/differentcolumn',
      body,
      config
    );
  } catch (error) {
    console.log(error, 'error');
  }
};
