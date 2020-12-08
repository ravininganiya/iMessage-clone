import React, { forwardRef } from 'react'
import {Avatar} from '@material-ui/core';
import './Message.css';
import { useSelector } from 'react-redux';
import {selectUser} from './features/UserSlice'
 
const Message= forwardRef(({
    id,contents:{ uid, message, email, photo, timestamp, displayName}
},ref)=> {
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className={`message ${user.email ===email && "message_sender"}`}>
            <Avatar className="message_photo" src={photo} />
            <p>{message}</p> 
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>           
        </div>
    )
})

export default Message
