import data from '../data/data.json';

const generateOverlay = (entry: any) => {
    return (
        <div className='projects_overlay projects_overlay_grid'>
            <div className='projects_overlay_grid_cell_1'>
                <div className='projects_overlay_title_container'>
                    <img
                        alt='features'
                        className='projects_overlay_icon'
                        src='icons/white/features.png'
                    />
                    <span className='projects_overlay_title'> Features </span>
                </div>
                <div className='projects_ends_container'>
                    {entry['front-end'] ? (
                        <div>
                            <span className='projects_end_label'> Front-end: </span>
                            <span className='projects_end'>{entry['front-end']}</span>
                        </div>
                    ) : null}
                    {entry['back-end'] ? (
                        <div>
                            <span className='projects_end_label'> Back-end: </span>
                            <span className='projects_end'>{entry['back-end']}</span>
                        </div>
                    ) : null}
                </div>
                <ul className='projects_feature_list'>
                    {entry.features.map((feature: string, i: number) => (
                        <li key={i}>
                            <span> {feature} </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='projects_overlay_grid_cell_2'>
                <div className='projects_overlay_title_container'>
                    <img alt='role' className='projects_overlay_icon' src='icons/white/role.png' />
                    <span className='projects_overlay_title'> Role </span>
                </div>
                <p className='projects_role_text'> {entry.contribution} </p>
            </div>
            <div className='projects_overlay_grid_cell_3'>
                <div className='projects_overlay_title_container'>
                    <img
                        alt='technologies'
                        className='projects_overlay_icon'
                        src='icons/white/stack.png'
                    />
                    <span className='projects_overlay_title'> Technologies </span>
                </div>
                <ul className='projects_tech_list'>
                    {entry.technologies.map((tech: any, i: number) => (
                        <li className='projects_tech_list_item' key={i}>
                            <img
                                alt={tech.name}
                                className='projects_tech_list_icon'
                                src={'icons/tech/' + tech.icon}
                            />
                            <span className='projects_tech_list_text'> {tech.name} </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className='projects_container'>
            {data.projects.map((entry, i) => {
                return (
                    <div className='projects_item' key={i}>
                        <div className='projects_overlay_container'>
                            <div className='projects_hover_info'>
                                <span className='projects_hover_info_hover'>
                                    {' '}
                                    Hover for details{' '}
                                </span>
                                <span className='projects_hover_info_tap'> Tap for details </span>
                            </div>
                            {/* Image must have exactly a 2:1 width/height ratio */}
                            <img
                                alt={entry.name}
                                className='projects_img'
                                src={'images/' + entry.image}
                            />
                            {generateOverlay(entry)}
                        </div>
                        <div className='projects_header_div'>
                            <div className='projects_desc_div'>
                                <span className='projects_title'> {entry.name} </span>
                                <p className='projects_description'>{entry.description}</p>
                            </div>
                            <div className='projects_deployed_div'>
                                {entry.deployed_url ? (
                                    <div className='projects_deployed_item'>
                                        <span className='projects_try_label'> Demo </span>
                                        <a
                                            className='projects_try_icon'
                                            key={i}
                                            rel='noreferrer'
                                            href={entry.deployed_url}
                                            target='_blank'
                                        >
                                            <img
                                                alt='deployed icon'
                                                src={'icons/tech/' + entry.deployed_icon}
                                            />
                                        </a>
                                    </div>
                                ) : null}
                                <div className='projects_deployed_item'>
                                    <span className='projects_try_label'>
                                        {' '}
                                        View Source{entry.sources.length > 1 ? 's' : ''}{' '}
                                    </span>
                                    <div className='projects_sources'>
                                        {entry.sources.map((source, i) => (
                                            <a
                                                className='projects_try_icon'
                                                key={i}
                                                href={source}
                                                rel='noreferrer'
                                                target='_blank'
                                            >
                                                <img alt='github' src='icons/black/github.png' />
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
};

export default Projects;
