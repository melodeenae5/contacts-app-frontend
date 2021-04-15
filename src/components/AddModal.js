import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const AddModal = () => {
	const [newContact, setNewContact] = useState({});
	function handleChange(event) {
		setNewContact({ ...newContact, [event.target.id]: event.target.value });
	}
	return (
		<div className='modal'>
			<div className='modal-content'>
				<h1>Add Contact</h1>
				<form>
					<input
						type='text'
						required
						placeholder='First Name'
						id='firstName'
						onChange={handleChange}
					/>
					<input
						type='text'
						required
						placeholder='Last Name'
						id='lastName'
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	);
};

export default AddModal;
