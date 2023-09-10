import React from 'react'
import TicTacToe from './TicTacToe'

function Board({board, onClick}) {
    return (
        <div>
            {
                board.map((value, idx)=>{
                    return <box  value={value} onClick={()=>onClick(idx)} />
                })
            }
        </div>
    )
}

export default Board
