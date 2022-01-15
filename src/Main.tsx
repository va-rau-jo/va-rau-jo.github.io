import ContactList from './components/ContactList';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const PROJECT_DIV_ID = 'section3';
const BACK_TO_TOP_BUTTON_ID = 'back_to_top_button';

const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const startY = window.pageYOffset;
        const diff = element?.getBoundingClientRect().y - startY;
        const duration_ms = 1000;
        var start: number;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;

            var time = timestamp - start;
            var percent = Math.min(time / duration_ms, 1);
            window.scrollTo(0, startY + diff * percent);

            if (time < duration_ms) {
                window.requestAnimationFrame(step);
            }
        });
    }
};

// Enable back to top button to only appear at bottom of page
window.addEventListener('scroll', () => {
    const section = document.getElementById(PROJECT_DIV_ID);
    const button = document.getElementById(BACK_TO_TOP_BUTTON_ID);
    if (!section || !button) return;
    const visible = section.getBoundingClientRect().top <= window.innerHeight;
    button.style.opacity = visible ? '1' : '0';
});

export default function Main() {
    return (
        <div>
            <header
                className='main_section1'
                style={{ backgroundImage: 'url(images/seattle.jpg)' }}
            >
                <div>
                    <div className='main_header'>
                        <h1 className='main_name' id='name'>
                            Victor Araujo
                        </h1>
                        <div className='main_navbar'>
                            <Navbar
                                scrollToExperiences={() => {
                                    scrollToElement('experiences');
                                }}
                                scrollToProjects={() => {
                                    scrollToElement('projects');
                                }}
                            />
                        </div>
                    </div>
                    <ContactList />
                </div>
            </header>
            <div className='main_divider' />
            <main
                className='main_section2'
                style={{ backgroundImage: 'url(images/icons_med.png)' }}
            >
                <div>
                    <p id='experiences' className='main_section_title'>
                        Experiences
                    </p>
                    <Experiences />
                </div>
            </main>
            <div className='main_divider' />
            <section id={PROJECT_DIV_ID} className='main_section3'>
                <p id='projects' className='main_section_title'>
                    Projects
                </p>
                <Projects />
            </section>
            <button
                id={BACK_TO_TOP_BUTTON_ID}
                className='main_btt_btn'
                onClick={() => {
                    scrollToElement('name');
                }}
            >
                <img alt='up arrow' src='icons/black/arrow.png' />
            </button>
        </div>
    );
}
