import React from "react";
import truckimg from "../../assets/truck5.jpeg"
import './about.css'

const About = () => {

  return (
    <div id="about" className="about">
      <div className="about-row">
        <div className="about-col">
          <h2>ABOUT US</h2>
          <p>From project cargo to international transportation and domestic retail distribution and delivery, we provide a wide range of transportation services. </p>
          <p>Our capabilities allow us to work on projects of all sizes. From tiny personal projects to large-scale mega-builds, we've got you covered.</p>
        </div>
        <div className="about-img">
          <img src={truckimg} alt="about-us-img" />
        </div>
      </div>
    </div>
  )
};

export default About;
