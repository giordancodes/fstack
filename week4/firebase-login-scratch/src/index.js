import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from 'firebase';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCjIeeUpG482EugOaG-d4zxFbAgX-iER0E",
  authDomain: "auth1-624ca.firebaseapp.com",
  databaseURL: "https://auth1-624ca.firebaseio.com",
  storageBucket: "auth1-624ca.appspot.com",
  messagingSenderId: "259438038024"
};
firebase.initializeApp(config);