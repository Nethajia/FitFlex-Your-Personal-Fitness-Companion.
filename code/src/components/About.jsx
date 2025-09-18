import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Embark on a Fitness Odyssey with NJ Fitness </h3>
          <p>NJ Fitness is a health and wellness center focused on improving physical strength, endurance, and overall lifestyle. It offers modern gym equipment, personal training, and group fitness programs like yoga, Zumba, and HIIT. The center also provides nutrition guidance to support members in reaching their fitness goals. With flexible membership plans, it caters to beginners as well as advanced fitness enthusiasts. NJ Fitness promotes a balanced approach to both physical and mental well-being.
</p>
      </div>

    </div>
  )
}

export default About