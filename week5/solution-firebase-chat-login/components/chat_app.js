var React = require('react');
var firebase = require('firebase');
var $ = require('jquery');
import Login from './login';

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
      console.log(Login);
      return <Login onLogin={ this.login } />
    } else {
      var msgs = this.state.messages;

      return <div>
        <h1>Welcome, { this.state.currentUser }</h1>

        { Object.keys(msgs).map((id) => {
          return <div key={ id } className="message">
            <div className='author'>{ msgs[id].author }:</div>
            { msgs[id].message }
            <div className="actions">
              <button onClick={ () => this.deleteMessage(id) }>Delete</button>
            </div>
          </div>
        })}

        <div className='newMessage'>
          <input type='text' value={ this.state.newMessage } onChange={ this.updateNewMessage } placeholder="Add a new Message" />
          <button onClick={ this.postMessage }>Add Message</button>
        </div>
      </div>
    }
  },

  deleteMessage: function(id) {
    this.firebaseRef.child(id).remove();
  },

  setCurrentUser: function(event) {
    this.setState({ currentUser: event.target.value });
  },

  login: function(email) {
    this.setState({loggedIn: true, currentUser: email })
  },

  updateNewMessage: function(event) {
    this.setState({ newMessage: event.target.value });
  },

  postMessage: function() {
    var newMessage = {
      author: this.state.currentUser,
      message: this.state.newMessage
    }
    this.firebaseRef.push(newMessage);
    this.setState({newMessage: ''});
  },

  componentDidUpdate: function() {
    window.scrollTo(0, document.body.clientHeight);
  },

  componentDidMount: function() {
    var component = this;
    this.firebaseRef = firebase.database().ref("messages");
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      var messages = this.state.messages;
      messages[dataSnapshot.key] = dataSnapshot.val();
      this.setState({messages: messages});
    });
    this.firebaseRef.on("child_removed", (dataSnapshot) => {
      var messages = this.state.messages;
      delete messages[dataSnapshot.key];
      this.setState({messages: messages});
    });
  }
})

module.exports = ChatApp;
