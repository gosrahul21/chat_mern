import React from 'react'
import '../css/messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
const Messages = ({messages,name}) => {
    const renderMessages=messages.map((message,i)=><Message key={i} message={message} name={name}/>)
    return (
        <ScrollToBottom className="messages">
            {/* render Messages */}
            
            {renderMessages}
            
            
        </ScrollToBottom>
    )
}



export default Messages
