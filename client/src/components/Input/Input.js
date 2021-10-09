import React from 'react'
import PropTypes from 'prop-types'
import '../../css/input.css'

const Input = props => {
    const {message,sendMessage,setMessage,typeMessage}=props
    return (
        <form className="form" onSubmit={(e)=>{
           e.preventDefault();
            sendMessage(e)

        }}>
            <input className="input"
            type="text"
            name="input"
            placeholder="Type a message..."
            value={message}
            onChange={setMessage}
            autoComplete="off"/>
            
            <button className="sendButton" type="submit"> send</button>

        </form> 
    )
}



export default Input
