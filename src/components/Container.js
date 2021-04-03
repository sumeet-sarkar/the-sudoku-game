import React, { Component } from 'react'

import Game from './game'

import './Container.css'


class Container extends Component {

    constructor(props) {
        super(props)

        this.question = [
            [0, 2, 0, 0, 0, 4, 3, 0, 0],
            [9, 0, 0, 0, 2, 0, 0, 0, 8],
            [0, 0, 0, 6, 0, 9, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 7, 2, 5, 0, 3, 6, 8, 0],
            [6, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 8, 0, 2, 0, 5, 0, 0, 0],
            [1, 0, 0, 0, 9, 0, 0, 0, 3],
            [0, 0, 9, 8, 0, 0, 0, 6, 0]
        ]

        this.state = {
            puzzle: [
                [0, 2, 0, 0, 0, 4, 3, 0, 0],
                [9, 0, 0, 0, 2, 0, 0, 0, 8],
                [0, 0, 0, 6, 0, 9, 0, 5, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 7, 2, 5, 0, 3, 6, 8, 0],
                [6, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 8, 0, 2, 0, 5, 0, 0, 0],
                [1, 0, 0, 0, 9, 0, 0, 0, 3],
                [0, 0, 9, 8, 0, 0, 0, 6, 0]
            ],
            rows:[
                "243",
                "928",
                "695",
                "1",
                "725368",
                "6",
                "825",
                "193",
                "986"
            ],
            columns: [
                "961",
                "278",
                "29",
                "6528",
                "29",
                "4935",
                "36",
                "586",
                "13",
            ],
            boxes: [
                "29",
                "4269",
                "385",
                "726",
                "53",
                "168",
                "819",
                "2598",
                "36",
            ]
        }
    }

    transform = (puzzle) => {

        const transformedPuzzle = []
        for (let boxIterator = 0; boxIterator<9;boxIterator++) {
            const box=[]
            const rowBoundary = parseInt(boxIterator/3) * 3
            for(let row = rowBoundary; row < rowBoundary+3; ++row) {
                const columnBoundary = parseInt(boxIterator%3) * 3
                for(let col = columnBoundary; col < columnBoundary+3; ++col) {
                    box.push(puzzle[row][col])
                }
            }
            transformedPuzzle.push(box)
        }
        return transformedPuzzle
    }

    updateElement = (updateElement, oldValue, value) => {
        if(updateElement.indexOf(value) !== -1) {
            updateElement += value
            alert("You're heading towards a wrong solution..")
        } else {
            if(isNaN(value)) {
                updateElement = updateElement.replace(oldValue, '')
            } else {
                updateElement += value
            }
        }
        return updateElement
    }

    inputHandler = (event) => {
        const row = (parseInt(event.target.id[0]/3) * 3) + parseInt(event.target.id[1]/3)
        const col = (parseInt(event.target.id[0]%3) * 3) + parseInt(event.target.id[1]%3)

        const puzzle = [...this.state.puzzle]

        const rows = [...this.state.rows]
        rows[row] = this.updateElement(rows[row], puzzle[row][col], event.target.valueAsNumber)

        const columns = [...this.state.columns]
        columns[col] = this.updateElement(columns[col], puzzle[row][col], event.target.valueAsNumber)

        const boxes = [...this.state.boxes]
        boxes[event.target.id[0]] = this.updateElement(boxes[event.target.id[0]], puzzle[row][col], event.target.valueAsNumber)

        puzzle[row][col] = event.target.valueAsNumber

        this.setState ({
            puzzle:puzzle,
            rows: rows,
            columns: columns,
            boxes: boxes
        })
    }

    render() {
        const ans = this.transform(this.state.puzzle)
        const question = this.transform(this.question)

        return (
            <div className="container">
                <header>Welcome to the Sudoku Game</header>
                <Game 
                    puzzle = {ans}
                    question = {question}
                    inputHandler = {this.inputHandler}
                />
                <footer>Your participation is highly appreciated</footer>
            </div>
        )
    }
}

export default Container
