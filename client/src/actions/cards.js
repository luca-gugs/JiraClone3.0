import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  GET_CARDS_BY_COLUMN,
  REORDER_CARD_SAME_COL,
  REORDER_CARD_DIFFERENT_COL,
} from './types';

//Get Cards By Columns
export const getCardsByColumn = props => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // let test = JSON.stringify(props);

  const body = { columnIds: props };

  try {
    const res = await axios.post('/api/cards/getallcards', body, config);
    dispatch({ type: GET_CARDS_BY_COLUMN, payload: res.data });
  } catch (error) {
    console.log(error, 'error');
    // dispatch({ type: REGISTER_FAIL });
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
  console.log(props);
  try {
    const res = await axios.post('/api/cards', body, config);
    console.log(res.data, 'res.data');
    // dispatch({ type: GET_CARDS_BY_COLUMN, payload: res.data });
  } catch (error) {
    console.log(error, 'error');
    // dispatch({ type: REGISTER_FAIL });
  }
};

// deleteCard
export const deleteCard = (columnId, _id) => async dispatch => {
  console.log(columnId, _id, 'here and now');

  try {
    const res = await axios.delete(`/api/cards/${_id}/${columnId}`);
    console.log(res, 'res');
  } catch (error) {
    console.log(error);
  }
  // const { id }
};

//reorderCards(WITHIN AND BETWEEN COLS)
export const reorderCards = props => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { destination, draggableId, source, columns } = props;

  console.log(props, 'props key');

  const startList = columns.filter(function (obj) {
    return obj._id === source.droppableId;
  });

  const finishList = columns.filter(function (obj) {
    return obj._id === destination.droppableId;
  });

  console.log(startList, finishList);

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
      console.log(error, 'fuck me an error');
    }
    return;
  }

  const removedCardIds = Array.from(startList[0].cardIds);
  const addedCardIds = Array.from(finishList[0].cardIds);
  removedCardIds.splice(source.index, 1);
  addedCardIds.splice(destination.index, 0, draggableId);

  console.log(removedCardIds, 'rci');
  console.log(addedCardIds, 'aci');
  console.log(columns, 'columns');

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

  console.log(newDifferentColumnsList, 'ndcl');

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
    console.log(error, 'fuck me an error');
  }

  // console.log(newDifferentColumnsList, 'ndcl');
};
