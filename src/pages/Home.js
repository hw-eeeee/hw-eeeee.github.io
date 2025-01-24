import { useEffect, useState } from 'react';
import './Home.css';
import image from '../../src/assets/c08806217c486e6917857226675c356b.jpg';
import BlinkingArrow from '../components/BlinkingArrow/BlinkingArrow';
import { Typewriter } from 'react-simple-typewriter';
import FadeIn from 'react-fade-in';

function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleArrowClickAbout = () => {
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      history.pushState(null, '', '#about-me');
    }, 500);
  };
  const handleArrowClickContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      history.pushState(null, '', '#contact');
    }, 500);
  };

  return (
    <>
      <FadeIn className="page-fade" transitionDuration={2000}>
        <div id="home" className="page-style">
          <img src={image} alt="mouse image" className="front-image" />
          <div className="heading-style">
            <div>
              Hello, My name is <span className="underline">Hui</span>
            </div>
            <div className="typewriter">
              <Typewriter
                words={["It's nice to meet you :))"]}
                loop={1}
                cursor={false}
                typeSpeed={70}
              />
            </div>
          </div>

          {showArrow && (
            <BlinkingArrow
              onClick={handleArrowClickAbout}
              color="#80619e"
              size="6rem"
            />
          )}
        </div>
      </FadeIn>

      <div id="about-me" className="about-me-section">
        <h2>About Me</h2>
        <p>This is the About Me section of the page.</p>
        <BlinkingArrow
          onClick={handleArrowClickContact}
          color="#80619e"
          size="6rem"
        />
      </div>

      <div id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>This is the Contact section of the page.</p>
      </div>
    </>
  );
}

export default Home;
