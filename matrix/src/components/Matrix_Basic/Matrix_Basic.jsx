import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMatrix } from '../../store/Matrix_Reducers';
import store from '../../store/redux';
import MatrixContainer from '../MatrixContainer/MatrixContainer';


import './Matrix_Basic.css'; 

const randomGenerator = (item, i) => ({
  Amount: Math.floor(Math.random() * 1000),
  ID: i,
  isHiglight: false,
});

const Matrix_Basic = ({columnsNumber,matrix,rowsNumber}) => {
  useEffect(() => {
    const tmp = Array(columnsNumber * rowsNumber).fill(0).map(randomGenerator);
    store.dispatch(setMatrix(tmp));
  }, [columnsNumber, rowsNumber]);

  const gridShape = {
    gridTemplateColumns: `repeat(${columnsNumber + 1}, 1fr)`,
    gridTemplateRows: `repeat(${rowsNumber + 1}, 1fr)`,
  };

  const rowSums = Array(rowsNumber).fill(0).map((item, rowIndex) => matrix.reduce((acc, mat, i) => {
    if ((i >= rowIndex * columnsNumber) && (i < (rowIndex + 1) * columnsNumber)) {
      return acc + mat.Amount;
    }
    return acc;
  }, 0));

  let columnAverage = [];
  if (rowSums.length) {
    columnAverage = Array(columnsNumber).fill(0).map((item, columnIndex) => {
      let acc = 0;
      for (let i = columnIndex; i <= columnsNumber * rowsNumber - 1; i += columnsNumber) {
        acc += typeof matrix[i] === 'undefined' ? 0 : matrix[i].Amount;
      }
      return Math.floor(acc / rowsNumber);
    });
  }

  return (
    <div className="matrix" style={gridShape}>
      {matrix.map((item, index) => (
        ((index % columnsNumber) === (columnsNumber - 1))
          ? (
            <>
              <MatrixContainer
                key={item.ID}
                matrixItem={item}
                percentage={item.Amount / rowSums[Math.floor(index / columnsNumber)]}
              />
              <div className="matrix__row-sum">{rowSums[Math.floor(index / columnsNumber)]}</div>
            </>
          )
          : (
            <MatrixContainer
              key={item.ID}
              matrixItem={item}
              percentage={item.Amount / rowSums[Math.floor(index / columnsNumber)]}
            />
          )
      ))}
      {columnAverage.map((item) => (
         <div className="matrix__column-average">{item}</div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  columnsNumber: state.columnsNumber,
  matrix: state.matrix,
  rowsNumber: state.rowsNumber,
});

export default connect(mapStateToProps)(Matrix_Basic);
