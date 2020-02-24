import React, { Component } from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import App from '../App';
import Isi from '../component/Isi';


const Routek = () => {
	return (
		<div>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route exact path='/:id' component={Isi} />
			</Switch>
		</BrowserRouter>
		</div>
	)
}


export default Routek;