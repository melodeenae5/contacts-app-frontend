import './App.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [refresh, setRefresh] = useState(true);
	const [isAuth, setIsAuth] = useState(token ? true : false);

	return (
		<div>
			<h1 className='title'>Names 'n Stuff</h1>

			<div className='main'>
				<Route
					path='/'
					exact
					render={() => (
						<Login
							setToken={setToken}
							setRefresh={setRefresh}
							setIsAuth={setIsAuth}
						/>
					)}
				/>
				<Route
					path='/create'
					exact
					render={() => (
						<CreateAccount
							setToken={setToken}
							setRefresh={setRefresh}
							setIsAuth={setIsAuth}
						/>
					)}
				/>
			</div>
			<Route
				path='/home'
				render={() => (
					<Home
						isAuth={isAuth}
						setIsAuth={setIsAuth}
						refresh={refresh}
						setRefresh={setRefresh}
					/>
				)}
			/>
		</div>
	);
}

export default App;
