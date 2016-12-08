import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import $ from 'jquery';

const initialState = {
  posts: [],
  user: null
}

export function fetchPosts() {
  console.log("fetching")
  return dispatch => {
    console.log("in dispatch");
    $.get('/api/posts', (data) => {
      dispatch({ type: 'POSTS_FETCHED', posts: data });
    })
  }
}

export function addPost(data) {
  return dispatch => {
    $.ajax({
      url: '/api/posts/',
      method: 'POST',
      type: 'json',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: (data) => {
        dispatch({ type: 'ADD_POST', post: data.post })
      }
    })
  }
}

export function updatePost(data) {
  return dispatch => {
    $.ajax({
      url: '/api/posts/' + data._id,
      method: 'PUT',
      type: 'json',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: (data) => {
        dispatch({ type: 'UPDATE_POST', post: data.post })
      }
    })
  }
}

export function deletePost(id) {
  return dispatch => {
    $.ajax({
      url: '/api/posts/' + id,
      method: 'DELETE',
      type: 'json',
      contentType: "application/json; charset=utf-8",
      success: (data) => {
        dispatch({ type: 'DELETE_POST', id: id })
      }
    })
  }
}

function posts(state, action) {
  switch (action.type) {
    case "POSTS_FETCHED":
      return action.posts;
    case "ADD_POST":
      return state.concat([action.post]);
    case "UPDATE_POST":
      return state.map((post) => {
        if (post._id == action.post._id) {
          return action.post
        } else {
          return post;
        }
      })
    case "DELETE_POST":
      return state.filter((post) => post._id != action.id);
    default:
      return state;
  }
}

function tradingApp(state = initialState, action) {
  return {
    posts: posts(state.posts, action),
    user: null
  }
}

const store = createStore(tradingApp, applyMiddleware(thunk))

console.log(store.getState())

export default store;
