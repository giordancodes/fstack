import React from 'react';
import Header from './header';
import styles from './app.scss';
import SearchBar from './search_bar';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      posts: [],
      search: ''
    }
  },

  render: function() {
    return  <div>
      <Header />
      <SearchBar search={ this.state.search } onSearch={ this.searchChanged } />
      { React.cloneElement(this.props.children, {
        posts: this.state.posts,
        onRefresh: this.refresh
      })}
    </div>
  },

  searchChanged: function(evt) {
    this.setState({search: evt.target.value }, this.refresh);
  },

  refresh: function() {
    $.get('/api/posts?q=' + this.state.search, (data) => this.setState({posts: data}));
  },

  componentDidMount: function() {
    this.refresh();
  }
});

module.exports = App;
