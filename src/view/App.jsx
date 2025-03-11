import './App.css'
import profilePicture from "../assets/pfp.jpg"
import Languages from './Languages';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <>
        <section className="intro-section">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Zsolt Szabó</h2>
              <div className="placeholder-text">
                Computer Science Bachelor's Degree student. <br/>
                Currently studying at the University of Eötvös Lóránd Tudományegyetem, Hungary. <br/>
                I am interested in web development and software engineering. <br/>
                I am always looking for new challenges and learning new things. <br/>
                I am a fast learner and a team player.
              </div>
            </div>
            <div className="intro-image">
              <img src={profilePicture} alt="Profile Picture"></img>
            </div>
          </div>
        </section>
        <Languages />
        <Projects />
        <Contact />
    </>
  )
}

export default App
