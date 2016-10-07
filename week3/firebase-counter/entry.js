var ReactDOM = require('react-dom');
var React = require('react');
var firebase = require('firebase');
var fetch = require('isomorphic-fetch');
var $ = require('jquery');

var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: null,
			error: false,
			loading: false
    }
  },

  render: function() {
    console.log(this.state);
		if (this.state.loading){
			return <div>Loading...</div>
		} else{
			return <div>
				{ this.error() }
				{ this.state.error ? <div>Error, did not compute</div> : null }
				<div>Counter: { this.state.counter }</div>
				<div><button onClick={ this.increment }>Add One</button></div>
				<div><button onClick={ this.decrement }>Minus One</button></div>
				<div><button onClick={ this.reset }>Reset</button></div>
			</div>
		}
  },
	
	error: function(){
		if (this.state.error){
			return <div>Error, did not compute</div>
		}
	},

  increment: function() {
		
    var newCount = this.state.counter + 1;
		var oldCount = this.state.counter;
		
		this.updateDatabase(oldCount, newCount);
		
    this.setState({counter: newCount});
  },
	
	decrement: function() {
		
    var newCount = this.state.counter - 1;
		var oldCount = this.state.counter;
		
		this.updateDatabase(oldCount, newCount);
		
    this.setState({counter: newCount});
  },
	
	reset: function() {
    var newCount = this.state.counter = 0;
    var oldCount = this.state.counter;
		
		this.updateDatabase(oldCount, newCount);
		
    this.setState({counter: newCount});
  },
	
	updateDatabase: function(oldCount, newCount) {
		var component = this;
		$.ajax({
			url: "https://dat-counter.firebaseio.com/.json",
			method: "PUT",
			data: JSON.stringify(newCount),
			error: function(){
				component.setState({counter: oldCount, error: true});
			}
		})		
    this.setState({counter: newCount});
  },

  componentDidMount: function() {
		var component = this;
    $.ajax({
			url: "https://dat-counter.firebaseio.com/.json",
			method: "GET",
			success: function(data){
				component.setState({counter: data, loading: false})
			}
		})
  }
});

ReactDOM.render(<Counter />, document.getElementById('placeholder'));
