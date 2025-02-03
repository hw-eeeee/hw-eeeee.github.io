import PropTypes from 'prop-types';
import './AboutMe.css';
// import BlinkingArrow from '../components/BlinkingArrow/BlinkingArrow';
import headshot from '../assets/Screenshot 2025-02-02 at 10.38.38 PM.png';

const AboutMe = () => {
  return (
    <div id="about-me" className="about-me-section">
      <div className="left-side">
        <h2 className="about-title">About Me</h2>
        <img src={headshot} alt="face image" className="head-image" />
      </div>
      <div className="right-side">
        <h3 className="intro-heading">My name is Hui Shan, I study CompSci!</h3>
        <ul className="about-me-facts">
          <li>
            <span>✈️</span>
            <p>
              Originally from Singapore and Shanghai, I moved to the beautiful
              Sydney, Australia when I was 8 years old
            </p>
          </li>
          <li>
            <span>🙇‍♀️</span>
            <p>
              Currently working towards my Bachelor of Computer Science
              (Honours) at The University of New South Wales
            </p>
          </li>
          <li>
            <span>👈</span>
            <p>
              Was fortunate to gain backend development experience during my
              internship at Atlassian, where I enhanced tracing instrumentation
              as part of the observability team
            </p>
          </li>
          <li>
            <span>🐣</span>
            <p>
              <b>
                Currently exploring entry-level software development
                opportunities
              </b>
              , particularly in both frontend and backend development!
            </p>
          </li>
          <li>
            <span>💻</span>
            <p>
              Open to trying out other fields to discover what I enjoy and what
              I’m good at :))
            </p>
          </li>
          <li>
            <span>🎻</span>
            <p>
              Outside of computers, I work as a cello teacher and love making a
              positive impact through music
            </p>
          </li>
          <li>
            <span>🎾</span>
            <p>
              I’m a HUGE tennis fan and enjoy both watching and playing the
              sport (I hope to see the AO in person one day hahah)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  onArrowClick: PropTypes.func.isRequired,
};

export default AboutMe;
