import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Router, Route, browserHistory } from 'react-router';

// import App from './components/App';
import Login from './components/Login';
import Chat from './components/Chat';

import './index.css';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCjRtXPy9jdNmCzvqFd6W8Vhzkfq98EgsI",
  authDomain: "fir-login-scratch.firebaseapp.com",
  databaseURL: "https://fir-login-scratch.firebaseio.com",
  storageBucket: "fir-login-scratch.appspot.com",
  messagingSenderId: "227483755781"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router history={ browserHistory } >
  	<Route path='/' component={ Login } />
  	<Route path='/chat' component={ Chat } />
  </Router>
  ,
  document.getElementById('root')
);