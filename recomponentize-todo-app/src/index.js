import React from 'react';
import ReactDOM from 'react-dom';
import ReComp from './ReComp';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider } from 'react-mixpanel';

import './index.css';

mixpanel.init("784deaf56d4d0705252e845c7007ae27");
mixpanel.track("Initialized Application", {
	awesome: true
});

ReactDOM.render(
  <ReComp />,
  document.getElementById('root')
);