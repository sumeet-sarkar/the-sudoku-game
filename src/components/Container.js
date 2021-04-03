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

        this.rows = [
            "243",
            "928",
            "695",
            "1",
            "725368",
            "6",
            "825",
            "193",
            "986"
        ]

        this.columns = [
            "961",
            "278",
            "29",
            "6528",
            "29",
            "4935",
            "36",
            "586",
            "138",
        ]

        this.boxes = [
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

        this.errorRows = ""
        this.errorColumns = ""
        this.errorBoxes = ""

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

    updateErrors = (updateErrors, index, element, oldValue, newValue, str) => {

        if(isNaN(newValue)){
            let count = 0
            for(let i = 0; i<element.length; i++){
                if(element[i] == oldValue) {
                    count++
                }
            }
            if(count===2) {
                updateErrors = updateErrors.replace(index, '')
                document.querySelectorAll(`[${str}='${index}']`).forEach(element => {
                    element.classList.remove(`error-${str}`)
                })
            }
            return
        }

        if(element.indexOf(newValue) === -1 ) {
            return
        }

        if(element.indexOf(newValue) !== -1 && updateErrors.indexOf(index) === -1) {
            updateErrors += index
            document.querySelectorAll(`[${str}='${index}']`).forEach(element => {
                element.classList.add(`error-${str}`)
            })
            return
        }
    }

    updateElement = (updateElement, index, oldValue, newValue) => {

        if(isNaN(newValue)) {
            updateElement[index] = updateElement[index].replace(oldValue, '')
        }
        else {
            updateElement[index] += newValue
        }
    }

    inputHandler = (event) => {

        const row = (parseInt(event.target.id[0]/3) * 3) + parseInt(event.target.id[1]/3)
        const col = (parseInt(event.target.id[0]%3) * 3) + parseInt(event.target.id[1]%3)
        const box = event.target.id[0]

        const puzzle = [...this.state.puzzle]

        this.updateErrors(this.errorRows, row, this.rows[row], puzzle[row][col], event.target.valueAsNumber, "row")
        this.updateElement(this.rows, row, puzzle[row][col], event.target.valueAsNumber)

        this.updateErrors(this.errorColumns, col, this.columns[col], puzzle[row][col], event.target.valueAsNumber, "column")
        this.updateElement(this.columns, col, puzzle[row][col], event.target.valueAsNumber)

        this.updateErrors(this.errorBoxes, box, this.boxes[box], puzzle[row][col], event.target.valueAsNumber, "box")
        this.updateElement(this.boxes, box, puzzle[row][col], event.target.valueAsNumber)

        puzzle[row][col] = event.target.valueAsNumber

        this.setState ({
            puzzle:puzzle
        })
    }

    render() {

        const puzzle = this.transform(this.state.puzzle)
        const question = this.transform(this.question)

        return (
            <div className="container">
                <header>Welcome to the Sudoku Game</header>
                <Game 
                    puzzle = {puzzle}
                    question = {question}
                    inputHandler = {this.inputHandler}
                />
                <footer>Your participation is highly appreciated</footer>
            </div>
        )
    }
}

export default Container
