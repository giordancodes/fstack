import React from 'react';
import styles from './comment_list.scss';

var CommentList = React.createClass({
  render: function() {
    console.log(this.props.comments);
    return <div className={ styles.container } >
      { this.props.comments.map((comment) => <div key={ comment._id } className={ styles.comment }>
          <div className={ styles.author }>{ comment.user.name }:</div>
          <div className={ styles.content }>{ comment.content }</div>
        </div>
      )}
    </div>
  }
});

module.exports = CommentList;
