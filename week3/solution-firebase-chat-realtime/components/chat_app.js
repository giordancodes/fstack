var React = require('react');
var firebase = require('firebase');

var ChatApp = React.createClass({
  getInitialState: function() {
    return {
      newMessage: "",
      messages: [],
      currentUser: null,
      loggedIn: false
    }
  },

  render: function() {
    if (!this.state.loggedIn) {
      return <div className="splash">
        <input type='text' placeholder="Enter your name to start chatting!" onChange={ this.setCurrentUser }/>
        <button onClick={ this.login }>Login</button>
      </div>
    } else {
      return <div>
        <h1>Welcome, { this.state.currentUser }</h1>

        { this.state.messages.map(function(message, i) {
          <div key={ i } className="message">
          <div className='author'>{ message.author }:</div>
          { message.content }
          </div>
        })}

        <div className='newMessage'>
          <input type='text' value={ this.state.newMessage } onChange={ this.updateNewMessage } placeholder="Add a new Message" />
          <button onClick={ this.postMessage }>Add Message</button>
        </div>
      </div>
    }
  },

  setCurrentUser: function(event) {
    this.setState({ currentUser: event.target.value });
  },

  login: function() {
    this.setState({ loggedIn: true });
  },

  updateNewMessage: function(event) {
    this.setState({ newMessage: event.target.value });
  },

  postMessage: function() {
    var newMessage = { author: this.state.currentUser, message: this.state.newMessage }
    this.firebaseRef.push(newMessage);
    this.setState({newMessage: ""});
  },

  componentWillMount: function() {
    this.messages = [];
    this.firebaseRef = firebase.database().ref("messages");
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.messages.push(dataSnapshot.val());
      this.setState({
        messages: this.messages
      });
    }.bind(this));
  }
})

module.exports = ChatApp;
