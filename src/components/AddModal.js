import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

//in progress
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
						placeholder='Last Name'
						id='lastName'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Nickname'
						id='nickName'
						onChange={handleChange}
					/>
					<label for='phoneType'>Phone Type:</label>
					<select id='phoneType' name='phoneType'>
						<option value='mobile'>Mobile</option>
						<option value='home'>Home</option>
						<option value='work'>Work</option>
					</select>
				</form>
			</div>
		</div>
	);
};

export default AddModal;
