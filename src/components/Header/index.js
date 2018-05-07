import React, { Component } from "react";
import GrabLogo from "../../images/grab-logo-green.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <nav id="global-nav" className="navbar navbar-fixed-top">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              aria-expanded="false"
              onClick={() => this.setState({ expanded: !this.state.expanded })}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-logo">
              <a href="/">
                <img
                  className="m-logo_grab"
                  src={GrabLogo}
                  alt="Grab logo green"
                />
              </a>
            </div>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className={`collapse navbar-collapse header-index${
              this.state.expanded ? " in" : ""
            }`}
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/">Quà tặng</a>
              </li>
              <li>
                <a href="/faq">Đăng nhập</a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container-fluid */}
      </nav>
    );
  }
}

export default Header;
