import React from 'react';
import $ from 'jquery';
import styles from './edit_post.scss'
import { browserHistory } from 'react-router';
import Field from './field.js';
import { fetchPosts, addPost, updatePost } from '../reducers'
import { connect } from 'react-redux';

var EditPost = React.createClass({
  getInitialState: function() {
    var emptyPost = {
      title: '',
      location: '',
      description: '',
      image: ''
    }
    if (this.props.params.id) {
      var post = this.props.posts.find((post) => post._id == this.props.params.id);
      return {
        isEditing: true,
        post: post || emptyPost,
        errors: {}
      }
    } else {
      return {
        isEditing: false,
        post: emptyPost,
        errors: {}
      }
    }
  },

  render: function() {
    return  <div className={ styles.editor }>
      <Field label="Title" value={ this.state.post.title } name='title' onChange={ this.updateField } error={ this.state.errors.title } />
      <Field label="Description" value={ this.state.post.description } name='description' onChange={ this.updateField } error={ this.state.errors.description } />
      <Field label="Image URL" value={ this.state.post.image } name='image' onChange={ this.updateField } error={ this.state.errors.image } />
      <Field label="Location" value={ this.state.post.location } name='location' onChange={ this.updateField } error={ this.state.errors.location } />
      <button onClick={ this.save }>Save</button>
    </div>
  },

  save: function() {
    if (this.state.isEditing) {
      this.props.updatePost(this.state.post);
    } else {
      this.props.addPost(this.state.post);
    }
    browserHistory.push('/');
  },

  updateField: function(evt) {
    var post = this.state.post;
    post[evt.target.name] = evt.target.value;
    this.setState({post: post});
  }
});

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts),
    addPost: (post) => dispatch(addPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
  }
}

const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(EditPost)

module.exports = EditPostContainer;
