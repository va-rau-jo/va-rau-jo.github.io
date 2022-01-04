import './styles.scss';
import data from '../../data/data.json';



const Projects = () => {
    return (
        <div className='projects_container'>
            {data.projects.map((entry, i) => {
                return (
                    <div className='projects_item' key={i}>
                        <div className='projects_overlay_container'>
                            <img alt={entry.name} className='projects_img' src='images/trender.png' />
                            <div className='projects_overlay'>
                                hi
                            </div>
                        </div>
                        <div className='projects_header_div'>
                            <div className='projects_desc_div'>
                                <span className='projects_title'> {entry.name} </span>
                                <span className='projects_description'> {entry.description} </span>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
        
    );
}

export default Projects;