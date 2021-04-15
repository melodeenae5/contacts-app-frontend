import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { apiUrl } from '../config';

const CreateAccount = ({ setToken, setRefresh, setIsAuth }) => {
	const [regInfo, setRegInfo] = useState({});
	let history = useHistory();
	function handleChange(event) {
		event.preventDefault();
		setRegInfo({ ...regInfo, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		axios({
			method: 'post',
			url: `${apiUrl}/users/register`,
			data: regInfo,
		})
			.then((res) => {
				console.log(res);
				if (res.data.token) {
					localStorage.setItem('token', res.data.token);
					localStorage.setItem('userId', res.data.user_id);
					setToken(res.data.token);
					setIsAuth(true);
					history.push('/home');
					setRefresh(true);
				}
			})
			.catch((err) => console.log(err));
	}
	return (
		<div className='form'>
			<h1>Create Account</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					required
					id='firstName'
					placeholder='First Name'
					onChange={handleChange}
				/>
				<input
					type='text'
					required
					id='lastName'
					placeholder='Last Name'
					onChange={handleChange}
				/>
				<input
					type='text'
					required
					id='username'
					placeholder='Username'
					onChange={handleChange}
				/>
				<input
					type='email'
					required
					id='email'
					placeholder='Email'
					onChange={handleChange}
				/>
				<input
					type='password'
					required
					id='password'
					placeholder='password'
					onChange={handleChange}
				/>
				<button type='submit'>Create Account</button>
			</form>
		</div>
	);
};

export default CreateAccount;
