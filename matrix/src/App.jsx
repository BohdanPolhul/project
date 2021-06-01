import React from 'react';
import Matrix_Basic from './components/Matrix_Basic/Matrix_Basic';
import Input_Data_Matrix from './components/Input_Data_Matrix/Input_Data_Matrix';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input_Data_Matrix />
      </header>
      <Matrix_Basic />
    </div>
  );
}   
export default App;
