import { createStore } from 'redux'

const timerReducer = (state = { timerSecs: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            timerSecs: state.timerSecs + 1
        }
    }

    if (action.type === 'newGame') {
        return {
            timerSecs: 0
        }
    }

    return state
}

const store = createStore(timerReducer)

export default store
