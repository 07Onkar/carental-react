import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Navbar/Car Rental.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav  className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        {/* For Mobiles */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar_close">
            <FaTimes />
          </div>
          <ul className="mobile-navbar_links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* For Desktops */}

        <div className="navbar">
          <div className="navbar_img">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <img className="navbar-logo" src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className="navbar_links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar_buttons">
            <Link className="navbar_buttons_sign-in" to="/">
              Sign in
            </Link>
            <Link className="navbar_buttons_register" to="/">
              Register
            </Link>
          </div>

          {/* for Mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
