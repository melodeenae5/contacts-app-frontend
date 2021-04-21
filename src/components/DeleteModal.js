import React from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const DeleteModal = ({
	showDelete,
	handleCloseDelete,
	setRefresh,
	setDetail,
	contact,
}) => {
	function deleteContact() {
		const token = localStorage.getItem('token');
		const contactId = contact._id;
		axios({
			method: 'DELETE',
			url: `${apiUrl}/api/contacts/${contactId}`,
			headers: {
				Authorization: `${token}`,
			},
		})
			.then((res) => {
				handleCloseDelete();
				setRefresh(true);
				setDetail(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	if (!showDelete) {
		return null;
	}
	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close' onClick={handleCloseDelete}>
					&times;
				</button>
				<h1>Delete Contact</h1>
				<p>
					Are you sure you want to delete "{contact.firstName}{' '}
					{contact.lastName ? contact.lastName : ''}"?
				</p>
				<button onClick={deleteContact}>Yes, delete this contact</button>
				<button onClick={handleCloseDelete}>Cancel</button>
			</div>
		</div>
	);
};

export default DeleteModal;
