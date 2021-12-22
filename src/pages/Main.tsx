import { url } from 'inspector';
import React from 'react';
import Experiences from '../components/Experiences/Experiences';
import Navbar from '../components/Navbar/Navbar';
import './styles.scss';

const scrollToExperiences = () => {
  console.log('SCROLLING E');
};

const scrollToProjects = () => {
  console.log('SCROLLING P');
};


export default function Main() {
  return (
    <div>
      <header className='main_section1' style={{backgroundImage: 'url(/seattle.jpg)'}}>
        <div className='main_image_dim'>
          <div className='main_header'>
              <h1 className='main_name'> Victor Araujo </h1>
              <div className='main_navbar'> 
                <Navbar scrollToExperiences={scrollToExperiences} scrollToProjects={scrollToProjects} />
              </div>
          </div>
          <ul className='main_contact_div'>
            <li className='contact_icon'>
              Email
            </li>
            

          </ul>
        </div>
      </header>
      <main>
        <Experiences />
      </main>
    </div>
  );
}
