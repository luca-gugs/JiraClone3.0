import {
  GET_ALL_BOARDS,
  BOARD_GET_FAILED,
  CREATE_BOARD,
  GET_COLUMNS_BY_BOARD,
  REORDER_CARD_SAME_COL,
  REORDER_CARD_DIFFERENT_COL,
  CREATE_COL,
  CLEAR_COLUMNS,
  DELETE_COLUMNS,
  CHANGE_COLUMN_NAME,
} from '../actions/types';
import boards from './boards';

const initialState = {
  currentBoard: [],
  currentColumns: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_COLUMN_NAME:
      const colId = payload.columnId;
      const newCol = payload.newCol;
      const newCols = state.currentColumns.columns.filter(obj => {
        return obj._id !== colId;
      });
      newCols.push(newCol);
      state.currentColumns.columns = newCols;
      return {
        ...state,
      };

    case DELETE_COLUMNS:
      const { boardId, columnId, columnKey } = payload;
      const newColumnOrder = state.currentColumns.board.columnOrder.filter(
        obj => {
          return obj !== columnKey;
        }
      );
      const newColumns = state.currentColumns.columns.filter(obj => {
        return obj._id !== columnId;
      });
      state.currentColumns.board.columnOrder = newColumnOrder;
      state.currentColumns.columns = newColumns;
      return {
        ...state,
      };

    case CREATE_COL:
      const { board, column } = payload;
      state.currentColumns.board.columnOrder = board.columnOrder;
      state.currentColumns.columns.push(column);
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
          if (elm.key === currentColumns.currentColumns.columns[i]._id) {
            currentColumns.currentColumns.columns[i].cardIds =
              elm.cardIds.cardIds;
            return currentColumns;
          }
        });
      }
      return {
        ...currentColumns,
      };
    case CLEAR_COLUMNS: {
      return {
        ...state,
        currentBoard: [],
        currentColumns: [],
      };
    }
    default:
      return state;
  }
}
