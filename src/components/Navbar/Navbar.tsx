import React from 'react';
import './styles.scss';

const scrollToExperiences = () => {
    console.log('SCROLLING E');
};

const scrollToProjects = () => {
    console.log('SCROLLING P');
};

const scrollToContact = () => {
    console.log('SCROLLING C');
};

export default function Navbar() {
    return (
        <ul className='navbar_navbar'>
            <li onClick={scrollToExperiences}>
                <h5> Experiences </h5>
            </li>
            <li onClick={scrollToProjects}>
                <h5> Projects </h5>
            </li>
            <li onClick={scrollToContact}>
                <h5> Contact </h5>
            </li>
        </ul>
    );
}