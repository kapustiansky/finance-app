import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePege } from '../pages';

const App = () => {
	return (
		<Switch>
			<Route path='/' component={HomePege} exact />
		</Switch>
	);
};

export default App;
