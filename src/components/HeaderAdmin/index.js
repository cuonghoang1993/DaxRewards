import React, { Component } from "react";
import GrabLogo from "../../images/grab-logo-green.png";
import UserImg from "../../images/user1.jpg";

class HeaderAdmin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.body.classList.add(
      "m-page--fluid",
      "m--skin-",
      "m-content--skin-light2",
      "m-header--fixed",
      "m-header--fixed-mobile",
      "m-aside-left--enabled",
      "m-aside-left--skin-dark",
      "m-aside-left--offcanvas",
      "m-footer--push",
      "m-aside--offcanvas-default"
    );
  }

  handleAsideMenu = e => {
    e.preventDefault();
    var element = document.body;
    var aside_left = document.getElementById("m_aside_left");
    var classes = element.className.split(" ");
    var classes1 = aside_left.className.split(" ");

    if (element.classList && window.innerWidth >= 1025) {
      element.classList.toggle("m-brand--minimize");
      element.classList.toggle("m-aside-left--minimize");
    } else if (!element.classList && window.innerWidth >= 1025) {
      // For IE9
      var i = classes.indexOf("m-brand--minimize");
      var k = classes.indexOf("m-aside-left--minimize");

      if (i >= 0) classes.splice(i, 1).splice(k, 1);
      else classes.push("m-brand--minimize m-aside-left--minimize");
      element.className = classes.join(" ");
    } else if (element.classList && window.innerWidth < 1025) {
      element.classList.toggle("m-aside-left--on");
      aside_left.classList.toggle("m-aside-left--on");
    } else if (!element.classList && window.innerWidth < 1025) {
      // For IE9
      var l = classes.indexOf("m-aside-left--on");
      var m = classes1.indexOf("m-aside-left--on");

      if (l >= 0) {
        classes.splice(l, 1);
        classes1.splice(m, 1);
      } else classes.push("m-aside-left--on");
      classes1.push("m-aside-left--on");
      element.className = classes.join(" ");
      aside_left.className = classes.join(" ");
    }
  };

  render() {
    return (
      <header className="m-grid__item m-header">
        <div className="m-container m-container--fluid m-container--full-height">
          <div className="m-stack m-stack--ver m-stack--desktop">
            <div className="m-stack__item m-brand m-brand--skin-dark">
              <div className="m-stack m-stack--ver m-stack--general">
                <div className="m-stack__item m-stack__item--middle m-brand__logo">
                  <a className="m-brand__logo-wrapper">
                    <img
                      className="m-logo_grab"
                      src={GrabLogo}
                      alt="Grab logo"
                    />
                  </a>
                </div>
                <div className="m-stack__item m-stack__item--middle m-brand__tools">
                  <a
                    id="m_aside_left_minimize_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block"
                    onClick={this.handleAsideMenu}
                  >
                    <span />
                  </a>
                  <a
                    id="m_aside_left_offcanvas_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block"
                    onClick={this.handleAsideMenu}
                  >
                    <span />
                  </a>
                  <a
                    id="m_aside_header_menu_mobile_toggle"
                    className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block"
                  >
                    <span />
                  </a>
                  <a
                    id="m_aside_header_topbar_mobile_toggle"
                    className="m-brand__icon m--visible-tablet-and-mobile-inline-block"
                  >
                    <i className="flaticon-more" />
                  </a>
                </div>
              </div>
            </div>
            <div className="m-stack__item m-stack__item--fluid m-header-head">
              <button className="m-aside-header-menu-mobile-close m-aside-header-menu-mobile-close--skin-dark">
                <i className="fa fa-close" />
              </button>
              <div className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark">
                <ul className="m-menu__nav m-menu__nav--submenu-arrow">
                  <li className="m-menu__item m-menu__item--submenu m-menu__item--rel">
                    <a className="m-menu__link m-menu__toggle">
                      <i className="m-menu__link-icon fa fa-gift" />
                      <span className="m-menu__link-text">Quà tặng</span>
                      <i className="m-menu__hor-arrow fa fa-angle-down" />
                      <i className="m-menu__ver-arrow fa fa-angle-right" />
                    </a>
                    <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                      <span className="m-menu__arrow m-menu__arrow--adjust" />
                      <ul className="m-menu__subnav">
                        <li className="m-menu__item">
                          <a href="javascript:;" className="m-menu__link">
                            <i className="m-menu__link-icon fa fa-gift" />
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">
                                  Số lượng quà tặng
                                </span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">
                                    2
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li className="m-menu__item">
                          <a href="javascript:;" className="m-menu__link">
                            <i className="m-menu__link-icon fa fa-gift" />
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">
                                  Số lượng quà tặng đã đổi
                                </span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">
                                    2
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="m-menu__item m-menu__item--submenu m-menu__item--rel">
                    <a className="m-menu__link m-menu__toggle">
                      <i className="m-menu__link-icon fa fa-user" />
                      <span className="m-menu__link-text">Đối tác</span>
                      <i className="m-menu__hor-arrow fa fa-angle-down" />
                      <i className="m-menu__ver-arrow fa fa-angle-right" />
                    </a>
                    <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                      <span className="m-menu__arrow m-menu__arrow--adjust" />
                      <ul className="m-menu__subnav">
                        <li className="m-menu__item">
                          <a href="javascript:;" className="m-menu__link ">
                            <i className="m-menu__link-icon fa fa-user" />
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">
                                  Tổng số tài xế
                                </span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">
                                    2
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li className="m-menu__item">
                          <a href="javascript:;" className="m-menu__link ">
                            <i className="m-menu__link-icon fa fa-user" />
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">
                                  Tổng số tài xế đã đổi quà
                                </span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">
                                    2
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="m-topbar m-stack m-stack--ver m-stack--general">
                <div className="m-stack__item m-topbar__nav-wrapper">
                  <ul className="m-topbar__nav m-nav m-nav--inline">
                    <li className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light">
                      <a href="" className="m-nav__link m-dropdown__toggle">
                        <span className="m-topbar__userpic">
                          <img
                            src={UserImg}
                            className="m--img-rounded m--marginless m--img-centered"
                            alt=""
                          />
                        </span>
                        <span className="m-topbar__username m--hide">User</span>
                      </a>
                      <div className="m-dropdown__wrapper">
                        <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                        <div className="m-dropdown__inner">
                          <div className="m-dropdown__header m--align-center">
                            <div className="m-card-user m-card-user--skin-dark">
                              <div className="m-card-user__pic">
                                <img
                                  src={UserImg}
                                  className="m--img-rounded m--marginless"
                                  alt=""
                                />
                              </div>
                              <div className="m-card-user__details">
                                <span className="m-card-user__name m--font-weight-500">
                                  User
                                </span>
                                <a
                                  href=""
                                  className="m-card-user__email m--font-weight-300 m-link"
                                >
                                  user@gmail.com
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="m-dropdown__body">
                            <div className="m-dropdown__content">
                              <ul className="m-nav m-nav--skin-light">
                                <li className="m-nav__section m--hide">
                                  <span className="m-nav__section-text">
                                    Section
                                  </span>
                                </li>
                                <li className="m-nav--item">
                                  <a
                                    href="?page=header/profile&amp;demo=default"
                                    className="m-nav__link"
                                  >
                                    <i className="m-nav__link-icon flaticon-share" />
                                    <span className="m-nav__link-text">
                                      Đổi mật khẩu
                                    </span>
                                  </a>
                                </li>
                                <li className="m-nav__separator m-nav__separator--fit" />
                                <li className="m-nav--item">
                                  <a
                                    href=""
                                    className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder"
                                  >
                                    Thoát
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderAdmin;
