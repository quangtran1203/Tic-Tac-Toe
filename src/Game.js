import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./winningMoves";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [step, setStep] = useState(0);
    const [Xplayer, setXplayer] = useState(true);
    const winner = calculateWinner(history[step]);
    const XorO = Xplayer ? "X" : "O";

    const handleClick = (index) => {
        const historyPoint = history.slice(0, step + 1);
        const current = history[step];
        const squares = [...current];

        if (winner || squares[index]) {
            return;
        }
        squares[index] = XorO;
        setHistory([...historyPoint, squares]);
        setStep(historyPoint.length);
        setXplayer(!Xplayer);
    };

    const restart = () => {
        setStep(0);
        setXplayer(true);
    }

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <Board squares={history[step]} onClick={handleClick} />
            
            <div className="info-wrapper">
                <button onClick={restart}>Restart</button>
                <p className={winner ? "bigDisplay" : "h3"}>{winner ? "Winner: " + winner : "Next Player: " + XorO}</p>
            </div>
        </>
    )
};

export default Game;