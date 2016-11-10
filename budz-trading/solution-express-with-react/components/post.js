import React from 'react';
import styles from './post.scss';

var Post = React.createClass({
  render: function() {
    return  <div className={ styles.column } >
      <div className={ styles.post }>
        <div className={ styles.user }>{ this.props.user } posted:</div>
        <div className={ styles.image }><img src={ this.props.image } /></div>
        <div className={ styles.location }>{ this.props.location }</div>
        <div className={ styles.title }>{ this.props.title }</div>
        <div className={ styles.description}>{ this.props.description }</div>
      </div>
    </div>
  }
});

module.exports = Post;
