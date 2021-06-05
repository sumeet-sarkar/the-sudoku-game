import Timer from './Timer';
import Button from './common/button'
import ShareSharpIcon from '@material-ui/icons/ShareSharp'
import { useDispatch } from 'react-redux'

import './configuration.css'
import './Timer.css'


interface Props {
    isLoading: boolean
    newGame: React.MouseEventHandler<HTMLButtonElement>
    changeDifficulty: React.ChangeEventHandler<HTMLSelectElement>
    puzzle: number[][]
    question: number[][]
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

    const shareGameHandler = (e: any) => {
        let progress = ''
        let row = 0        
        while(row < props.puzzle.length) {
            let column = 0
            while (column < props.puzzle[row].length) {
                if(isNaN(props.puzzle[row][column])) {
                    progress += '0'
                }
                else if (!isNaN(props.question[row][column])) {
                    progress += 'n' + props.puzzle[row][column]
                }
                else {
                    progress += props.puzzle[row][column]
                }
                column += 1
            }
            row += 1
        }

        const url = window.location.origin + window.location.pathname + '?question=' + progress
        const inputElement: any = document.getElementById('share-input')
        inputElement.style.display = 'block'
        inputElement.value = url
        inputElement.select()
        document.execCommand("copy");
        inputElement.style.display = 'none'

        showLinkCopiedAlert()
    }

    const showLinkCopiedAlert = () => {
        const alert : HTMLElement | null = document.getElementById('share-alert-text')
        if (alert) {
            alert.style.display = 'flex'
            setTimeout(function() {
                alert.style.display = 'none'
            }, 3000)
        }
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

                <div onClick={shareGameHandler} className="share-icon-div">
                    <ShareSharpIcon />
                </div>

                <div id="share-alert-text">
                    <p>link copied</p>
                </div>

                <input type='text' id='share-input'></input>

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
