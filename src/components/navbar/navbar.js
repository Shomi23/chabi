import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => (
  <nav className="nav-wrapper">
    <h1>
      <a className="home_link" href="#home">TIMOK019</a>
    </h1>
    <div className="nav-block">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={800}
        delay={0}
        isDynamic={true}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        ignoreCancelEvents={false}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={800}
        delay={0}
        isDynamic={true}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        ignoreCancelEvents={false}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={800}
        delay={0}
        isDynamic={true}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        ignoreCancelEvents={false}
      >
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
