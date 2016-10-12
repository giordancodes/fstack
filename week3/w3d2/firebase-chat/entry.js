var React = require('react');
var ReactDOM = require('react-dom');

// Initialize Firebase
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyBgNrPtUxCTGbq1mF3NbZGMVEXnyTBWlJo",
  authDomain: "fir-chat-bac0f.firebaseapp.com",
  databaseURL: "https://fir-chat-bac0f.firebaseio.com",
  storageBucket: "fir-chat-bac0f.appspot.com",
  messagingSenderId: "29478721801"
};
firebase.initializeApp(config);

// Include your React components like this:
import ChatApp from './components/chat_app';

ReactDOM.render(<ChatApp />, document.getElementById("placeholder"));
