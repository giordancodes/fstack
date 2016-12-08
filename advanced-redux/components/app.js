import React from 'react';
import Header from './header';
import styles from './app.scss';
import SearchBar from './search_bar';
import Login from './login';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      user: null,
      search: ''
    }
  },

  render: function() {
    if (this.state.user !== null) {
      return  <div>
        <Header />
        <SearchBar search={ this.state.search } onSearch={ this.searchChanged } />
        { this.props.children }
      </div>
    } else {
      return <Login onLogin={ this.userLoggedIn }/>
    }
  },

  userLoggedIn: function(user) {
    this.setState({ user: user }, this.refresh);
  },

  searchChanged: function(evt) {
    this.setState({search: evt.target.value });
  },

  componentDidMount: function() {
    $.getJSON('/api/me', (user) => {
      console.log(user);
      if (user !== null) {
        this.userLoggedIn(user);
      }
    })
  }
});

module.exports = App;
