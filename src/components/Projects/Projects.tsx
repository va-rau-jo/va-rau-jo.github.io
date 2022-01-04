import './styles.scss';
import data from '../../data/data.json';
import React from 'react';

const logos: {[index: string]:any} = data.logos;

const getCell = (entry: any, i: number) => {
    const side = i % 2 === 0 ? '_left' : '_right';
    return (
        <td className='exp_item_container'>
            <div className='exp_item'>
                <div className={'exp_company_logo exp_company_logo' + side} >
                    <img alt="Company logo" src={logos[entry.company.toLowerCase()]} />
                </div>

                <div className='exp_title'>
                    <span className='exp_company_name'> {entry.company} </span>
                    <span className='exp_role'> - {entry.role} </span>
                </div>

                <div className='exp_item_labels'>
                    <div className='exp_label_container'>
                        <img alt="date" className='exp_label_icon' src='icons/white/calendar.png' />
                        <span> {entry.start_date} - {entry.end_date} </span>
                    </div>
                    <div className='exp_label_container'>
                        <img alt="location" className='exp_label_icon' src='icons/white/marker.png' />
                        <span> {entry.location} {entry.remote ? '(Remote)' : ''} </span>
                    </div>
                </div>
                <div className='exp_item_labels'>
                    {entry.team ? 
                        <div className='exp_label_container'>
                            <img alt="team" className='exp_label_icon' src='icons/white/team.png' />
                            <span> {entry.team} </span>
                        </div> : 
                        null }
                </div>
            </div>
            <ul className='exp_accomplishments'>
                {entry.accomplishments.map((description: string, i: number) => (
                    <li key={i}>
                        <span> {description} </span>
                    </li>
                ))}
            </ul>
            <ul className='exp_technologies'>
                {entry.technologies.map((description: string, i: number) => (
                    <li key={i}>
                        <span> {description} </span>
                    </li>
                ))}
            </ul>
        </td>
    );
}

const Projects = () => {
    return (
        <div className='projects_container'>
            {data.projects.map((entry, i) => {
                <div>
                    {entry.name}
                </div>
            })}
        </div>
        
    );
}

export default Projects;