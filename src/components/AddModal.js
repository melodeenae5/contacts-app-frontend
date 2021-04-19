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
					<input
						type='text'
						placeholder='Category'
						id='category'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Job Title'
						id='jobTitle'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Company'
						id='company'
						onChange={handleChange}
					/>
					<label for='phoneType1'>Phone Type 1:</label>
					<select id='phoneType1' name='phoneType1'>
						<option value='mobile'>Mobile</option>
						<option value='home'>Home</option>
						<option value='work'>Work</option>
					</select>
					<input
						type='text'
						placeholder='Phone Number 1'
						id='phoneNumber1'
						onChange={handleChange}
					/>
					<label for='phoneType2'>Phone 2 Type:</label>
					<select id='phoneType2' name='phoneType2'>
						<option value='mobile'>Mobile</option>
						<option value='home'>Home</option>
						<option value='work'>Work</option>
					</select>
					<input
						type='text'
						placeholder='Phone Number 2'
						id='phoneNumber2'
						onChange={handleChange}
					/>
					<label for='emailType1'>Email Type 1:</label>
					<select id='emailType1' name='emailType1'>
						<option value='personal'>Personal</option>
						<option value='school'>School</option>
						<option value='work'>Work</option>
					</select>
				</form>
			</div>
		</div>
	);
};

export default AddModal;
