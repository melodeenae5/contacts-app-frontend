import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../config';
import Contact from './Contact';

//in progress
const Home = ({ isAuth, setIsAuth, refresh, setRefresh }) => {
	const [contacts, setContacts] = useState([]);

	let history = useHistory();

	function logout() {
		localStorage.clear();
		setIsAuth(false);
		history.push('/');
	}
	useEffect(() => {
		setRefresh(true);
		console.log('setting refresh');
		if (!isAuth) {
			history.push('/');
		}
	}, []);
	useEffect(() => {
		if (refresh) {
			const token = localStorage.getItem('token');
			console.log('use effect running');
			axios({
				method: 'GET',
				url: `${apiUrl}/api/contacts`,
				headers: {
					Authorization: `${token}`,
				},
			})
				.then((res) => setContacts(res.data))
				.then(() => setRefresh(false))
				.catch((err) => console.log(err));
		}
	}, [refresh]);

	return (
		<div>
			<div className='card'>
				<button>Add Contact</button>
				<p className='item-right2'>
					Logged in as: {localStorage.getItem('username')}
				</p>
				<button className='item-right' onClick={logout}>
					Logout
				</button>
			</div>

			{contacts.map((contact) => {
				return (
					<Contact
						key={contact._id}
						contact={contact}
						setRefresh={setRefresh}
					/>
				);
			})}
		</div>
	);
};

export default Home;
