import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';

import Container from './components/Container'

function App() {
	return (
		<React.StrictMode>
			<div className="App">
				<Route path='/' exact>
					<Redirect to='/game' />
				</Route>
				<Route path="/game">
					<Container/>
				</Route>
			</div>
		</React.StrictMode>
	);
}

export default App;
