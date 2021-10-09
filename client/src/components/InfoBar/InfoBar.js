import React from 'react';
import {Link} from 'react-router-dom'
import '../../css/InfoBar.css'
const onlineIcon="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png"
const closeIcon = "https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png"
export default ({room}) =>{
   return <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online"/>
            <h3>{room}</h3>

        </div>
        <div className="rightInnerContainer">
        <Link to="/"><img src={closeIcon} alt ="close"/></Link>
        </div>
    </div>
}