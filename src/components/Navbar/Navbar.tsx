import React from 'react';
import './styles.scss';

interface Props {
    scrollToExperiences: any,
    scrollToProjects: any,
};

const openResume = () => {
    console.log("oPNEING");

}

export default function Navbar(props: Props) {
    const { scrollToExperiences, scrollToProjects } = props;
    return (
        <ul className='navbar_navbar'>
            <li onClick={scrollToExperiences}>
                <h5> Summary / Contact ??? </h5>
            </li>
            <li onClick={scrollToExperiences}>
                <h5> Experiences </h5>
            </li>
            <li onClick={scrollToProjects}>
                <h5> Projects </h5>
            </li>
            <li onClick={openResume}>
                <a className='navbar_anchor' href='resume.pdf' target='_blank'>
                  <h5> Resume </h5>
                </a>
            </li>
        </ul>
    );
}