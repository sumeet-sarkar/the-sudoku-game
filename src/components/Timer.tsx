import { useEffect } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import * as React from 'react'
import './Timer.css'

const Timer: React.FC = () => {
    const timerSecs = useSelector((state: RootStateOrAny) => state.timerSecs)
    const dispatch = useDispatch()

    useEffect(() => {
        const timerTimeout = setTimeout(function() {
            dispatch({ type: 'increment' })
        }, 1000)

        return () => {
            clearTimeout(timerTimeout)
        }
    })

    return (
        <div className='timer'>
            <p>{timerSecs} Secs</p>
        </div>
    )
}

export default Timer
