import React from 'react';
import $ from 'jquery';
import PostList from './post_list';
import Header from './header';
import styles from './app.scss';

var App = React.createClass({
	getInitialState: function() {
		return{
			posts: []
		}
	},

  render: function() {
    return  <div>
      <Header />
      <PostList 
      	posts={ this.state.posts } />
    </div>
  },

  componentDidMount: function() {
  	$.get('/api/posts.json', (data) => {
			let posts = data;
			this.setState({posts})
			console.log(data);
  	});
    console.log(this.state.posts);
  }
});

module.exports = App;