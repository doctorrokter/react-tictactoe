import React, {memo} from 'react';
import {hasCell} from "../helpers/helpers";
import Cell from "./cell";
import './table.css';

function Table({onCellClick, stats, matrixSize, winningPosition, nobodyWon}) {
  let rows = [];

  for (let i = 0; i < matrixSize; i++) {
    let cells = [];

    for (let j = 0; j < matrixSize; j++) {
      cells.push({i, j});
    }

    rows.push(cells);
  }

  return (
    <div className="table">
      {
        rows.map((row, i) => {
          return (
            <div key={`row_${i}`} className="row">
              {
                row.map((cell) => {
                  let Component = null;
                  let className = '';
                  if (hasCell(stats[0], [cell.i, cell.j])) {
                    className = 'clicked-p-1';
                    Component = <span className="cell-value">X</span>;
                  } else if (hasCell(stats[1], [cell.i, cell.j])) {
                    className = 'clicked-p-2';
                    Component = <span className="cell-value">O</span>;
                  }
                  Component = null;

                  className += hasCell(winningPosition, [cell.i, cell.j]) ? ' winning' : '';
                  className += nobodyWon ? ' flush' : '';

                  return (
                    <Cell key={`i_${cell.i}_j_${cell.j}`}
                          className={className}
                          {...cell}
                          onCellClick={onCellClick}>
                      {Component}
                    </Cell>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default memo(Table);
