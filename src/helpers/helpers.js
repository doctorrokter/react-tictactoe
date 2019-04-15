function hasCell(cells, clickedCell) {
  return cells.length !== 0 &&
    cells.some((c) => c[0] === clickedCell[0] && c[1] === clickedCell[1]);
}

function getWinningPositions(matrixSize) {
  let result = [];
  let position3 = [];
  let position4 = [];

  for (let i = 0; i < matrixSize; i++) {
    let position1 = [];
    let position2 = [];

    for (let j = 0; j < matrixSize; j++) {
      position1.push([i, j]);
      position2.push([j, i]);
    }

    result.push(position1);
    result.push(position2);

    position3.push([i, matrixSize - 1 - i]);
    position4.push([i, i]);
  }

  result.push(position3);
  result.push(position4);

  return result;
}

function hasWinningPosition(winningPosition, playerPosition) {
  return winningPosition.every((cell) => hasCell(playerPosition, cell));
}

function isPlayerWon(winningPositions, playerPosition) {
  return winningPositions.some((pos) => {
    return hasWinningPosition(pos, playerPosition);
  });
}

function getWinningPosition(winningPositions, playerPosition) {
  let res = [];

  winningPositions.forEach((pos) => {
    if (hasWinningPosition(pos, playerPosition)) {
      res = pos;
    }
  });

  return res;
}

export {
  hasCell,
  getWinningPositions,
  hasWinningPosition,
  isPlayerWon,
  getWinningPosition,
}