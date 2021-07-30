import React from "react";
import truckimg from "../../assets/truck5.jpeg"
import Icons from "../icons/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './about.css'

const About = () => {

  return (
    <div id="about" className="about">
      <div className="about-row">
        <div className="about-col">
          <h2>ABOUT US</h2>
          <p>From project cargo to domestic retail distribution and delivery, we provide a wide range of transportation services. </p>
          <p>Our capabilities allow us to work on projects of all sizes. From tiny personal projects to large-scale mega-builds, we've got you covered.</p>
          <div className="contact-section">

          <div className="contact-block-item">
            <div className="icon">
              <FontAwesomeIcon className="font-aws" icon={faBuilding}  style={{ fill: "red" }} />
            </div>
            <div>
              <h2>TIMOK019 inc.</h2>
              <h2>Company established 2018.</h2>
            </div>
          </div>


          <div className="contact-block-item">
            <div className="icon">
              <FontAwesomeIcon icon={faRoad} className="iconfa"  />
            </div>
            <div>
              <h2>5216s lockwood ave</h2>
              <h2>Chicago , IL 60638, USA </h2>
            </div>
          </div>


          <div className="contact-block-item">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} className="iconfa"  />
            </div>
            <div>
              <h2>+12028309765</h2>
            </div>
          </div>

          <div className="contact-block-item">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} className="iconfa"  />
            </div>
            <h2>contact@timok019.com</h2>
          </div>

        </div>
        </div>
        
        <div className="about-img">
          <img src={truckimg} alt="about-us-img" />
        </div>
      </div>
      <Icons />
    </div>
  )
};

export default About;
