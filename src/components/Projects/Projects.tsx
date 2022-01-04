import './styles.scss';
import data from '../../data/data.json';

const generateOverlay = (entry: any) => {
    return (
        <div className='projects_overlay projects_overlay_grid'>
            <div>
                <img className='projects_overlay_icon' src='icons/white/features.png' />
                <ul className='projects_feature_list'>
                    {entry.features.map((feature: string, i: number) => (
                        <li key={i}>
                            <p> {feature} </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div> 2 </div>
            <div> 3 </div>
            <div> 4 </div>
        </div>
    );
}

const Projects = () => {
    return (
        <div className='projects_container'>
            {data.projects.map((entry, i) => {
                return (
                    <div className='projects_item' key={i}>
                        <div className='projects_overlay_container'>
                            <img alt={entry.name} className='projects_img' src='images/trender.png' />
                            {generateOverlay(entry)}
                        </div>
                        <div className='projects_header_div'>
                            <div className='projects_desc_div'>
                                <span className='projects_title'> {entry.name} </span>
                                <span className='projects_description'> {entry.description} </span>    
                            </div>
                            <div className='projects_deployed_div'>
                                <div className='projects_deployed_1'>
                                    <span className='projects_try_label'> Try Now! </span>
                                    <a className='projects_try_icon' key={i} href={entry.deployed_url} target='_blank'>
                                        <img src={'icons/' + entry.deployed_icon}  />
                                    </a>
                                </div>
                                <div className='projects_deployed_1'>
                                    <span className='projects_try_label'> View Source{entry.sources.length > 1 ? 's' : ''} </span>
                                    <div className='projects_sources'>
                                        {entry.sources.map((source, i) => (
                                            <a className='projects_try_icon' key={i} href={source} target='_blank'>
                                                <img src='icons/black/github.png' />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
        
    );
}

export default Projects;