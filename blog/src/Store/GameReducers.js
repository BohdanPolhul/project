const SET_COLUMNS = 'SET_COLUMNS';
const SET_GAME = 'SET_GAME';
const SET_ROWS = 'SET_ROWS';

const isInputInteger = (value) => Math.abs(Math.floor(Number(value)));

export default function GameReducers(state, action) {
  switch (action.type) {
    case SET_GAME: {
      return {
        ...state,
        matrix: action.payload,
      };
    }

    case SET_COLUMNS: {
      return {
        ...state,
        columns: isInputInteger(action.payload),
      };
    }

    case SET_ROWS: {
      return {
        ...state,
        rows: isInputInteger(action.payload),
      };
    }
    default:
      return state;
  }
}
export const setcolumns = (param) => {
    return {
      payload: param,
      type: SET_COLUMNS
    }
  };

export const setrows= (param) => {
    return {
      payload: param,
      type: SET_ROWS,
    }
  };
export const setGame = (param) => {
    return {
      payload: param,
      type: SET_GAME,
    }
  };