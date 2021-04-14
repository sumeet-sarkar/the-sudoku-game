import { useState, useEffect } from 'react';
import * as React from 'react';
import './Timer.css'

const Timer: React.FC = () => {
    const [timerSecs, setTimerSecs] = useState<number>(0)

    useEffect(() => {
        const timerTimeout = setTimeout(function() {
            setTimerSecs(timerSecs + 1)
        }, 1000)

        return () => {
            clearTimeout(timerTimeout)
        }
    }, [timerSecs])

    return (
        <div className='timer'>
            <p>{timerSecs} Secs</p>
        </div>
    )
}

export default Timer
