import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import TimeTracker from './TimeTracker';
import Login from './Login';
import ProjectsList from './ProjectsList';
import Project from './Project';

class Routes extends Component {
  
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/login' component={ Login } />
        <Route path='/' component={ TimeTracker }>
          <IndexRoute component={ ProjectsList } />
          <Route path='/project/:projectId' component={ Project } />
        </Route>

      </Router>
    )
  }
}

export default Routes;