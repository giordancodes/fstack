import React from 'react';
import styles from './like_bar.scss';

var LikeBar = React.createClass({
  render: function() {
    return  <div className={ styles.bar } >
      <span className={ styles.heart }>♥</span>
      { this.props.likedBy.length }
    </div>
  }
});

module.exports = LikeBar;
