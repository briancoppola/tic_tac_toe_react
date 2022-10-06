import React from 'react';
import Button from '../ui/button';

const Status = (props) => {
  // const currentPlayerName = props.gameState.players[props.gameState.currentPlayer].name;
  // const currentPlayerSymbol = props.gameState.players[props.gameState.currentPlayer].symbol;
  const statusText = () => {
    return typeof props.gameState.winner === 'number' ? '  has won!' : 'Game is a tie!';
  };

  console.log(props.gameState.winner);

  return (
    <div className="status">
      <div>
        {props.gameState.state === 'play' && <p data-player={props.gameState.currentPlayer}> to play</p>}
        {props.gameState.state === 'end' && <p data-player={props.gameState.winner}>{statusText()}</p>}
      </div>
      {props.gameState.state === 'end' && (
        <div>
          <Button onClick={props.resetGame}>Play again</Button>
        </div>
      )}
    </div>
  );
};

export default Status;
