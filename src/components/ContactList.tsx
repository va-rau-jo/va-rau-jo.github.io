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
			<a
				className='contact_item'
				href='https://drive.google.com/file/d/16Y_n-kiXC_gwsXvoYdBqxf5anDfak0cU/view'
			>
				<img alt='resume' className='contact_icon' src='icons/white/resume.png' />
				<h6 className='contact_label'> Résumé </h6>
			</a>
			<a className='contact_item' href='https://github.com/va-rau-jo'>
				<img alt='github' className='contact_icon' src='icons/white/github.png' />
				<h6 className='contact_label'> GitHub </h6>
			</a>
		</ul>
	);
};

export default ContactList;
