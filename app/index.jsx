import React from 'react';
import ReactDOM from 'react-dom';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
	<div>Ahoj svete REACTu a webpacku! :D</div>,
  document.getElementById('app')
);

