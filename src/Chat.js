import React, { useState,useEffect } from 'react'
import './Chat.css'
import {
    IconButton,
} from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from './features/ChatSlice'
import db from './Firebase';
import firebase from 'firebase';
import {selectUser} from './features/UserSlice';
import FlipMove from 'react-flip-move';
 
function Chat() {
    const [input, setInput] = useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId)
    const [message, setMessage] = useState([]);
    const user = useSelector(selectUser)
    useEffect(() => {
        if(chatId){
        db.collection('chats')
            .doc(chatId)
            .collection('message')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) => 
                setMessage(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
            );
        }
    }, [chatId])
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('chats').doc(chatId).collection('message').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        })
        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>
                    To:<span>{chatName}</span>
                </h4>
                <strong>Details</strong>
            </div>
            <div className="chat_message">
                <FlipMove>
                {message.map(({id,data})=>
                    <Message key={id} contents={data} /> 
                )}
                </FlipMove>
            </div>
            <div className="chat_input">
                <form>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        placeholder="iMessage"
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton >
                    <MicNoneIcon className="chat_mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
