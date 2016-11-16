import React from 'react';
import Post from './post';

var PostList = React.createClass({
  render: function() {
    return  <div>
      <div className='brand'>
    { this.props.posts.map((post, i) => {
      return(
        <div key={ i }>
          <h4>{ post.title }</h4>
          <img src={ post.image } alt={ post.title }/>
          <p>{ post.description }</p>
          <p>{ post.location }</p>
          <p>{ post.user }</p>
          <p>{ post.price }</p>
        </div>
      )})
    }
      </div>
    </div>
  }
});

module.exports = PostList;
