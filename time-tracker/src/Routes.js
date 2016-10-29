import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import TimeTracker from './TimeTracker';
import Login from './Login';
import ProjectsList from './ProjectsList';

class Routes extends Component {
	constructor(){
		super();
	}

  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/login' component={ Login } />
        <Route path='/' component={ TimeTracker }>
          <IndexRoute component={ ProjectsList } />
        </Route>

      </Router>
    )
  }
}

export default Routes;