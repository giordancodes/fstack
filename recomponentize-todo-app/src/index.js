import React from 'react';
import ReactDOM from 'react-dom';
import ReComp from './ReComp';
import firebase from 'firebase';
import './index.css';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBmrub7mBHSnsxutcJRqyct-QMJpvJMH1c",
  authDomain: "nein-to-do.firebaseapp.com",
  databaseURL: "https://nein-to-do.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "1020198943030"
  };
firebase.initializeApp(config);

ReactDOM.render(
  <ReComp />,
  document.getElementById('root')
);
