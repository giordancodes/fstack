import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

// Initialize Firebase
 var config = {
	apiKey: "AIzaSyDW_gLoeyLrdeYXq3HZMJug2pVcoE-bT_I",
	authDomain: "anon-chat-a2cfb.firebaseapp.com",
	databaseURL: "https://anon-chat-a2cfb.firebaseio.com",
	storageBucket: "",
	messagingSenderId: "216595949977"
 };
 firebase.initializeApp(config);

// Include your React components like this:
import ChatApp from './components/chat_app-firebase';

ReactDOM.render(<ChatApp />, document.getElementById("placeholder"));
