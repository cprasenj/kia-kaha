import React from 'react';
import { Route, Switch } from 'react-router';

import HeaderComponent from './header/HeaderComponent';
import AboutUsPage from "./aboutUs/AboutUsPage";
import BoxingPage from "./training/BoxingPage";
import KickBoxingPage from "./training/KickBoxingPage";
import MuayThaiPage from "./training/MuayThaiPage";
import WrestlingPage from "./training/WrestlingPage";
import BJJPage from "./training/BJJPage";
import MMA from "./training/MMA";
import WhyMMA from "./why/MMA";

export default  (
	<Switch>
		<Route exact path="/" component={HeaderComponent} />
		<Route path="/aboutUs" component={AboutUsPage} />
		<Route path="/boxing" component={BoxingPage} />
		<Route path="/kick-boxing" component={KickBoxingPage} />
		<Route path="/muay-thai" component={MuayThaiPage} />
		<Route path="/wrestling" component={WrestlingPage} />
		<Route path="/bjj" component={BJJPage} />
		<Route path="/mma" component={MMA} />
		<Route path="/why-mma" component={WhyMMA} />
	</Switch>
)
