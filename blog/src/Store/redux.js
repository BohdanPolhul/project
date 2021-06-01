import { createStore } from 'redux';
import GameReducers from './GameReducers';
const store = createStore(
  GameReducers,
    {
      columns: 1,
      matrix: [],
      rows: 1,
    }
  );
  
  export default store;
  