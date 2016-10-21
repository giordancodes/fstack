var React = require('react');
var ReactDOM = require('react-dom');

var firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDD9CzUnn5XoEW4sJhmo8Tc8ou_Ofqh66Y",
  authDomain: "fir-chat-2-f6668.firebaseapp.com",
  databaseURL: "https://fir-chat-2-f6668.firebaseio.com",
  storageBucket: "fir-chat-2-f6668.appspot.com",
  messagingSenderId: "586654546422"
};
firebase.initializeApp(config);

// Include your React components like this:
var ChatApp = require('./components/chat_app');

ReactDOM.render(<ChatApp />, document.getElementById("placeholder"));
