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
			const userId = localStorage.getItem('userId');
			console.log(`use effect running: ${token}`);
			console.log(`userId: ${userId}`);
			console.log(`username: ${localStorage.getItem('username')}`);
			console.log(`url: ${apiUrl}/api/contacts`);
			const getContacts = async () => {
				try {
					var res = await axios({
						method: 'GET',
						url: `${apiUrl}/api/contacts`,
						headers: {
							//'Content-Type': 'application/x-www-form-urlencoded',
							//'Content-Type': 'application/json',
							//Accept: 'application/json',
							Authorization: token,
						}
					});

					console.log(res.data);
					console.log(res.request);
				} catch (err) {
					console.error(err);
				}
			};
			getContacts();
			// axios({
			// 	method: 'GET',
			// 	url: `${apiUrl}/api/contacts`,
			// 	headers: {
			// 		Authorization: `${token}`,
			// 	},
			// 	data: { user_id: localStorage.getItem('userId') },
			// })
			// 	.then((res) => console.log(res.data))
			// 	.then(() => setRefresh(false))
			// 	.catch((err) => console.log(err));
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
			this is the home page
			{contacts.map((contact) => {
				return (
					<Contact
						key={contact._id}
						firstName={contact.firstName}
						setRefresh={setRefresh}
					/>
				);
			})}
		</div>
	);
};

export default Home;
