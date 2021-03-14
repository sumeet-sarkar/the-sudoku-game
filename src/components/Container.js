import React, { Component } from 'react'

import Game from './game'

import './Container.css'


class Container extends Component {

    render() {
        return(
            <div className="container">
                <header>Welcome to the Sudoku Game</header>
                <Game />
                <footer>Your participation is highly appreciated</footer>
            </div>
        )
    }
}

export default Container