import React, {Component} from 'react';
import GrabLogo from '../../images/grab-logo-green.png';
import UserImg from '../../images/user1.jpg';

class HeaderAdmin extends Component {
  render() {
    return (
      <header className='m-grid__item m-header'>
        <div className='m-container m-container--fluid m-container--full-height'>
          <div className='m-stack m-stack--ver m-stack--desktop'>
            <div className='m-stack__item m-brand m-brand--skin-dark'>
              <div className='m-stack m-stack--ver m-stack--general'>
                <div className='m-stack__item m-stack__item--middle m-brand__logo'>
                  <a className='m-brand__logo-wrapper'>
                    <img className='m-logo_grab' src={GrabLogo} alt='Grab logo'/>
                  </a>
                </div>
                <div className='m-stack__item m-stack__item--middle m-brand__tools'>
                  <a href="javascript:;" id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block">
          					<span></span>
          				</a>
                  <a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
          					<span></span>
          				</a>
                  <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
          					<span></span>
          				</a>
                  <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
            				<i className="flaticon-more"></i>
            			</a>
                </div>
              </div>
            </div>
            <div className='m-stack__item m-stack__item--fluid m-header-head'>
              <button className='m-aside-header-menu-mobile-close m-aside-header-menu-mobile-close--skin-dark'>
                <i className='fa fa-close'/>
              </button>
              <div className='m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark'>
                <ul className='m-menu__nav m-menu__nav--submenu-arrow'>
                  <li className='m-menu__item m-menu__item--submenu m-menu__item--rel'>
                    <a className='m-menu__link m-menu__toggle'>
                      <span className="m-menu__link-text">Quà tặng</span>
                    </a>
                    <div className='m-menu__submenu m-menu__submenu--classic m-menu__submenu--left'>
                      <span className='m-menu__arrow m-menu__arrow--adjust'></span>
                      <ul className='m-menu__subnav'>
                        <li className='m-menu__item'>
                          <a href='javascript:;' className="m-menu__link">
                            <i className="m-menu__link-icon flaticon-file"></i>
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Số lượng quà tặng</span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">2</span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li className='m-menu__item'>
                          <a href='javascript:;' className="m-menu__link">
                            <i className="m-menu__link-icon flaticon-diagram"></i>
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Số lượng quà tặng đã đổi</span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">2</span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='m-menu__item m-menu__item--submenu m-menu__item--rel'>
                    <a className='m-menu__link m-menu__toggle'>
                      <span className="m-menu__link-text">Đối tác</span>
                    </a>
                    <div className='m-menu__submenu m-menu__submenu--classic m-menu__submenu--left'>
                      <span className='m-menu__arrow m-menu__arrow--adjust'></span>
                      <ul className='m-menu__subnav'>
                        <li className='m-menu__item'>
                          <a href='javascript:;' className="m-menu__link ">
                            <i className="m-menu__link-icon flaticon-diagram"></i>
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Tổng số tài xế</span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">2</span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li className='m-menu__item'>
                          <a href='javascript:;' className="m-menu__link ">
                            <i className="m-menu__link-icon flaticon-diagram"></i>
                            <span className="m-menu__link-title">
                              <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Tổng số tài xế đã đổi quà</span>
                                <span className="m-menu__link-badge">
                                  <span className="m-badge m-badge--success">2</span>
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
              <div className='m-topbar m-stack m-stack--ver m-stack--general'>
                <div className='m-stack__item m-topbar__nav-wrapper'>
                  <ul className='m-topbar__nav m-nav m-nav--inline'>
                    <li className='m-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light'>
                      <a href='' className='m-nav__link m-dropdown__toggle'>
                        <span className='m-topbar__userpic'>
                          <img src={UserImg} className='m--img-rounded m--marginless m--img-centered' alt=''/>
                        </span>
                        <span className='m-topbar__username m--hide'>User</span>
                      </a>
                      <div className='m-dropdown__wrapper'>
                        <span className='m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust'></span>
                        <div className='m-dropdown__inner'>
                          <div className='m-dropdown__header m--align-center'>
                            <div className='m-card-user m-card-user--skin-dark'>
                              <div className='m-card-user__pic'>
                                <img src={UserImg} className='m--img-rounded m--marginless' alt=''/>
                              </div>
                              <div className='m-card-user__details'>
                                <span className='m-card-user__name m--font-weight-500'>User</span>
                                <a href='' className='m-card-user__email m--font-weight-300 m-link'>user@gmail.com</a>
                              </div>
                            </div>
                          </div>
                          <div className='m-dropdown__body'>
                            <div className='m-dropdown__content'>
                              <ul className='m-nav m-nav--skin-light'>
                                <li className='m-nav__section m--hide'>
                                  <span className='m-nav__section-text'>Section</span>
                                </li>
                                <li className='m-nav--item'>
                                  <a href='?page=header/profile&amp;demo=default' className='m-nav__link'>
                                    <i className='m-nav__link-icon flaticon-share'></i>
                                    <span className='m-nav__link-text'>Đổi mật khẩu</span>
                                  </a>
                                </li>
                                <li className='m-nav__separator m-nav__separator--fit'></li>
                                <li className='m-nav--item'>
                                  <a href='' className='btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder'>Thoát</a>
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
