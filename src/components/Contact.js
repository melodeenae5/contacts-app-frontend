import React, { useState } from 'react';

//in progress
const Contact = ({ contact, setRefresh }) => {
	const [detail, setDetail] = useState();
	return (
		<div className='card'>
			<h2 className='item1'>
				{contact.firstName} {contact.lastName}
			</h2>
			{contact.showDetails ? (
				<div className='item2'>
					<p>
						<b>Nickname:</b> {contact.nickName}
					</p>
					<p>
						<b>Category:</b> {contact.category}
					</p>
					<span>
						<b>Job Title:</b> {contact.workInfo.jobTitle} |{' '}
					</span>
					<span>
						<b>Company:</b> {contact.workInfo.company}
					</span>
					<p>
						<b>Phone 1:</b> {contact.phone[0].phoneNumber} (
						{contact.phone[0].phoneType})
					</p>
					<p>
						<b>Phone 2:</b> {contact.phone[1].phoneNumber} (
						{contact.phone[1].phoneType})
					</p>
					<p>
						<b>Email 1:</b> {contact.email[0].emailAddress} (
						{contact.email[0].emailType})
					</p>
					<p>
						<b>Email 2:</b> {contact.email[1].emailAddress} (
						{contact.email[1].emailType})
					</p>
					<p>
						<b>Address 1:</b> {contact.addresses[0].address} (
						{contact.addresses[0].addressType})
					</p>
					<p>
						<b>Address 2:</b> {contact.addresses[1].address} (
						{contact.addresses[1].addressType})
					</p>
					<p>
						<b>Important Dates:</b>
						<span></span>
					</p>
					<button
						className='item3 link'
						onClick={() => {
							contact.showDetails = false;
							setDetail(false);
						}}>
						hide details
					</button>
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
	);
};

export default Contact;
