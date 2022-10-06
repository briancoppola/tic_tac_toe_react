import React, { useState } from 'react';
import Status from '../info/status';
import Board from './board';

const Game = () => {
  const symbols = ['&#10005;', 'O'];
  const gameStateSetup = {
    players: new Array(2).fill(0).map((_, i) => ({
      id: i,
      name: 'Player ' + (i + 1),
      symbol: symbols[i],
      color: null,
    })),
    currentPlayer: 0,
    turn: 1,
    state: 'play',
    winner: null,
    winningSquares: [],
  };

  const [gameState, setGameState] = useState(gameStateSetup);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const playerMoveHandler = (squareID) => {
    const currentSquares = [...squares];
    currentSquares[squareID] = gameState.currentPlayer;
    const winningPath = calculateWinner(currentSquares);

    setSquares((prevSquares) => {
      return prevSquares.map((square, index) => {
        return squareID === index ? gameState.currentPlayer : square;
      });
    });

    if (winningPath) {
      endGame(winningPath);
      return;
    } else if (gameState.turn === 9) {
      endGame();
      return;
    }

    updatePlayer();
  };

  // useEffect(() => {

  // }, [squares]);

  const updatePlayer = () => {
    setGameState((prevGameState) => {
      const currentPlayer = prevGameState.currentPlayer;
      const currentTurn = prevGameState.turn;
      return { ...prevGameState, currentPlayer: (currentPlayer + 1) % 2, turn: currentTurn + 1 };
    });
  };

  const endGame = (path) => {
    const winningPlayer = path ? gameState.currentPlayer : null;
    const winningSquares = path ? path : [];

    setGameState((prevGameState) => {
      return { ...prevGameState, state: 'end', winner: winningPlayer, winningSquares: winningSquares };
    });
  };

  const calculateWinner = (sq) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (typeof sq[a] === 'number' && sq[a] === sq[b] && sq[a] === sq[c]) {
        return lines[i];
      }
    }
    return null;

    // const isRowComplete = (row) => {
    //   const symbols = row.map((i) => sq[i]);
    //   console.log(symbols[0]);
    //   return symbols.every((i) => i !== null && i === symbols[0]);
    // };

    // console.log(winningPaths.map(isRowComplete));
  };

  const resetGame = () => {
    setGameState((prevGameState) => {
      return {
        ...prevGameState,
        currentPlayer: 0,
        turn: 1,
        state: 'play',
        winner: null,
        winningSquares: [],
      };
    });

    setSquares(() => {
      return Array(9).fill(null);
    });
  };

  return (
    <div className="container">
      <Status gameState={gameState} resetGame={resetGame} />
      <Board gameState={gameState} squares={squares} playerMove={playerMoveHandler} />
    </div>
  );
};

export default Game;
