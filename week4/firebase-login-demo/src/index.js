import React from 'react';
import ReactDOM from 'react-dom';
import App from './solution/App';
import './index.css';
import firebase from 'firebase';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAVDuYnGR232I4TNsmxqr1M2ucRVP6_qnE",
  authDomain: "login-demo-a123a.firebaseapp.com",
  databaseURL: "https://login-demo-a123a.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "345442827524"
};
firebase.initializeApp(config);
