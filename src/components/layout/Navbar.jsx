import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fa-brands fa-github",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i class={this.props.icon} style={{ marginRight: "5px" }}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;