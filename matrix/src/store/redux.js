import { createStore } from 'redux';
import Matrix_Reducers from './Matrix_Reducers';
const store = createStore(
    Matrix_Reducers,
    {
      columnsNumber: 0,
      highlightCellsNumber: 0,
      matrix: [],
      rowsNumber: 0,
    }
  );
  
  export default store;
  