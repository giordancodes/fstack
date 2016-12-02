var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


// Include your React components like this:
import App from './components/app';
import PostList from './components/post_list';
import EditPost from './components/edit_post';

ReactDOM.render(<Router history={browserHistory}>
  <Route path='/' component={ App }>
    <IndexRoute component={ PostList } />
    <Route path='post' component={ EditPost } />
    <Route path='edit/:id' component={ EditPost } />
  </Route>
</Router>, document.getElementById("placeholder"));
