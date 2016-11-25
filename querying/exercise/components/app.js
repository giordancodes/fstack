import React from 'react';
import Header from './header';
import styles from './app.scss';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    }
  },

  render: function() {
    return  <div>
      <Header />
      { React.cloneElement(this.props.children, {
        posts: this.state.posts,
        onRefresh: this.refresh
      })}
    </div>
  },

  refresh: function() {
    $.get('/api/posts', (data) => this.setState({posts: data}));
  },

  componentDidMount: function() {
    this.refresh();
  }
});

module.exports = App;
