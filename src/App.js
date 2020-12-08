import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import IMessage from './IMessage';
import Login from './Login';
import { selectUser, login, logout } from './features/UserSlice';
import { auth } from './Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is loged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //logout user
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {user ? <IMessage /> : <Login /> }
    </div>
  );
}

export default App;
