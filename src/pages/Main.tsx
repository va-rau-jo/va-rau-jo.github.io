import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './styles.scss';

export default function Main() {
  return (
    <div>
      <header className='main_header'>
          <h1 className='main_name'> Victor Araujo </h1>
          <div className='main_navbar'> 
            <Navbar />
          </div>
      </header>
    </div>
  );
}
