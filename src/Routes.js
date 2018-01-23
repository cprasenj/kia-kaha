import React from 'react';
import { Route, Switch } from 'react-router';

import HeaderComponent from './header/HeaderComponent';
import AboutUsPage from "./aboutUs/AboutUsPage"

export default  (
	<Switch>
		<Route exact path="/" component={HeaderComponent} />
		<Route path="/aboutUs" component={AboutUsPage} />
	</Switch>
)
