import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

//in progress
const AddModal = ({ show, handleClose }) => {
	const [newContact, setNewContact] = useState({ valid: true });
	function handleChange(event) {
		setNewContact({ ...newContact, [event.target.id]: event.target.value });
	}
	function handleCancel(event) {
		setNewContact({ valid: true });
		Array.from(document.querySelectorAll('input')).forEach(
			(input) => (input.value = '')
		);
	}
	function handleSubmit(event) {
		event.preventDefault();
		const token = localStorage.getItem('token');
		axios({
			method: 'POST',
			url: `${apiUrl}/api/contacts`,
			headers: {
				Authorization: `${token}`,
			},
			data: { newContact },
		})
			.then((res) => {
				console.log(res);
				handleClose();
			})
			.catch((err) => {
				console.log(err);
				setNewContact({ ...newContact, valid: false });
			});
	}
	return (
		<div
			className='modal'
			style={show ? { display: 'none' } : { display: 'block' }}>
			<div className='modal-content'>
				<h1>Add Contact</h1>
				<span class='close' onClick={handleClose}>
					&times;
				</span>
				<form id='addContactForm' onSubmit={handleSubmit}>
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
					<label for='phoneType2'>Phone Type 2:</label>
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
					<input
						type='text'
						placeholder='Email Address 1'
						id='emailAddress1'
						onChange={handleChange}
					/>
					<label for='emailType2'>Email Type 2:</label>
					<select id='emailType2' name='emailType2'>
						<option value='personal'>Personal</option>
						<option value='school'>School</option>
						<option value='work'>Work</option>
					</select>
					<input
						type='text'
						placeholder='Email Address 2'
						id='emailAddress2'
						onChange={handleChange}
					/>
					<label for='addressType1'>Address Type 1: </label>
					<select id='addressType1' name='addressType1'>
						<option value='home'>Personal</option>
						<option value='school'>School</option>
						<option value='work'>Work</option>
					</select>
					<input
						type='text'
						placeholder='Address 1'
						id='address1'
						onChange={handleChange}
					/>
					<label for='addressType2'>Address Type 2: </label>
					<select id='addressType2' name='addressType2'>
						<option value='home'>Personal</option>
						<option value='school'>School</option>
						<option value='work'>Work</option>
					</select>
					<input
						type='text'
						placeholder='Address 2'
						id='address1'
						onChange={handleChange}
					/>
					<label for='label1'>Important Date 1: </label>
					<input
						type='text'
						placeholder='(e.g. birthday, anniversary, etc...)'
						name='label1'
						id='label1'
						onChange={handleChange}
					/>
					<input type='date' id='date1' onChange={handleChange} />
					<label for='label2'>Important Date 2: </label>
					<input
						type='text'
						placeholder='(e.g. birthday, anniversary, etc...)'
						name='label2'
						id='label2'
						onChange={handleChange}
					/>
					<input type='date' id='date2' onChange={handleChange} />
					<input
						type='text'
						placeholder='Website'
						id='website'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Where we met'
						id='whereWeMet'
						onChange={handleChange}
					/>
					<textarea
						form='addContactForm'
						name='whatWeTalkedAbout'
						id='whatWeTalkedAbout'
						onChange={handleChange}
						defaultValue='What we talked about...'></textarea>
					Likes:
					<input
						type='text'
						placeholder='Like 1'
						id='like1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Like 2'
						id='like2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Like 3'
						id='like3'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Like 4'
						id='like4'
						onChange={handleChange}
					/>
					Dislikes:
					<input
						type='text'
						placeholder='Dislike 1'
						id='dislike1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Dislike 2'
						id='dislike2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Dislike 3'
						id='dislike3'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Dislike 4'
						id='dislike4'
						onChange={handleChange}
					/>
					Things they are passionate about:
					<input
						type='text'
						placeholder='Passion 1'
						id='passion1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Passion 2'
						id='passion2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Passion 3'
						id='passion3'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Passion 4'
						id='passion4'
						onChange={handleChange}
					/>
					<textarea
						form='addContactForm'
						name='notes'
						id='notes'
						onChange={handleChange}
						defaultValue='Notes...'></textarea>
					<button type='submit'>Add Contact</button>
					<button type='button' onClick={handleCancel}>
						Cancel
					</button>
					<p
						style={
							newContact.valid ? { display: 'none' } : { display: 'block' }
						}
						className={newContact.valid ? 'valid' : 'invalid'}>
						Error adding contact. Please try again.
					</p>
				</form>
			</div>
		</div>
	);
};

export default AddModal;
