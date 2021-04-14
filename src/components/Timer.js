import React, { useState, useEffect } from 'react';

import './Timer.css'

function Timer() {
    const [timerSecs, setTimerSecs] = useState(0)

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
