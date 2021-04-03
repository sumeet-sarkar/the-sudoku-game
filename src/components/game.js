import React from 'react'

import './game.css'

const Set3x3box = props => {

    return (
        <div className="box-3x3" box={props.boxIndex}>
            {props.row.map((elem, index) => {
                let value;
                let readOnly = false;
                if(props.question[props.boxIndex][index]!==0) {
                    value = elem 
                    readOnly = true;
                }
                const key = props.boxIndex + index.toString()

                const row = (parseInt(props.boxIndex/3) * 3) + parseInt(index/3)
                const column = (parseInt(props.boxIndex%3) * 3) + parseInt(index%3)

                return(
                    <input 
                        key={key}
                        id={key}
                        row={row}
                        column={column}
                        type="number"
                        name="name"
                        min="1"
                        max="9"
                        readOnly={readOnly}
                        autoComplete="off"
                        value={value}
                        onChange={props.inputHandler}>
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
                        inputHandler={props.inputHandler}
                        question = {props.question}
                    />
                )
            })}
        </div>
    )
}

export default sudokuBox;
