//Auth Types
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

//Board Types
export const GET_ALL_BOARDS = 'GET_ALL_BOARDS';
export const BOARD_GET_FAILED = 'BOARD_GET_FAILED';

//Create Item Types
export const CREATE_BOARD = 'CREATE_BOARD';
export const CREATE_COL = 'CREATE_COL';
export const CREATE_CARD = 'CREATE_CARD';

//Delete Item Types
export const DELETE_CARD = 'DELETE_CARD';
export const DELETE_COLUMNS = 'DELETE_COLUMNS';

//Get By Types
export const GET_COLUMNS_BY_BOARD = 'GET_COLUMNS_BY_BOARD';
export const GET_CARDS_BY_COLUMN = 'GET_CARDS_BY_COLUMN';

//Reorder Cards Types
export const REORDER_CARD_SAME_COL = 'REORDER_CARD_SAME_COL';
export const REORDER_CARD_DIFFERENT_COL = 'REORDER_CARD_DIFFERENT_COL';

//Clear Store Types
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const CLEAR_CARDS = 'CLEAR_CARDS';
export const CLEAR_COLUMNS = 'CLEAR_COLUMNS';

//Edit Value Types
export const CHANGE_COLUMN_NAME = 'CHANGE_COLUMN_NAME';
