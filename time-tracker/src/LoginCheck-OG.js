import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import TimeTracker from './TimeTracker';
import Login from './Login';
import ProjectsList from './ProjectsList';

class Routes extends Component {
  
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/login' component={ Login } />
        <Route path='/' component={ LoginChecker }>
          <IndexRoute component={ ProjectsList } />
        </Route>

      </Router>
    )
  }
}

export default Routes;

class LoginChecker extends React.Component {
  render() {
    if (this.state.loggedIn) {
      <TimeTracker>
        { this.props.children }
      </TimeTracker>
    } else {
      browserHistory.push('/login');
    }
  }
  componentDidMount(){
    if (user){
      this.setState({ loggedIn: true, currentUser: user.displayName, userID: user.uid });
    }
  }
}