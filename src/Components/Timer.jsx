import React, {useState, useEffect} from 'react'

const Timer = ({timeOut, questionNumber}) => {
    const [timer, setTimer] = useState(20)

    useEffect(()=>{
        if (timer === 0) return timeOut(true)
        const interval = setInterval(()=>{
            setTimer((prev)=>prev -1)
        },1000)
        return ()=> clearInterval(interval)
    },[timeOut, timer])

    useEffect(()=>{
        setTimer(20)
    },[questionNumber])
    return timer
}

export default Timer
