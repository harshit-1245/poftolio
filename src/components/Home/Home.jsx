import React, { useContext, useState } from 'react';
import './Home.css';
import goku from '../image/goku.png';
import { Typewriter } from 'react-simple-typewriter';
import hello from "../image/hello.json";
import Lottie from 'lottie-react';
import ReactSwitch from 'react-switch';

const Home = () => {
const animation = {
  width:'350px',
}
  

 
  const [isCoder, setIsCoder] = useState(true);

  const toggleCoder = () => {
    setIsCoder(!isCoder);
  };

  return (
    <div className={`hero`}>
      <div className="container">
        <div className="left-column">
          <h1>
            I'm{' '}
            <span className='text'>
              <Typewriter
                words={['Coder', 'Developer']}
                loop={true}
                cursor={true}
                cursorStyle={'_'}
                typeSpeed={70}
                deleteSpeed={50}
                onLoopDone={() => toggleCoder()}
                warpperClassName="typewriter-wrapper"
              />
            </span>
          </h1>
          <p className='para'>
            This is my official Portfolio website that showcases all my work
            experience as a web developer,as well as my skills. <br />
            I'll add some more feature after sometimes because learning some new technology would take time
          </p>
          <div className="button-container">
            <button className="download-button">Download CV</button>
            <button className="hire-button">Hire me</button>
          </div>
        </div>
        <div className="right-column" style={animation}>
           <Lottie  animationData={hello}/>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
