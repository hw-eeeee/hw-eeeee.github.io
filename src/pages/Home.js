import './Home.css';
import image from '../../src/assets/c08806217c486e6917857226675c356b.jpg';
import { Typewriter } from 'react-simple-typewriter';
import FadeIn from 'react-fade-in';

function Home() {
  return (
    <FadeIn className="page-fade" transitionDuration={2000}>
      <div className="page-style">
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
      </div>
    </FadeIn>
  );
}

export default Home;
