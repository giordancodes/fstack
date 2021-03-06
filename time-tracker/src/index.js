import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Routes from './Routes';
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
  <Routes />,
  document.getElementById('root')
);
