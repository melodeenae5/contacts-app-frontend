import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const EditModal = ({ showEdit, handleCloseEdit, setRefresh, contact }) => {
	const originalContact = {
		firstName: contact.firstName,
		lastName: contact.lastName,
		nickName: contact.nickName,
		phoneType1: contact.phone[0].phoneType,
		phoneNumber1: contact.phone[0].phoneNumber1,
		phoneType1: contact.phone[1].phoneType,
		phoneNumber2: contact.phone[1].phoneNumber,
		emailType1: contact.email[0].emailType,
		emailAddress1: contact.email[0].emailAddress,
		emailType2: contact.email[1].emailType,
		emailAddress2: contact.email[1].emailAddress,
		category: contact.category,
		jobTitle: contact.workInfo?.jobTitle,
		company: contact.workInfo?.company,
		addressType1: contact.addresses[0].addressType,
		address1: contact.addresses[0].address,
		addressType2: contact.addresses[1].addressType,
		address2: contact.addresses[1].address,
		label1: contact.importantDates[0].label,
		date1: contact.importantDates[0].date,
		label2: contact.importantDates[1].label,
		date2: contact.importantDates[1].date,
		website: contact.website,
		whereWeMet: contact.whereWeMet,
		whatWeTalkedAbout: contact.whatWeTalkedAbout,
		like1: contact.likes[0],
		like2: contact.likes[1],
		like3: contact.likes[2],
		like4: contact.likes[3],
		dislike1: contact.dislikes[0],
		dislike1: contact.dislikes[1],
		dislike1: contact.dislikes[2],
		dislike1: contact.dislikes[3],
		passion1: contact.passions[0],
		passion2: contact.passions[1],
		passion3: contact.passions[2],
		passion4: contact.passions[3],
		notes: contact.notes,
	};
	const [editContact, setEditContact] = useState({
		...originalContact,
		valid: true,
	});
	function handleChange(event) {
		setEditContact({ ...editContact, [event.target.id]: event.target.value });
	}
	function handleCancel(event) {
		setEditContact({ valid: true });
		Array.from(document.querySelectorAll('input')).forEach(
			(input) => (input.value = '')
		);
	}
	function handleSubmit(event) {
		event.preventDefault();
		const token = localStorage.getItem('token');
		const contactId = contact._id;
		console.log(editContact);
		axios({
			method: 'PATCH',
			url: `${apiUrl}/api/contacts/${contactId}`,
			headers: {
				Authorization: `${token}`,
			},
			data: editContact,
		})
			.then((res) => {
				console.log(res);
				handleCloseEdit();
				setRefresh(true);
			})
			.catch((err) => {
				console.log(err);
				setEditContact({ ...editContact, valid: false });
			});
	}
	if (!showEdit) {
		return null;
	}
	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close' onClick={handleCloseEdit}>
					&times;
				</button>
				<h1>Edit Contact</h1>

				<form id='editContactForm' onSubmit={handleSubmit}>
					<input
						type='text'
						required
						placeholder='First Name'
						id='firstName'
						onChange={handleChange}
						defaultValue={contact.firstName ? contact.firstName : ''}
					/>
					<input
						type='text'
						placeholder='Last Name'
						id='lastName'
						onChange={handleChange}
						defaultValue={contact.lastName ? contact.lastName : ''}
					/>
					<input
						type='text'
						placeholder='Nickname'
						id='nickName'
						onChange={handleChange}
						defaultValue={contact.nickName ? contact.nickName : ''}
					/>
					<input
						type='text'
						placeholder='Category'
						id='category'
						onChange={handleChange}
						defaultValue={contact.category ? contact.category : ''}
					/>
					<input
						type='text'
						placeholder='Job Title'
						id='jobTitle'
						onChange={handleChange}
						defaultValue={contact.workInfo ? contact.workInfo.jobTitle : ''}
					/>
					<input
						type='text'
						placeholder='Company'
						id='company'
						onChange={handleChange}
						defaultValue={contact.workInfo ? contact.workInfo.company : ''}
					/>
					<input
						type='text'
						placeholder='Phone Type 1'
						id='phoneType1'
						onChange={handleChange}
						defaultValue={
							contact.phone[0].phoneType ? contact.phone[0].phoneType : ''
						}
					/>
					<input
						type='text'
						placeholder='Phone Number 1'
						id='phoneNumber1'
						onChange={handleChange}
						defaultValue={
							contact.phone[0].phoneNumber ? contact.phone[0].phoneNumber : ''
						}
					/>
					<input
						type='text'
						placeholder='Phone Type 2'
						id='phoneType2'
						onChange={handleChange}
						defaultValue={
							contact.phone[1].phoneType ? contact.phone[1].phoneType : ''
						}
					/>
					<input
						type='text'
						placeholder='Phone Number 2'
						id='phoneNumber2'
						onChange={handleChange}
						defaultValue={
							contact.phone[1].phoneNumber ? contact.phone[1].phoneNumber : ''
						}
					/>
					<input
						type='text'
						placeholder='Email Type 1'
						id='emailType1'
						onChange={handleChange}
						defaultValue={
							contact.email[0].emailType ? contact.email[0].emailType : ''
						}
					/>
					<input
						type='text'
						placeholder='Email Address 1'
						id='emailAddress1'
						onChange={handleChange}
						defaultValue={
							contact.email[0].emailAddress ? contact.email[0].emailAddress : ''
						}
					/>
					<input
						type='text'
						placeholder='Email Type 2'
						id='emailType2'
						onChange={handleChange}
						defaultValue={
							contact.email[1].emailType ? contact.email[1].emailType : ''
						}
					/>
					<input
						type='text'
						placeholder='Email Address 2'
						id='emailAddress2'
						onChange={handleChange}
						defaultValue={
							contact.email[1].emailAddress ? contact.email[1].emailAddress : ''
						}
					/>
					<input
						type='text'
						placeholder='Address Type 1'
						id='addressType1'
						onChange={handleChange}
						defaultValue={
							contact.addresses[0].addressType
								? contact.addresses[0].addressType
								: ''
						}
					/>
					<input
						type='text'
						placeholder='Address 1'
						id='address1'
						onChange={handleChange}
						defaultValue={
							contact.addresses[0].address ? contact.addresses[0].address : ''
						}
					/>
					<input
						type='text'
						placeholder='Address Type 2'
						id='addressType2'
						onChange={handleChange}
						defaultValue={
							contact.addresses[1].addressType
								? contact.addresses[1].addressType
								: ''
						}
					/>
					<input
						type='text'
						placeholder='Address 2'
						id='address1'
						onChange={handleChange}
						defaultValue={
							contact.addresses[1].address ? contact.addresses[1].address : ''
						}
					/>
					<label htmlFor='label1'>Important Date 1: </label>
					<input
						type='text'
						placeholder='(e.g. birthday, anniversary, etc...)'
						name='label1'
						id='label1'
						onChange={handleChange}
						defaultValue={
							contact.importantDates[0] ? contact.importantDates[0].label : ''
						}
					/>
					<input
						type='date'
						id='date1'
						onChange={handleChange}
						defaultValue={
							contact.importantDates[0].date
								? contact.importantDates[0].date.toString().slice(0, 10)
								: ''
						}
					/>
					<label htmlFor='label2'>Important Date 2: </label>
					<input
						type='text'
						placeholder='(e.g. birthday, anniversary, etc...)'
						name='label2'
						id='label2'
						onChange={handleChange}
						defaultValue={
							contact.importantDates[1] ? contact.importantDates[1].label : ''
						}
					/>
					<input
						type='date'
						id='date2'
						onChange={handleChange}
						defaultValue={
							contact.importantDates[1].date
								? contact.importantDates[1].date.toString().slice(0, 10)
								: ''
						}
					/>
					<input
						type='text'
						placeholder='Website'
						id='website'
						onChange={handleChange}
						defaultValue={contact.website ? contact.website : ''}
					/>
					<input
						type='text'
						placeholder='Where we met'
						id='whereWeMet'
						onChange={handleChange}
						defaultValue={contact.whereWeMet ? contact.whereWeMet : ''}
					/>
					<textarea
						form='editContactForm'
						name='whatWeTalkedAbout'
						id='whatWeTalkedAbout'
						onChange={handleChange}
						defaultValue={
							contact.whatWeTalkedAbout
								? contact.whatWeTalkedAbout
								: 'what we talked about...'
						}></textarea>
					<br />
					Likes:
					<input
						type='text'
						placeholder='Like 1'
						id='like1'
						onChange={handleChange}
						defaultValue={contact.likes[0] ? contact.likes[0] : ''}
					/>
					<input
						type='text'
						placeholder='Like 2'
						id='like2'
						onChange={handleChange}
						defaultValue={contact.likes[1] ? contact.likes[1] : ''}
					/>
					<input
						type='text'
						placeholder='Like 3'
						id='like3'
						onChange={handleChange}
						defaultValue={contact.likes[2] ? contact.likes[2] : ''}
					/>
					<input
						type='text'
						placeholder='Like 4'
						id='like4'
						onChange={handleChange}
						defaultValue={contact.likes[3] ? contact.likes[3] : ''}
					/>
					Dislikes:
					<input
						type='text'
						placeholder='Dislike 1'
						id='dislike1'
						onChange={handleChange}
						defaultValue={contact.dislikes[0] ? contact.dislikes[0] : ''}
					/>
					<input
						type='text'
						placeholder='Dislike 2'
						id='dislike2'
						onChange={handleChange}
						defaultValue={contact.dislikes[1] ? contact.dislikes[1] : ''}
					/>
					<input
						type='text'
						placeholder='Dislike 3'
						id='dislike3'
						onChange={handleChange}
						defaultValue={contact.dislikes[2] ? contact.dislikes[2] : ''}
					/>
					<input
						type='text'
						placeholder='Dislike 4'
						id='dislike4'
						onChange={handleChange}
						defaultValue={contact.dislikes[3] ? contact.dislikes[3] : ''}
					/>
					Things they are passionate about:
					<input
						type='text'
						placeholder='Passion 1'
						id='passion1'
						onChange={handleChange}
						defaultValue={contact.passions[0] ? contact.passions[0] : ''}
					/>
					<input
						type='text'
						placeholder='Passion 2'
						id='passion2'
						onChange={handleChange}
						defaultValue={contact.passions[1] ? contact.passions[1] : ''}
					/>
					<input
						type='text'
						placeholder='Passion 3'
						id='passion3'
						onChange={handleChange}
						defaultValue={contact.passions[2] ? contact.passions[2] : ''}
					/>
					<input
						type='text'
						placeholder='Passion 4'
						id='passion4'
						onChange={handleChange}
						defaultValue={contact.passions[3] ? contact.passions[3] : ''}
					/>
					<textarea
						form='editContactForm'
						name='notes'
						id='notes'
						onChange={handleChange}
						defaultValue={
							contact.notes ? contact.notes : 'Notes...'
						}></textarea>
					<br />
					<button type='submit'>Edit Contact</button>
					<button type='button' onClick={handleCancel}>
						Clear
					</button>
					<p
						style={
							editContact.valid ? { display: 'none' } : { display: 'block' }
						}
						className={editContact.valid ? 'valid' : 'invalid'}>
						Error editing contact. Please try again.
					</p>
				</form>
			</div>
		</div>
	);
};

export default EditModal;
