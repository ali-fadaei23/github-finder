import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon = "fa-brands fa-github", title = "GitHub Finder" }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} style={{ marginRight: "5px" }}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Navbar;
