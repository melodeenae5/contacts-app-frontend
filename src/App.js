import './App.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [refresh, setRefresh] = useState(true);
	const [isAuth, setIsAuth] = useState(token ? true : false);

	return (
		<div>
			<h1 className='title'>Names 'n Stuff</h1>
			<Route
				path='/'
				exact
				render={() => (
					<Landing
						setToken={setToken}
						setRefresh={setRefresh}
						setIsAuth={setIsAuth}
					/>
				)}
			/>

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
			{/* 
			<ProtectedRoute
				path='/home'
				component={Home}
				auth={isAuth}
				setIsAuth={setIsAuth}
				refresh={refresh}
				setRefresh={setRefresh}
			/> */}
		</div>
	);
}

export default App;
