import React from 'react'
import ReactEmoji from 'react-emoji';
import '../css/message.css'

const Message = ({message:{
    user,
    text
},name}) => {
    
    let isMyMessage=user===name
    const trimmedName= name.trim().toLowerCase()
    return (
        isMyMessage?(
            <div className="messageContainer justifyStartEnd">
                <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
            </div>
        ):(
            <div className="messageContainer justifyStart">
           
        <div className="messageBox backgroundLight">

            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentText pl-10">{user}</p>
        </div>
        )
        
    )
}


export default Message
