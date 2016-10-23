import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import mixpanel from 'mixpanel-browser';
// import { MixpanelProvider } from 'react-mixpanel';

import TodoList from './TodoList';

import './index.css';

mixpanel.init("784deaf56d4d0705252e845c7007ae27");
mixpanel.track("Initialized Application", {
	awesome: true
});


ReactDOM.render(
	<Router history={ browserHistory }>
		<Route 	path='/' 
						component={ TodoList } />
		<Route 	path='/:filter' 
						component={ TodoList } />
	</Router>,
  document.getElementById('root')
);

// ReactDOM.render(
// 	<ReComp/>,
//   document.getElementById('root')
// );