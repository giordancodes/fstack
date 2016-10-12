import React, { Component } from 'react';
import $ from 'jquery';
import firebase from 'firebase';


var ChatApp = React.createClass({
  getInitialState() {
    return {
      newMessage: "",
      messages: {
				'id1': { author: 'G', message: 'Test'},
				'id2': { author: 'GB', message: 'TestTest'}
			},
      currentUser: null,
      loggedIn: false
    }
  },

  render() {
    if (!this.state.loggedIn) {
      return <div className="splash">
        <input type='text' placeholder="Enter your name to start chatting!" onChange={ this.setCurrentUser }/>
        <button onClick={ this.login }>Login</button>
      </div>
    } else {
      return <div>
        <h1>Welcome, { this.state.currentUser }</h1>

        { Object.keys(this.state.messages).map((id) => {
					var message = this.state.messages[id];
					var author = this.state.messages[id].author;
          return <div key={ id } className="message">
            <div className='author'>{ message.author }:</div>
            <div>{ message.message }</div>
						<div>
							{ author == this.state.currentUser ?
								<button onClick={ () => this.deleteMessage(id) }>
									delete?
								</button> : null}
						</div>
          </div>
        })}
        
        
        <div className='newMessage'>
          <form onSubmit={(event) => event.preventDefault() }>
          	<input type='text' value={ this.state.newMessage } onChange={ this.updateNewMessage } placeholder="Add a new Message" />
          	<button onClick={ this.postMessage }
          					onSubmit={ this.postMessage }>Add Message</button>
          </form>
        </div>
      </div>
    }
  },

  setCurrentUser(event) {
    this.setState({ currentUser: event.target.value });
  },

  login() {
    this.setState({ loggedIn: true });
  },

  updateNewMessage(event) {
    this.setState({ newMessage: event.target.value });
  },

  postMessage() {
		
    var newMessage = { 
			author: this.state.currentUser,
			message: this.state.newMessage 
		}
		
		this.firebaseRef.push(newMessage);
		this.setState({ newMessage: ""})
  },
	
	onDelete(id){
		this.deleteMessage(id);
	},
	
	
	deleteMessage(id){
		if(confirm("Are you friggin' sure?")){
			var deadMessage = this.state.messages[id];
			$.ajax({
				url: "https://fir-chat-2-f6668.firebaseio.com/messages/" + id + ".json",
				method: "DELETE",
				data: JSON.stringify(deadMessage)
			})
		}
	},
	
	componentDidUpdate(){
		window.scrollTo(0, document.body.clientHeight);
	},
	
	componentDidMount(){
		
		this.firebaseRef = firebase.database().ref("messages");
		
		this.firebaseRef.on("child_added", (dataSnapshot) => {
			console.log(dataSnapshot.key, dataSnapshot.val());
			
			var messages = this.state.messages;
			messages[dataSnapshot.key] = dataSnapshot.val();
			
			this.setState({messages});
			
		});
		
		this.firebaseRef.on('child_removed', (dataSnapshot) => {
			var messages = this.state.messages;
			
			delete messages[dataSnapshot.key];
			
			this.setState({messages});
		})
	},
	
	updateChat(){
		
		var component = this;
		$.ajax({
			url: "https://fir-chat-2-f6668.firebaseio.com/messages.json",
			method: "GET"
		})
	}
	
})

// for (var property in messages){
//					console.log(property);
//					messages[property];
//				}
//       
//       Object.keys(messages).map(function(property){
//					return <div>
//						{ messages[property].author }
//					</div>
//				})
//       

export default ChatApp;