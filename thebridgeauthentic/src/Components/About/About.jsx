import React from 'react'
import aboutCSS from './../About/About.module.css'

import aboutImg from './../../assets/10.png'

function About() {
    return (
      <div className={`${aboutCSS.about_wrapper} section`}>
        <div className={aboutCSS.about_img}>
          <img src={aboutImg} alt="about-img" />
        </div>
        <div className={aboutCSS.about_content}>   
          <small className='section__Heading'>The Bridge</small>      
          <h2 className="section__Title">Where Elegance Meets  <span>Excellance</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe velit fugiat eius accusantium illo? Magnam placeat itaque rem, error minima animi quae quos deserunt.</p>
          <div className={aboutCSS.Cards}>
            <p>260+ <span>Awards Wins</span></p>
            <p>20K+ <span>Visitors</span></p>
            <p>150k+ <span>Events</span></p>
          </div>
        </div>
      </div>
    )

}

export default About