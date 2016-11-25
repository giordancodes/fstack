import React from 'react';
import Header from './header';
import Search from './search';
import styles from './app.scss';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      posts: [],
      searchInput: ''
    }
  },

  render: function() {
    return  <div>
      <Header />
      <Search updateSearch={this.updateSearch} />
      { React.cloneElement(this.props.children, {
        posts: this.state.posts,
        onRefresh: this.refresh
      })}
    </div>
  },

  refresh: function() {
    $.get('/api/posts', (data) => this.setState({posts: data}));
  },

  updateSearch: function(e) {
    var q = e.target.value;
    this.setState({searchInput: q});
    $.get(`/api/posts/?q=${q}`, (data) => this.setState({posts: data}));
  },

  componentDidMount: function() {
    this.refresh();
  }
});

module.exports = App;
