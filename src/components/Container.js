import { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Game from './game'
import Modal from './common/modal'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import Header from './header/header.tsx'
import Configuration from './configuration.tsx'
import questions from '../mockData/puzzles'

import './Container.css'


class Container extends Component {

    state = {
        puzzle: null,
        didWin: false,
        loading: true,
        difficulty: "easy",
    }

    getRandomQuestion = () => {
        let randomInt = Math.floor(Math.random() * 3)
        while(randomInt === this.randomInt) {
            randomInt = Math.floor(Math.random() * 3)
        }
        this.randomInt = randomInt

        return questions[this.state.difficulty][this.randomInt]
    }

    getQuestion = () => {
        const questionQueryParam = new URLSearchParams(window.location.search).get('question')

        if(questionQueryParam) {
            const finalQuestion = []
            let test = []

            let i = 0
            while (i < questionQueryParam.length) {
                if (questionQueryParam[i] === 'n') {
                    i++
                    test.push(questionQueryParam[i])
                }
                else {
                    test.push(NaN)
                }
                if(test.length === 9) {
                    finalQuestion.push(test)
                    test = []
                }
                i++
            }
            return finalQuestion
        }
        return this.getRandomQuestion()
    }

    setQuestion = () => {

        this.question = this.getQuestion()
        this.setClassVariablesHelper(this.question)
    }

    setClassVariablesHelper = (question) => {

        this.rows = []
        question.forEach(rows => {
            const row = rows.filter(elem => {
                return !isNaN(elem)
            })
            this.rows.push(row.join(""))
        })

        this.columns = []
        for(let i = 0; i< 9; i++){
            let col = ""
            for (let j = 0; j<9; j++) {
                if(!isNaN(question[j][i]))
                    col += question[j][i]
            }
            this.columns.push(col)
        }

        this.boxes = []
        this.transform(question).forEach(rows => {
            const row = rows.filter(elem => {
                return !isNaN(elem)
            })
            this.boxes.push(row.join(""))
        })

        this.naNCount = 0
        question.forEach(row => {
            row.forEach(elem => {
                if (isNaN(elem)) {
                    this.naNCount++
                }
            })
        })

        this.errorRows = ""
        this.errorColumns = ""
        this.errorBoxes = ""
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

    updateNaNCount = (newValue, oldValue) => {
        if(isNaN(oldValue)) {
            --this.naNCount
        }
        if(isNaN(newValue)) {
            ++this.naNCount
        }
    }

    checkDidWin = () => {
        if(this.naNCount === 0 && this.errorRows.length === 0 && this.errorColumns.length === 0 && this.errorBoxes.length === 0) {
            return true
        }
        return false
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

        this.updateNaNCount(event.target.valueAsNumber, puzzle[row][col])
        const didWin = this.checkDidWin()

        puzzle[row][col] = event.target.valueAsNumber

        this.setState ({
            puzzle:puzzle,
            didWin: didWin
        })
    }

    removeErrorClassesFromDOM = () => {

        const errorRows = document.getElementsByClassName('error-row')
        while (errorRows.length > 0) {
            errorRows[0].classList.remove('error-row')
        }

        const errorColumns = document.getElementsByClassName('error-column')
        while (errorColumns.length > 0) {
            errorColumns[0].classList.remove('error-column')
        }

        const errorBoxes = document.getElementsByClassName('error-box')
        while (errorBoxes.length > 0) {
            errorBoxes[0].classList.remove('error-box')
        }
    }

    startNewGame = () => {
        this.props.history.push( {
            search: ''
        })
        this.setQuestion()
        this.setStatePuzzle()
        this.removeErrorClassesFromDOM()
    }

    changeDifficulty = (event) => {
        this.setState({
            difficulty: event.target.value
        })
    }

    setStatePuzzle = () => {
        const puzzle = [
            [...this.question[0]],
            [...this.question[1]],
            [...this.question[2]],
            [...this.question[3]],
            [...this.question[4]],
            [...this.question[5]],
            [...this.question[6]],
            [...this.question[7]],
            [...this.question[8]],
        ]

        const queryParams = new URLSearchParams(window.location.search)
        const question = queryParams.get('question')
        if(question) {
            let i = 0
            let char = 0
            while (i<question.length) {
                if (question[i] === '0') {
                    ++char
                }
                else if (question[i] !== 'n') {
                    puzzle[parseInt(char/9)][char%9] = question[i]
                    ++char
                }
                ++i
            }
        }

        function setClassVariablesHelper() {

            if(question) {
                this.setClassVariablesHelper(puzzle)
                for(let row = 0; row < 9; row++) {
                    this.errorRows = this.updateErrors(this.errorRows, row, this.rows[row], 'row')
                }
                for(let col = 0; col < 9; col++) {
                    this.errorColumns = this.updateErrors(this.errorColumns, col, this.columns[col], 'column')
                }
                for(let box = 0; box < 9; box++) {
                    this.errorBoxes = this.updateErrors(this.errorBoxes, box, this.boxes[box], 'box')
                }
            }
        }

        this.setState({
            puzzle: puzzle,
            loading: false,
        }, setClassVariablesHelper)
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.difficulty !== prevState.difficulty){
            this.startNewGame()
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( () => {
                this.setQuestion()
                setTimeout(() => {
                    this.setStatePuzzle()
                }, 0)
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                if(error.message === "Network Error") {
                    alert("You're offline :(\nPlease refresh once you're back online..")
                }
                else {
                    alert(error.message)
                }
            })
    }

    render() {

        return (

            <ErrorBoundary>
                <div className="container">
                    <Header/>

                    <Configuration 
                        isLoading = {this.state.loading}
                        newGame = {this.startNewGame}
                        changeDifficulty = {this.changeDifficulty}
                        puzzle = {this.state.puzzle}
                        question = {this.question}
                    />

                    <div className="game-box">
                        {this.state.loading &&
                        <i className="fa fa-refresh fa-spin fa-5x"></i>
                        }
                        {this.state.puzzle &&
                        <Game 
                            puzzle = {this.transform(this.state.puzzle)}
                            question = {this.transform(this.question)}
                            inputHandler = {this.inputHandler}
                        />}
                    </div>

                    {this.state.didWin && 
                    <Modal 
                        text = "Congratulations!! You've completed this game."
                    />
                    }
                    <footer>Your participation is highly appreciated</footer>
                </div>
            </ErrorBoundary>
        )
    }
}

export default withRouter(Container)
