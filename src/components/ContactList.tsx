import React from 'react';

const ContactList = () => {
	return (
		<ul className='contact_list'>
			<a className='contact_item' href='mailto:v.jobs@lunenetworks.com'>
				<img alt='email' className='contact_icon' src='icons/white/email.png' />
				<h6 className='contact_label'> Email </h6>
			</a>
			<a className='contact_item' href='https://www.linkedin.com/in/v-araujo/'>
				<img alt='linkedin' className='contact_icon' src='icons/white/linkedin.png' />
				<h6 className='contact_label'> LinkedIn </h6>
			</a>
			<a className='contact_item' href='https://github.com/va-rau-jo'>
				<img alt='github' className='contact_icon' src='icons/white/github.png' />
				<h6 className='contact_label'> GitHub </h6>
			</a>
		</ul>
	);
};

export default ContactList;
