import './styles.scss';

const ContactList = () => {
    return (
        <ul className='contact_list'>
            <li className='contact_item'>
                <img className='contact_icon' src='icons/white/email.png' />
                <h6 className='contact_label'> Email </h6>
            </li>
            <li className='contact_item'>
                <img className='contact_icon' src='icons/white/linkedin.png' />
                <h6 className='contact_label'> LinkedIn </h6>
            </li>
            <li className='contact_item'>
                <img className='contact_icon' src='icons/white/github.png' />
                <h6 className='contact_label'> GitHub </h6>
            </li>
        </ul>
    );
}

export default ContactList;