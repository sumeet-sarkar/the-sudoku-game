import Timer from './Timer';
import Button from './common/button'

import './configuration.css'
import './Timer.css'


interface Props {
    isLoading: boolean;
}

const gameConfiguration = (props: Props): JSX.Element => {
    const timerInitial = (): JSX.Element => {
        return(
            <div className='timer'>
                <p>0 Secs</p>
            </div>
        )
    }

    return(
        <div className="main-configuration">

            <div className="actionable-configurations">
            
                <Button
                    text={"New Game"}
                />

                <div>
                    <label>Difficulty: </label>
                    <select>
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

export default gameConfiguration
