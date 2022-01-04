import ContactList from '../components/ContactList/ContactList';
import Experiences from '../components/Experiences/Experiences';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import './styles.scss';

const scrollToElement = (element: HTMLElement) => {
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

const scrollToExperiences = () => {
  console.log('SCROLLING E');
  const element = document.getElementById('experiences');
  
  if (element) {
    scrollToElement(element); 
  }
};

const scrollToProjects = () => {
  console.log('SCROLLING P');
  const element = document.getElementById('projects');
  
  if (element) {
    scrollToElement(element); 
  }
};


export default function Main() {
  return (
    <div>
      <header className='main_section1' style={{backgroundImage: 'url(images/seattle.jpg)'}}>
        <div>
          <div className='main_header'>
              <h1 className='main_name'> Victor Araujo </h1>
              <div className='main_navbar'> 
                <Navbar scrollToExperiences={scrollToExperiences} scrollToProjects={scrollToProjects} />
              </div>
          </div>
         <ContactList />
        </div>
      </header>
      <div className='main_divider' />
      <main className='main_section2' style={{backgroundImage: 'url(images/icons_med.png)'}}>
        <div>
          <p id='experiences' className='main_section_title'> Experiences </p>
          <Experiences />
        </div>
      </main>
      <div className='main_divider' />
      <section className='main_section3'>
        <p id='projects' className='main_section_title'> Projects </p>
        <Projects />
      </section>
    </div>
  );
}
