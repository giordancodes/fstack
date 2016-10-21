import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider } from 'react-mixpanel';

import ReComp from './ReComp';
import TodoItemsAll from './TodoItemsAll.js';
import TodoItemsChecked from './TodoItemsChecked.js';
import TodoItemsUnchecked from './TodoItemsUnchecked.js';

import './index.css';

mixpanel.init("784deaf56d4d0705252e845c7007ae27");
mixpanel.track("Initialized Application", {
	awesome: true
});

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path ='/' component={ TodoItemsAll } />
		<Route path ='/checked' component={ TodoItemsChecked } />
		<Route path ='/unchecked' component={ TodoItemsUnchecked } />
	</Router>,
  document.getElementById('root')
);