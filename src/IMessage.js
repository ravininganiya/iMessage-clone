import React from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';
import './IMessage.css'
function IMessage() {
    return (
        <div className="iMessage">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default IMessage
