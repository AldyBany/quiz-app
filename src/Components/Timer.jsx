import React, {useState, useEffect} from 'react'

const Timer = ({setStop, questionNumber}) => {
    const [timer, setTimer] = useState(20)

    useEffect(()=>{
        if (timer === 0)
         setStop(true)
        const interval = setInterval(()=>{
            setTimer((prev)=>prev -1)
        },1000)
        return ()=> clearInterval(interval)
    },[setStop, timer])

    useEffect(()=>{
        setTimer(20)
    },[questionNumber])
    return timer
}

export default Timer
