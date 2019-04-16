import React, {useState} from 'react';
import './App.css';

import Table from './components/table';
import {
  getWinningPositions,
  hasCell,
  isPlayerWon,
  getWinningPosition,
} from './helpers/helpers';
import soundBlaster from './helpers/soundBlaster';

const matrixSize = 3;
const player1 = 0;
const player2 = 1;

const winningPositions = getWinningPositions(matrixSize);

function App() {
  let [player, setPlayer] = useState(player1);
  let [stats, setStats] = useState([[], []]);
  let [clickedCells, setClickedCells] = useState([]);
  let [gameOver, setGameOver] = useState(false);
  let [winningPosition, setWinningPosition] = useState([]);

  function onClick(i, j) {
    soundBlaster.play(440);

    if (!gameOver) {
      let cell = [i, j];

      if (!hasCell(clickedCells, cell)) {
        let newClickedCells = clickedCells.slice();
        newClickedCells.push(cell);
        setClickedCells(newClickedCells);

        let newStats = stats.slice();
        newStats[player].push(cell);
        setStats(newStats);

        if (newStats[player].length >= 3) {
          if (isPlayerWon(winningPositions, newStats[player])) {
            setWinningPosition(getWinningPosition(winningPositions, newStats[player]));
            setGameOver(true);
            return;
          }
        }

        if (clickedCells.length === ((matrixSize * matrixSize) - 1)) {
          setPlayer(-1);
          setGameOver(true);
          setTimeout(() => {
            startAgain();
          }, 1500);
          return;
        }

        if (player === player1) {
          setPlayer(player2);
        } else {
          setPlayer(player1);
        }
      }
    }
  }

  function startAgain() {
    setPlayer(player1);
    setStats([[], []]);
    setClickedCells([]);
    setGameOver(false);
    setWinningPosition([]);
  }

  let playerWon = gameOver && player !== -1;
  let nobodyWon = player === -1;

  return (
    <div className="App">
      {
        playerWon &&
          <h2 className="title">Player {player + 1} Won!</h2>
      }
      <Table onCellClick={onClick}
             matrixSize={matrixSize}
             winningPosition={winningPosition}
             nobodyWon={nobodyWon}
             stats={stats}/>
      {
        playerWon &&
        <button className="start-btn" onClick={startAgain}>
          <span>Start Again!</span>
        </button>
      }
    </div>
  );
}

export default App;
