import React from 'react';
import ReactDOM from 'react-dom';
//custom imports
import App from './components/App';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

//<div>Ahoj svete REACTu a webpacku! :D</div>,
ReactDOM.render(
	<App />,
	document.getElementById('app')
);
