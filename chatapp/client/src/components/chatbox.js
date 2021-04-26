//This is the skeleton of the chatbox

import React from 'react'
import onlineIcon from './onlineIcon.png'
import closeIcon from './closeIcon.png'
import './chatbox.css'

const Chatbox = ({room})=>{
    return(
        <div className="chatbox">
            <div className="leftSide">
                <img className="onlineIcon" src={onlineIcon} alt="Online" />
                <h3>Room : {room}</h3>
            </div>

            <div className="rightSide">
                <a href="/"><img src={closeIcon} alt="Close" /></a>
                {/* User leaves the room upon clicking the close icon */}
            </div>
        </div> 
    )      
}

export default Chatbox