import React from 'react';
import Post from './post';
import { connect } from 'react-redux';
import { fetchPosts } from '../reducers'

var PostList = React.createClass({
  render: function() {
    return  <div>
      <div className='brand'>
        { this.props.posts.map((post) =>
          <Post key={ post._id }
                id={ post._id }
                title={ post.title }
                image={ post.image }
                description={ post.description }
                location={ post.location }
                user={ post.user }
                likedBy={ post.likedBy }
                comments={ post.comments } />
        )}
      </div>
    </div>
  },

  componentDidMount: function() {
    this.props.fetchPosts();
  }
});

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

module.exports = PostListContainer;
