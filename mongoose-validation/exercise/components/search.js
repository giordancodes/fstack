import React from 'react';
import styles from './header.scss';

var Search = React.createClass({
  getInitialState: function() {
    return {
      searchInput: ''
    }
  },
  render: function() {
    return  <div>
      <label htmlFor="searchBox">Search</label>
      <input  type="text"
              id="searchBox"
              value={ this.props.searchInput }
              onChange={ this.props.updateSearch } />
    </div>
  }
});

module.exports = Search;
