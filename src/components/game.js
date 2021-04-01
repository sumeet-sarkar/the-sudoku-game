import React from 'react'

import './game.css'

const Set3x3box = props => {

    return (
        <div className="box-3x3">
            {props.row.map((elem, index) => {
                let value;
                let readOnly = false;
                if(elem!==0) {
                    value = elem 
                    readOnly = true;
                }
                const key = props.boxIndex + index
                return(
                    <input key={key} id={key} type="number" name="name" min="1" max="9" readOnly={readOnly} value={value}></input>
                )
            })}
        </div>
    )
}

const sudokuBox = props => {

    return (
        <div className="game-box">
            {props.puzzle.map((box, index) => {
                return (
                    <Set3x3box
                        key={index}
                        row={box}
                        boxIndex={index.toString()}
                    />
                )
            })}
        </div>
    )
}

export default sudokuBox;
