import React, {Component} from 'react';
import GrabLogo from '../../images/grab-logo-green.png';
import UserImg from '../../images/user1.jpg';

class FooterAdmin extends Component {
  render() {
    return (<footer className="m-grid__item		m-footer ">
      <div className="m-container m-container--fluid m-container--full-height m-page__container">
        <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
          <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
            <span className="m-footer__copyright">
              2018
              <a href='#' className="m-link">Grab</a>
            </span>
          </div>
          <div className="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
            <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
              <li className="m-nav__item">
                <a href="#" className="m-nav__link">
                  <span className="m-nav__link-text">Home</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>);
  }
}

export default FooterAdmin;
