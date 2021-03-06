interface Props {
    scrollToExperiences: any;
    scrollToProjects: any;
}

export default function Navbar(props: Props) {
    const { scrollToExperiences, scrollToProjects } = props;
    return (
        <ul className='navbar_navbar'>
            <li className='navbar_item' onClick={scrollToExperiences}>
                <h5> Experiences </h5>
            </li>
            <li className='navbar_item' onClick={scrollToProjects}>
                <h5> Projects </h5>
            </li>
            <li className='navbar_item'>
                <a className='navbar_anchor' href='resume.pdf' target='_blank'>
                    <h5> Resume </h5>
                </a>
            </li>
        </ul>
    );
}
