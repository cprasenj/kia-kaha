import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router
}
from 'react-router-dom';

import Routes from './Routes';
// Create an enhanced history that syncs navigation events with the store
main();

function main() {

	const app = document.createElement('div');

	document.body.appendChild(app);

	ReactDOM.render(
	  	<Router>
	      {Routes}
	    </Router>,
	  app
	)
}
