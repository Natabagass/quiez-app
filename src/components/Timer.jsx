import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from "react-router-dom";

const Timer = () => {
    const time = new Date();
    const navigate = useNavigate()
    time.setSeconds(time.getSeconds() + 10);

        const {seconds, minutes, hours} = useTimer({ expiryTimestamp: time, onExpire: () => {
            alert("times up"),
            navigate('/dashboard/hasil')
    }});

        return (  
            <div>
                <h2>Timer : {minutes}:{seconds}</h2>
            </div>
        );
}
export default Timer;