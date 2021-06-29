import React from 'react'

const Start = ({setStart, start,earning}) => {
    const handleStart =()=>{
        setStart(!start)
        earning(0)

    }
    return (
        <div className="start">
            <button className="startBtn" onClick={handleStart}>Start</button>
        </div>
    )
}

export default Start
