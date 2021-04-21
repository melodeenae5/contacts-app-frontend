import React, { useState } from 'react';
import EditModal from './EditModal';

//in progress
const Contact = ({ contact, setRefresh }) => {
	const [detail, setDetail] = useState();
	const [showEdit, setShowEdit] = useState(false);

	function handleCloseEdit() {
		setShowEdit(false);
	}
	return (
		<div>
			<EditModal
				showEdit={showEdit}
				handleCloseEdit={handleCloseEdit}
				setRefresh={setRefresh}
				contact={contact}
			/>
			<div className='card'>
				<h2 className='item1'>
					{contact.firstName} {contact.lastName}
				</h2>
				{contact.showDetails ? (
					<div className='item2'>
						{contact.nickName ? (
							<p>
								<b>Nickname:</b> {contact.nickName}
							</p>
						) : (
							''
						)}
						{contact.category ? (
							<p>
								<b>Category:</b> {contact.category}
							</p>
						) : (
							''
						)}
						{contact.workInfo ? (
							<div>
								<span>
									<b>Job Title:</b> {contact.workInfo.jobTitle} |{' '}
								</span>
								<span>
									<b>Company:</b> {contact.workInfo.company}
								</span>{' '}
							</div>
						) : (
							''
						)}
						{contact.phone[0] ? (
							<p>
								<b>Phone 1:</b> {contact.phone[0].phoneNumber} (
								{contact.phone[0].phoneType})
							</p>
						) : (
							''
						)}
						{contact.phone[1] ? (
							<p>
								<b>Phone 2:</b> {contact.phone[1].phoneNumber} (
								{contact.phone[1].phoneType})
							</p>
						) : (
							''
						)}
						{contact.email[0] ? (
							<p>
								<b>Email 1:</b> {contact.email[0].emailAddress} (
								{contact.email[0].emailType})
							</p>
						) : (
							''
						)}
						{contact.email[1] ? (
							<p>
								<b>Email 2:</b> {contact.email[1].emailAddress} (
								{contact.email[1].emailType})
							</p>
						) : (
							''
						)}
						{contact.addresses[0] ? (
							<p>
								<b>Address 1:</b> {contact.addresses[0].address} (
								{contact.addresses[0].addressType})
							</p>
						) : (
							''
						)}
						{contact.addresses[1] ? (
							<p>
								<b>Address 2:</b> {contact.addresses[1].address} (
								{contact.addresses[1].addressType})
							</p>
						) : (
							''
						)}
						{contact.importantDates ? (
							<p>
								<b>Important Dates:</b>{' '}
								<span>
									{contact.importantDates[0].label
										? `${contact.importantDates[0].label}:`
										: ''}{' '}
									{contact.importantDates[0].date
										? contact.importantDates[0].date.toString().slice(0, 10)
										: ''}
								</span>{' '}
								|{' '}
								<span>
									{contact.importantDates[1].label
										? `${contact.importantDates[1].label}:`
										: ''}{' '}
									{contact.importantDates[1].date
										? contact.importantDates[1].date.toString().slice(0, 10)
										: ''}
								</span>
							</p>
						) : (
							''
						)}
						{contact.website ? (
							<p>
								<b>Website:</b> {contact.website}
							</p>
						) : (
							''
						)}
						{contact.whereWeMet ? (
							<p>
								<b>Where we met:</b> {contact.whereWeMet}
							</p>
						) : (
							''
						)}
						{contact.whatWeTalkedAbout ? (
							<p>
								<b>What we talked about:</b> {contact.whatWeTalkedAbout}
							</p>
						) : (
							''
						)}

						<p>
							<b>Likes:</b> {contact.likes[0] ? contact.likes[0] : ''}
							{contact.likes[1] ? `, ${contact.likes[1]}` : ''}
							{contact.likes[2] ? `, ${contact.likes[2]}` : ''}
							{contact.likes[3] ? `, ${contact.likes[3]}` : ''}
						</p>
						<p>
							<b>Dislikes:</b> {contact.dislikes[0] ? contact.dislikes[0] : ''}
							{contact.dislikes[1] ? `, ${contact.dislikes[1]}` : ''}
							{contact.dislikes[2] ? `, ${contact.dislikes[2]}` : ''}
							{contact.dislikes[3] ? `, ${contact.dislikes[3]}` : ''}
						</p>
						<p>
							<b>Passions:</b> {contact.passions[0] ? contact.passions[0] : ''}
							{contact.passions[1] ? `, ${contact.passions[1]}` : ''}
							{contact.passions[2] ? `, ${contact.passions[2]}` : ''}
							{contact.passions[3] ? `, ${contact.passions[3]}` : ''}
						</p>
						{contact.notes ? (
							<p>
								<b>Notes:</b> {contact.notes ? contact.notes : ''}
							</p>
						) : (
							''
						)}

						<button
							className='item3 link'
							onClick={() => {
								contact.showDetails = false;
								setDetail(false);
							}}>
							hide details
						</button>
						<button
							className='item-right2'
							onClick={() => {
								setShowEdit(true);
								console.log('editing');
							}}>
							Edit Contact
						</button>
						<button className='item-right'>Delete</button>
					</div>
				) : (
					<button
						className='item3 link'
						onClick={() => {
							contact.showDetails = true;
							setDetail(true);
						}}>
						show details
					</button>
				)}
			</div>
		</div>
	);
};

export default Contact;
