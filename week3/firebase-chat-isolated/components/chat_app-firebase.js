import React, { Component } from 'react';
import firebase from 'firebase';


const ChatApp = React.createClass({
  getInitialState() {
    return {
      newMessage: "",
      messages: {},
      currentUser: 'null',
      loggedIn: false
    }
  },

  render() {
    if (!this.state.loggedIn) {
      return (
				<div className="splash">
					<form onSubmit={ (e) => e.preventDefault() }>
						<input type='text' placeholder="Enter your name to start blabbing!" onChange={ this.setCurrentUser } />
						<button onClick={ this.login }>Login</button>
					</form>
				</div>)
    } else {
      return (
				<div>
					<h1>Welcome, { this.state.currentUser }</h1>

					{ Object.keys(this.state.messages).map((id) => {
						
						const message = this.state.messages[id];
						const author = this.state.messages[id].author;
						return <div key={ id } className="message">
							<div className='author'>{ message.author }:</div>
							<div>{ message.message }</div>
							<div>
								{ author == this.state.currentUser ?
									<div>
										<button onClick={ () => this.deleteMessage(id) }>
											delete?
										</button>
										{/* <button onClick={ () => this.editMessage(id) }>
											edit?
										</button> */}
									</div>

									: null}
						</div>
          </div>
        })}
        
        <div className='newMessage'>
          <form onSubmit={ (e) => e.preventDefault() }>
          	<input type='text' value={ this.state.newMessage } onChange={ this.updateNewMessage } placeholder="Fill some space" />
          	<button onClick={ this.postMessage }
          					onSubmit={ this.postMessage }>Add Message</button>
          </form>
        </div>
      </div>)
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
		
    const newMessage = { 
			author: this.state.currentUser,
			message: this.state.newMessage 
		}
		
		this.firebaseRef.push(newMessage);
		this.setState({ newMessage: ""})
  },
	
	deleteMessage(id){
		if(confirm("Are you friggin' sure?")){
			this.firebaseRef.child(id).remove();
		}
	},
	
	editMessage(id){
		const messages = this.state.messages,
					msg = messages[id].message,
					updatedMessage = prompt('try again:', 'excrete poetry here');
		console.log(msg);
		console.log(updatedMessage);
	},
	
	componentDidUpdate(){
		window.scrollTo(0, document.body.clientHeight);
	},
	
	componentDidMount(){
		
		this.firebaseRef = firebase.database().ref("messages");
		
		this.firebaseRef.on("child_added", (dataSnapshot) => {
//			console.log(dataSnapshot.key, dataSnapshot.val());
			
			const messages = this.state.messages;
			messages[dataSnapshot.key] = dataSnapshot.val();
			
			this.setState({messages});
		});
		
		this.firebaseRef.on('child_removed', (dataSnapshot) => {
			const messages = this.state.messages;
			
			delete messages[dataSnapshot.key];
			
			this.setState({messages});
		})
	}
	
})

// for (const property in messages){
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