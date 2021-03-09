import React from "react";
import Squares from "./Squares";

const Board = ({ squares, onClick }) => (
    <div className="board">
        {squares.map((square, index) => (
            <Squares key={index} value={square} onClick={() => onClick(index)} />
        ))}
    </div>
);

export default Board;