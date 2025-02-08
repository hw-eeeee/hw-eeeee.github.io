import { useEffect, useState } from 'react';
import './Home.css';
import AboutMe from './AboutMe';
// import Contact from './Contact';
import image from '../../src/assets/panda-6258.gif';
import { Typewriter } from 'react-simple-typewriter';
import FadeIn from 'react-fade-in';
import BlinkingArrow from '../components/BlinkingArrow/BlinkingArrow';

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
          <img src={image} alt="panda gif" className="front-image" />
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
              color="#466046"
              size="6rem"
            />
          )}
        </div>
      </FadeIn>

      <AboutMe onArrowClick={handleArrowClickContact} />
      {/* <Contact /> */}
    </>
  );
}

export default Home;
