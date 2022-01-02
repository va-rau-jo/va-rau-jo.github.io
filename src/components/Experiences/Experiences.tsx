import React, { useEffect, useState } from 'react';
import './styles.scss';
import data from '../../data/data.json';

const Experiences = () => {
    const logos: {[index: string]:any} = data.logos;
    return (
        <ul className='internships_list'>
            {data.internships.map((entry, i) => {
                return (
                    <li className='internships_list_item' key={i}>
                        <img alt="Company logo" className='internships_logo' src={logos[entry.company.toLowerCase()]} />
                        <div>
                            <h5 className='internships_list_item_company'>  {entry.company} </h5>
                            <div className='internships_date_container'>
                                <img alt="date" className='internships_icon' src='icons/black/calendar.png' />
                                <span> {entry.start_date} - {entry.end_date} </span>
                            </div>
                            <div className='internships_date_container'>
                                <img alt="location" className='internships_icon' src='icons/black/marker_outline.png' />
                                <span> {entry.location} {entry.remote ? '(Remote)' : ''} </span>
                            </div>
                            {entry.team ? 
                                <div className='internships_date_container'>
                                    <img alt="team" className='internships_icon' src='icons/black/team.png' />
                                    <span> {entry.team} </span>
                                </div> : 
                                null }
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Experiences;