import React from 'react';
import Square from './square';

const Board = (props) => {
  return (
    <div className="board">
      <div className="board-grid">
        {props.squares.map((sq, index) => {
          return (
            <Square id={index} key={index} square={sq} gameState={props.gameState} playerMove={props.playerMove} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
