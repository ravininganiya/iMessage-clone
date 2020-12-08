import React from 'react'
import {Button} from '@material-ui/core';
import './Login.css';
import {auth, provider} from "./Firebase";

function Login() {
    const handleLogin =()=>{
        auth.signInWithPopup(provider).catch((err)=> alert(err.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://i.pinimg.com/originals/0f/bf/16/0fbf1634d3df83b601b456f3c6aa3c7d.jpg" alt="logo" />
            </div>
            <h1>iMessage</h1>
            <Button onClick={handleLogin}>SIGN IN</Button>
        </div>
    )
}

export default Login
