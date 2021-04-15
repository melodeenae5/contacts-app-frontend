import React from 'react';

//in progress
const Contact = ({ key, firstName, setRefresh }) => {
	return (
		<div key={key} className='card'>
			<h2>{firstName}</h2>
		</div>
	);
};

export default Contact;
