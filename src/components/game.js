import React from 'react'

import './game.css'

const box3x3Func = () => {

    return(
        <div className="box-3x3">
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
            <input type="number" name="name" min="1" max="9"></input>
        </div>
    )
}

function sudokuBox() {
    const box3x3 = box3x3Func()
    return(
        <div className="game-box">
            {box3x3}
            {box3x3}
            {box3x3}
            {box3x3}
            {box3x3}
            {box3x3}
            {box3x3}
            {box3x3}
            {box3x3}
        </div>
    )
}

export default sudokuBox;