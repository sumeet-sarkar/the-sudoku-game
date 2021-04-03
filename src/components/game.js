import React from 'react'

import './game.css'

const Set3x3box = props => {

    return (
        <div className="box-3x3">
            {props.row.map((elem, index) => {
                let value;
                let readOnly = false;
                if(props.question[props.boxIndex][index]!==0) {
                    value = elem 
                    readOnly = true;
                }
                const key = props.boxIndex + index.toString()

                return(
                    <input 
                        key={key}
                        id={key}
                        type="number"
                        name="name"
                        min="1"
                        max="9"
                        readOnly={readOnly}
                        autoComplete="off"
                        value={value}
                    >
                    </input>
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
                        boxIndex={index}
                        question = {props.question}
                    />
                )
            })}
        </div>
    )
}

export default sudokuBox;
