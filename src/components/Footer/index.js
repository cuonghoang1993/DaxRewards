import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="copyright">
                Copyright © GrabAllStars.com 2018
              </span>
              <br />
              <i className="fa fa-users" aria-hidden="true" />
              <a
                href="http://grb.to/driverhelpcentre"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
              &nbsp; &nbsp;
              <i className="fa fa-list-ul" aria-hidden="true" />
              <a href="/tnc">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
