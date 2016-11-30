import React from 'react';
import styles from './search_bar.scss';

var SearchBar = React.createClass({
  render: function() {
    return  <div className={ styles.bar } >
      <input type='text'
             value={ this.props.search }
             onChange={ this.props.onSearch }
             placeholder="Search for posts" />
    </div>
  }
});

module.exports = SearchBar;
