import React from 'react';
import PostList from './post_list';
import Header from './header';
import styles from './app.scss';

var App = React.createClass({
  render: function() {
    return  <div>
      <Header />
      <PostList />
    </div>
  }
});

module.exports = App;
