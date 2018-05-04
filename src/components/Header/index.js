import React, { Component } from "react";
import GrabLogo from "../../images/grab-logo-green.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
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
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-logo">
              <a href="/">
                <img height="30" src={GrabLogo} alt="Grab logo green" />
              </a>
            </div>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/">Rewards</a>
              </li>
              <li>
                <a href="/redemption">Redemption</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
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
