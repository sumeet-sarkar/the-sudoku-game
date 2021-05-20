import Timer from './Timer';
import Button from './common/button'
import { useDispatch } from 'react-redux'

import './configuration.css'
import './Timer.css'


interface Props {
    isLoading: boolean
    newGame: React.MouseEventHandler<HTMLButtonElement>
    changeDifficulty: React.ChangeEventHandler<HTMLSelectElement>
}

const GameConfiguration = (props: Props): JSX.Element => {

    const dispatch = useDispatch()

    const timerInitial = (): JSX.Element => {
        return(
            <div className='timer'>
                <p>0 Secs</p>
            </div>
        )
    }

    const newGameHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch({ type: 'newGame' })
        props.newGame(e)
    }

    const changeDifficultyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'newGame' })
        props.changeDifficulty(e)
    }

    return(
        <div className="main-configuration">

            <div className="actionable-configurations">

                <Button
                    text={"New Game"}
                    clicked={newGameHandler}
                />

                <div>
                    <label>Difficulty: </label>
                    <select onChange={changeDifficultyHandler}>
                        <option value="easy" defaultValue="true">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        <option value="veryHard">Very Hard</option>
                    </select>
                </div>
            </div>

            {props.isLoading && 
                timerInitial()
            }

            {!props.isLoading && 
                <Timer/>
            }

        </div>
    )
}

export default GameConfiguration
