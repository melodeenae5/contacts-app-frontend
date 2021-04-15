import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../config';

const Login = ({ setToken, setRefresh, setIsAuth }) => {
	const [loginInfo, setLoginInfo] = useState({ valid: true });
	let history = useHistory();

	function handleChange(event) {
		event.preventDefault();
		setLoginInfo({ ...loginInfo, [event.target.id]: event.target.value });
	}

	function handleCancel(event) {
		setLoginInfo({ valid: true });
		Array.from(document.querySelectorAll('input')).forEach(
			(input) => (input.value = '')
		);
	}
	function handleSubmit(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: `${apiUrl}/users/login`,
			data: { username: loginInfo.username, password: loginInfo.password },
		})
			.then((res) => {
				console.log(res);
				if (res.data.token) {
					localStorage.setItem('token', res.data.token);
					localStorage.setItem('userId', res.data.user_id);
					localStorage.setItem('username', res.data.username);
					setToken(res.data.token);
					setIsAuth(true);
					history.push('/home');
					setRefresh(true);
				}
			})
			.catch((err) => {
				console.log(err);
				setLoginInfo({ ...loginInfo, valid: false });
			});
	}

	return (
		<div className='form'>
			<h1>Login</h1>
			<form id='loginForm' onSubmit={handleSubmit}>
				<input
					type='text'
					required
					placeholder='Username'
					id='username'
					onChange={handleChange}
					value={loginInfo.username}
				/>

				<input
					type='password'
					required
					placeholder='Password'
					id='password'
					onChange={handleChange}
					value={loginInfo.password}
				/>

				<button type='submit'>Login</button>
				<button type='button' onClick={handleCancel} className='cancel'>
					Cancel
				</button>
				<p
					style={loginInfo.valid ? { display: 'none' } : { display: 'block' }}
					className={loginInfo.valid ? 'valid' : 'invalid'}>
					Login credentials invalid. Please try again.
				</p>
			</form>
			<h4>Don't Have An Account?</h4>
			<Link to='/create'>Create Account</Link>
		</div>
	);
};

export default Login;