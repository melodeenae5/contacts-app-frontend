import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';

const Landing = ({ setToken, setRefresh, setIsAuth }) => {
	return (
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
	);
};

export default Landing;
