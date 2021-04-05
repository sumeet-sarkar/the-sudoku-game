import React, { Component } from 'react'

import Game from './game'

import './Container.css'


class Container extends Component {

    constructor(props) {
        super(props)

        this.question = [
            [NaN, 2, NaN, NaN, NaN, 4, 3, NaN, NaN],
            [9, NaN, NaN, NaN, 2, NaN, NaN, NaN, 8],
            [NaN, NaN, NaN, 6, NaN, 9, NaN, 5, NaN],
            [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 1],
            [NaN, 7, 2, 5, NaN, 3, 6, 8, NaN],
            [6, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
            [NaN, 8, NaN, 2, NaN, 5, NaN, NaN, NaN],
            [1, NaN, NaN, NaN, 9, NaN, NaN, NaN, 3],
            [NaN, NaN, 9, 8, NaN, NaN, NaN, 6, NaN]
        ]

        this.rows = [
            "243NaNNaNNaNNaNNaNNaN",
            "928NaNNaNNaNNaNNaNNaN",
            "695NaNNaNNaNNaNNaNNaN",
            "1NaNNaNNaNNaNNaNNaNNaNNaN",
            "725368NaNNaNNaN",
            "6NaNNaNNaNNaNNaNNaNNaNNaN",
            "825NaNNaNNaNNaNNaNNaN",
            "193NaNNaNNaNNaNNaNNaN",
            "986NaNNaNNaNNaNNaNNaN"
        ]

        this.columns = [
            "961NaNNaNNaNNaNNaNNaN",
            "278NaNNaNNaNNaNNaNNaN",
            "29NaNNaNNaNNaNNaNNaNNaN",
            "6528NaNNaNNaNNaNNaN",
            "29NaNNaNNaNNaNNaNNaNNaN",
            "4935NaNNaNNaNNaNNaN",
            "36NaNNaNNaNNaNNaNNaNNaN",
            "586NaNNaNNaNNaNNaNNaN",
            "138NaNNaNNaNNaNNaNNaN",
        ]

        this.boxes = [
            "29NaNNaNNaNNaNNaNNaNNaN",
            "4269NaNNaNNaNNaNNaN",
            "385NaNNaNNaNNaNNaNNaN",
            "726NaNNaNNaNNaNNaNNaN",
            "53NaNNaNNaNNaNNaNNaNNaN",
            "168NaNNaNNaNNaNNaNNaN",
            "819NaNNaNNaNNaNNaNNaN",
            "2598NaNNaNNaNNaNNaN",
            "36NaNNaNNaNNaNNaNNaNNaN",
        ]

        this.errorRows = ""
        this.errorColumns = ""
        this.errorBoxes = ""

        this.state = {
            puzzle: [
                [NaN, 2, NaN, NaN, NaN, 4, 3, NaN, NaN],
                [9, NaN, NaN, NaN, 2, NaN, NaN, NaN, 8],
                [NaN, NaN, NaN, 6, NaN, 9, NaN, 5, NaN],
                [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 1],
                [NaN, 7, 2, 5, NaN, 3, 6, 8, NaN],
                [6, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
                [NaN, 8, NaN, 2, NaN, 5, NaN, NaN, NaN],
                [1, NaN, NaN, NaN, 9, NaN, NaN, NaN, 3],
                [NaN, NaN, 9, 8, NaN, NaN, NaN, 6, NaN]
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
