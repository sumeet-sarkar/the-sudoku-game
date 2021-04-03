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
            rows: [
                "156789",
                "134567",
                "123478",
                "23456789",
                "149",
                "12345789",
                "134679",
                "245678",
                "123457",
            ],
            columns: [
                "234578",
                "134569",
                "1345678",
                "13479",
                "1345678",
                "12678",
                "1245789",
                "123479",
                "245679",
            ],
            boxes: [
                "1345678",
                "135789",
                "124679",
                "134589",
                "1246789",
                "234579",
                "234567",
                "13467",
                "1245789",
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

    render() {
        const ans = this.transform(this.state.puzzle)
        const question = this.transform(this.question)

        return (
            <div className="container">
                <header>Welcome to the Sudoku Game</header>
                <Game 
                    puzzle = {ans}
                    question = {question}
                />
                <footer>Your participation is highly appreciated</footer>
            </div>
        )
    }
}

export default Container
