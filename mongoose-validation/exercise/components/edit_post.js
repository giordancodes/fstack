import React from 'react';
import $ from 'jquery';
import styles from './edit_post.scss'
import { browserHistory } from 'react-router';

var Field = ({ label, value, onChange, name }) => <div className={ styles.field }>
  <label>{ label }</label>
  <input type='text' value={ value } name={ name } onChange={ onChange } />
</div>

var EditPost = React.createClass({
  getInitialState: function() {
    var emptyPost = {
      title: '',
      location: '',
      user: '',
      description: '',
      image: ''
    }
    if (this.props.params.id) {
      var post = this.props.posts.find((post) => post._id == this.props.params.id);
      return {
        isEditing: true,
        post: post || emptyPost
      }
    } else {
      return {
        isEditing: false,
        post: emptyPost
      }
    }
  },

  render: function() {
    return  <div className={ styles.editor }>
      <Field label="Title" value={ this.state.post.title } name='title' onChange={ this.updateField } />
      <Field label="Description" value={ this.state.post.description } name='description' onChange={ this.updateField } />
      <Field label="Image URL" value={ this.state.post.image } name='image' onChange={ this.updateField } />
      <Field label="Location" value={ this.state.post.location } name='location' onChange={ this.updateField } />
      <Field label="Your Name" value={ this.state.post.user } name='user' onChange={ this.updateField } />
      <button onClick={ this.save }>Save</button>
    </div>
  },

  save: function() {
    if (this.state.isEditing) {
      var url = '/api/posts/' + this.props.params.id;
      var method = 'PUT';
    } else {
      var url = '/api/posts';
      var method = 'POST';
    }

    $.ajax({
      method: method,
      url: url,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(this.state.post),
      success: () => {
        this.props.onRefresh();
        browserHistory.push('/');
      }
    });
  },

  updateField: function(evt) {
    var post = this.state.post;
    post[evt.target.name] = evt.target.value;
    this.setState({post: post});
  }
});

module.exports = EditPost;
