import React from 'react';
import { connect } from 'react-redux';
import { setColumnsNumber, setRowsNumber, setHiglightCellsNumber } from '../../store/Matrix_Reducers';
import store from '../../store/redux';
import './Input_Data_Matrix.css';

const inputsArray = [
                      {action: setRowsNumber,text: 'Row Number:'},
                      {action: setColumnsNumber,text: 'Column Number:'},
                      {action: setHiglightCellsNumber,text: 'Number of numbers closest to the selected cell:'}
                    ];
const mapStateToProps = (state) => ({
  columnsNumber: state.columnsNumber,
  highlightCellsNumber: state.highlightCellsNumber,
  rowsNumber: state.rowsNumber,
});
const Input_Data_Matrix = ({ columnsNumber, highlightCellsNumber, rowsNumber }) => {
  inputsArray[0].value = rowsNumber;
  inputsArray[1].value = columnsNumber;
  inputsArray[2].value = highlightCellsNumber;
 
  return (
    <form className="main-form">
      {inputsArray.map(label=>(
          <label
            key={label.text.split(' ').join('')}
            htmlFor={label.text.split(' ').join('++++').toLowerCase()}
            className="main-form__label"
          >
            <span className="labeltext">{label.text}</span>
            <input
              key={label.text.split(' ').join('')}
              id={label.text.split(' ').join('++++').toLowerCase()}
              className="main-form__input"
              type="number"
              onChange={(e) => store.dispatch(label.action(e.target.value))}
              value={label.value}
            />
          </label>
      )
      )}
    </form>
  );
};


export default connect(mapStateToProps)(Input_Data_Matrix);
