import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const AddModal = ({ show, handleClose, setRefresh }) => {
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
			data: newContact,
		})
			.then((res) => {
				handleClose();
				setRefresh(true);
				setNewContact({ valid: true });
			})
			.catch((err) => {
				console.log(err);
				setNewContact({ ...newContact, valid: false });
			});
	}
	if (!show) {
		return null;
	}
	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close' onClick={handleClose}>
					&times;
				</button>
				<h1>Add Contact</h1>

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
					<input
						type='text'
						placeholder='Phone Type 1'
						id='phoneType1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Phone Number 1'
						id='phoneNumber1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Phone Type 2'
						id='phoneType2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Phone Number 2'
						id='phoneNumber2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Email Type 1'
						id='emailType1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Email Address 1'
						id='emailAddress1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Email Type 2'
						id='emailType2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Email Address 2'
						id='emailAddress2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Address Type 1'
						id='addressType1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Address 1'
						id='address1'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Address Type 2'
						id='addressType2'
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Address 2'
						id='address1'
						onChange={handleChange}
					/>
					<label htmlFor='label1'>Important Date 1: </label>
					<input
						type='text'
						placeholder='(e.g. birthday, anniversary, etc...)'
						name='label1'
						id='label1'
						onChange={handleChange}
					/>
					<input type='date' id='date1' onChange={handleChange} />
					<label htmlFor='label2'>Important Date 2: </label>
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
					<br />
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
					<br />
					<button type='submit'>Add Contact</button>
					<button type='button' onClick={handleCancel}>
						Clear
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
