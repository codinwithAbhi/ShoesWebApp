import React from 'react';
import { useState } from 'react';
import './TicTacToe.css';
import Board from './Board';


function TicTacToe({ value, onClick }) {
    const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
    const style = value === "X" ? "box x" : "box o"
    return (
        <di>
        <button className={style} onClick={onClick}>{value}</button>
        <Board board={board} onClick={null}></Board>
        </di>
    )

}

export default TicTacToe    
