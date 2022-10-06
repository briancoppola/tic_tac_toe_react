import React from 'react';
// import Symbol from './symbol';

// const Xsymbol = () => <span className="material-symbols-outlined square--x"></span>;
// const Osymbol = () => <span className="material-symbols-outlined square--o"></span>;

const Square = (props) => {
  const id = props.id;
  let squareID = `square${id}`;

  const winningSquareCheck = (sq) => {
    const winningSquares = props.gameState.winningSquares;
    return winningSquares.includes(sq);
  };

  return (
    <button
      id={squareID}
      className="square"
      onClick={() => props.playerMove(id)}
      disabled={typeof props.square === 'number'}
      data-player={props.square}
      data-winning-square={winningSquareCheck(props.id) ? '' : null}
    >
      {/* {props.square === 0 && <Xsymbol />}
      {props.square === 1 && <Osymbol />} */}
    </button>
  );
};

export default Square;
