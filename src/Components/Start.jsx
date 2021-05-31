import React from 'react'

const Start = ({setStart, start}) => {
    return (
        <div className="start">
            <button className="startBtn" onClick={()=>setStart(!start)}>Start</button>
        </div>
    )
}

export default Start
