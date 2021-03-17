import React from 'react'

import './game.css'

const box3x3Func = row => {

    return (
        <div className="box-3x3">
            {row.map(elem => {
                let value;
                if(elem!==0) value = elem 
                return(
                    <input type="number" name="name" min="1" max="9" value={value}></input>
                )
            })}
        </div>
    )
}

const sudokuBox = props => {
    const rows = props.puzzle.map( box => {
        return box3x3Func(box)
    });

    return(
        <div className="game-box">
            {rows.map(row=>{
                return(
                    row
                )
            })}
        </div>
    )
}

export default sudokuBox;