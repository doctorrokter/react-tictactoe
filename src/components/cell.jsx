import React, {memo} from 'react';
import './cell.css';

function Cell({i, j, onCellClick, children, className}) {
  return (
    <div className={'cell ' + className} onClick={onCellClick.bind(null, i, j)}>
      {children}
    </div>
  );
}

export default memo(Cell);