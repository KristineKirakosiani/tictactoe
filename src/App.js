import React from "react";
import { useState } from "react";

function Square({ value, onSquareclick }) {
  return (
    <button className="square" onClick={onSquareclick}>
      {value}
    </button>
  );
}

export default function Board() {
  //setting all squares state
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareclick={() => handleClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareclick={() => handleClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareclick={() => handleClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareclick={() => handleClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareclick={() => handleClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareclick={() => handleClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareclick={() => handleClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareclick={() => handleClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareclick={() => handleClick(8)}
        ></Square>
      </div>
    </div>
  );
}
