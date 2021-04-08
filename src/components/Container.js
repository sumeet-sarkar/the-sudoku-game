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

        this.rows = []
        this.question.forEach(rows => {
            const row = rows.filter(elem => {
                return !isNaN(elem)
            })
            this.rows.push(row.join(""))
        })

        this.columns = []
        for(let i = 0; i< 9; i++){
            let col = ""
            for (let j = 0; j<9; j++) {
                if(!isNaN(this.question[j][i]))
                    col += this.question[j][i]
            }
            this.columns.push(col)
        }

        this.boxes = []
        this.transform(this.question).forEach(rows => {
            const row = rows.filter(elem => {
                return !isNaN(elem)
            })
            this.boxes.push(row.join(""))
        })

        this.errorRows = ""
        this.errorColumns = ""
        this.errorBoxes = ""

        this.state = {
            puzzle: [
                [...this.question[0]],
                [...this.question[1]],
                [...this.question[2]],
                [...this.question[3]],
                [...this.question[4]],
                [...this.question[5]],
                [...this.question[6]],
                [...this.question[7]],
                [...this.question[8]],
            ],
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

    updateErrors = (updateErrors, index, element, str) => {

        let isError = false
        const set = {}
        for(let i = 0; i<element.length; i++) {
            if(set[element[i]]) {
                set[element[i]]++
                isError = true
            } else {
                set[element[i]] = 1
            }
        }

        if(updateErrors.indexOf(index) === -1 && isError) {
            document.querySelectorAll(`[${str}='${index}']`).forEach(element => {
                element.classList.add(`error-${str}`)
            })
            updateErrors += index
        }

        if(updateErrors.indexOf(index) !== -1 && !isError) {
            document.querySelectorAll(`[${str}='${index}']`).forEach(element => {
                element.classList.remove(`error-${str}`)
            })
            updateErrors = updateErrors.replace(index, '')
        }
        return updateErrors
    }

    updateElement = (updateElement, oldValue, newValue) => {

        if(isNaN(oldValue)) {
            return updateElement + newValue
        }
        return updateElement.replace(oldValue, newValue)
    }

    inputCheck = (value) => {
        value = value.replace(/[^0-9]/g,'')
        if (value.length > 1) {
            value = value[value.length-1]
        }
        return value
    }

    inputHandler = (event) => {

        event.target.value = this.inputCheck(event.target.value)

        const row = (parseInt(event.target.id[0]/3) * 3) + parseInt(event.target.id[1]/3)
        const col = (parseInt(event.target.id[0]%3) * 3) + parseInt(event.target.id[1]%3)
        const box = event.target.id[0]

        const puzzle = [...this.state.puzzle]

        this.rows[row] = this.updateElement(this.rows[row], puzzle[row][col], event.target.value)
        this.errorRows = this.updateErrors(this.errorRows, row, this.rows[row], "row")

        this.columns[col] = this.updateElement(this.columns[col], puzzle[row][col], event.target.value)
        this.errorColumns = this.updateErrors(this.errorColumns, col, this.columns[col], "column")

        this.boxes[box] = this.updateElement(this.boxes[box], puzzle[row][col], event.target.value)
        this.errorBoxes = this.updateErrors(this.errorBoxes, box, this.boxes[box], "box")

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
