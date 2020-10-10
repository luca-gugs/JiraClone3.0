import {
  GET_ALL_BOARDS,
  BOARD_GET_FAILED,
  CREATE_BOARD,
  GET_COLUMNS_BY_BOARD,
  REORDER_CARD_SAME_COL,
  REORDER_CARD_DIFFERENT_COL,
  CREATE_COL,
} from '../actions/types';
import boards from './boards';

const initialState = {
  currentBoard: [],
  currentColumns: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_COL:
      const { board, column } = payload;
      const newCurrentCols = state.currentColumns.columns;
      const newCurrentBoard = state.currentColumns.board;
      newCurrentCols.push(column);
      newCurrentBoard.columnOrder.push(column.columnId);
      return {
        ...state,
      };

    case GET_COLUMNS_BY_BOARD:
      return {
        ...state,
        currentColumns: payload,
      };

    case REORDER_CARD_SAME_COL:
      const { newSameColumnList } = payload;
      const newCurrentColumns = state;

      for (
        var i = newCurrentColumns.currentColumns.columns.length - 1;
        i >= 0;
        --i
      ) {
        if (
          newCurrentColumns.currentColumns.columns[i]._id ==
          newSameColumnList._id
        ) {
          newCurrentColumns.currentColumns.columns.splice(
            i,
            1,
            newSameColumnList
          );
        }
      }
      return {
        ...newCurrentColumns,
      };

    case REORDER_CARD_DIFFERENT_COL:
      const { newDifferentColumnsList } = payload;
      const currentColumns = state;
      // console.log(newDifferentColumnsList, 'key1');

      console.log(newDifferentColumnsList, 'newdifcollist');
      console.log(currentColumns, 'currcols');

      var arr = Object.keys(newDifferentColumnsList).map(key => {
        if (newDifferentColumnsList[key])
          return { cardIds: newDifferentColumnsList[key], key: key };
      });

      for (
        var i = currentColumns.currentColumns.columns.length - 1;
        i >= 0;
        --i
      ) {
        arr.map(elm => {
          console.log(elm, 'elm');
          if (elm.key === currentColumns.currentColumns.columns[i]._id) {
            console.log(elm.cardIds.cardIds, 'ecid');
            currentColumns.currentColumns.columns[i].cardIds =
              elm.cardIds.cardIds;
            return currentColumns;
          }
        });
        console.log(currentColumns);
      }
      return {
        ...currentColumns,
      };

    // // console.log(arr, 'arr');
    // if (newDifferentColumnsList) {
    //   const newState = {
    //     ...state,
    //     currentColumns: {
    //       ...state.currentColumns,
    //       ...newDifferentColumnsList,
    //     },
    //   };
    //   console.log(newState);

    //   return newState;
    // }
    // return {
    //   ...state,
    // };
    default:
      return state;
  }
}
