const SET_COLUMNS_NUMBER = 'SET_COLUMNS_NUMBER';
const SET_HIGLIGHT_CELLS_NNUMBER = 'SET_HIGLIGHT_CELLS_NNUMBER';
const SET_MATRIX = 'SET_MATRIX';
const SET_ROWS_NUMBER = 'SET_ROWS_NUMBER';

const isInputInteger = (value) => Math.abs(Math.floor(Number(value)));

export default function Matrix_Reducers(state, action) {
  switch (action.type) {
    case SET_MATRIX: {
      return {
        ...state,
        matrix: action.payload,
      };
    }

    case SET_COLUMNS_NUMBER: {
      return {
        ...state,
        columnsNumber: isInputInteger(action.payload),
      };
    }

    case SET_ROWS_NUMBER: {
      return {
        ...state,
        rowsNumber: isInputInteger(action.payload),
      };
    }

    case SET_HIGLIGHT_CELLS_NNUMBER: {
      return {
        ...state,
        highlightCellsNumber: isInputInteger(action.payload) > state.columnsNumber * state.rowsNumber
          ? state.columnsNumber * state.rowsNumber
          : isInputInteger(action.payload),
      };
    }

    default:
      return state;
  }
}
export const setColumnsNumber = (param) => {
    return {
      payload: param,
      type: SET_COLUMNS_NUMBER
    }
  };

export const setRowsNumber = (param) => {
    return {
      payload: param,
      type: SET_ROWS_NUMBER,
    }
  };

export const setHiglightCellsNumber = (param) => {
    return {
      payload: param,
      type: SET_HIGLIGHT_CELLS_NNUMBER,
    }
  };

export const setMatrix = (param) => {
    return {
      payload: param,
      type: SET_MATRIX,
    }
  };