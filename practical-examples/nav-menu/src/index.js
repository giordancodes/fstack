import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App 
		items={ ['Home', 'Not Home', 'About Someone Else', 'Contactez-vous', 'Fin'] }
  />,
  document.getElementById('root')
);
