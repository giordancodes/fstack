import React from 'react';
import Header from './header';
import styles from './app.scss';
import SearchBar from './search_bar';
import Login from './login';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      posts: [],
      user: null,
      search: ''
    }
  },

  render: function() {
    if (this.state.user !== null) {
      return  <div>
        <Header />
        <SearchBar search={ this.state.search } onSearch={ this.searchChanged } />
        { React.cloneElement(this.props.children, {
          posts: this.state.posts,
          onRefresh: this.refresh
        })}
      </div>
    } else {
      return <Login onLogin={ this.userLoggedIn }/>
    }
  },

  searchChanged: function(evt) {
    this.setState({search: evt.target.value }, this.refresh);
  },

  userLoggedIn: function(user) {
    this.setState({ user: user }, this.refresh);
  },

  refresh: function() {
    $.get('/api/posts?q=' + this.state.search, (data) => this.setState({posts: data}));
  }
});

module.exports = App;
