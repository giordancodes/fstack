import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Login from './Login';
// import ProjectsList from './ProjectsList';
import './index.css';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCJrkE_eRHlaua2szfLmr0BcrPqFf9MwIc",
    authDomain: "timetracker-49584.firebaseapp.com",
    databaseURL: "https://timetracker-49584.firebaseio.com",
    storageBucket: "timetracker-49584.appspot.com",
    messagingSenderId: "869644678005"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
