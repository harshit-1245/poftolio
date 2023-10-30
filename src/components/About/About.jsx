import React from 'react';
import './About.css';
import goku from '../image/goku.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-contents">
        <div className="image-section">
          <img src={goku} alt="Goku" className="profile-image" />
        </div>
        <div className="info-section">
          <h1>About Me</h1>
          <h2>Professional Web Developer</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="personal-info">
            <div>
              <span>Name:</span>
              <span>Harshit Singh</span>
            </div>
            <div>
              <span>Age:</span>
              <span>21</span>
            </div>
            <div>
              <span>Email:</span>
              <span>xyz@example.com</span>
            </div>
            <div>
              <span>Address:</span>
              <span>Somewhere in UP</span>
            </div>
          </div>
          <div className="button">
            <button className="download-button">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;