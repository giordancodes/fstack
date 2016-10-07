var React = require('react');
var firebase = require('firebase');
var $ = require('jquery');

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
      var msgs = this.state.messages;
      console.log(msgs, Object.keys(msgs));

      return <div>
        <h1>Welcome, { this.state.currentUser }</h1>

        { Object.keys(msgs).map(function(id) {
          return <div key={ id } className="message">
            <div className='author'>{ msgs[id].author }:</div>
            { msgs[id].message }
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
    var component = this;
    $.ajax({
      url: "https://fir-chat-2-f6668.firebaseio.com/messages.json",
      method: 'POST',
      data: JSON.stringify(newMessage),
      success: function(data) {
        var messages = component.state.messages;
        messages[data.name] = newMessage;
        component.setState({messages: messages, newMessage: ''});
      }
    })
  },

  componentWillMount: function() {
    var component = this;
    $.ajax({
      url: "https://fir-chat-2-f6668.firebaseio.com/messages.json",
      method: 'GET',
      success: function(data) {
        component.setState({ messages: data});
      }
    })

  }
})

module.exports = ChatApp;
