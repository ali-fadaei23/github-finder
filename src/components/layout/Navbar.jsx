import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon = "fa-brands fa-github", title = "GitHub Finder" }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} style={{ marginRight: "5px" }}></i>
        {title}
      </h1>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Navbar;
