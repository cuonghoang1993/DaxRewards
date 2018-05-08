import React, { Component } from "react";

import HeaderAdmin from "../../components/HeaderAdmin";
import FooterAdmin from "../../components/FooterAdmin";
import AsideMenu from "../../components/AsideMenu";
import ContentContainer from "../../components/ContentContainer";
import UserImg from "../../images/user1.jpg";

class AdminGiftpage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { pathname } = this.props.location;
    const lastSegment = pathname.substr(pathname.lastIndexOf("/") + 1);

    return (
      <div className="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-light m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default m-scroll-top--shown">
        <div className="m-grid m-grid--hor m-grid--root m-page">
          <HeaderAdmin />
          <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <AsideMenu />
            <ContentContainer title={`Quà tặng ${this.props.match.params.id}`}>
              <div className="m-content">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="m-portlet m-portlet--full-height  ">
                      <div className="m-portlet__body">
                        {lastSegment === "edit" && (
                          <div className="m-card-profile">
                            <div className="m-card-profile__title m--hide">
                              Your Profile
                            </div>

                            <div className="m-card-profile__pic">
                              <div className="m-card-profile__pic-wrapper">
                                <img src={UserImg} alt="" />
                              </div>
                            </div>
                            <div className="m-card-profile__details">
                              <span className="m-card-profile__name">
                                Mark Andre
                              </span>
                              <a
                                href=""
                                className="m-card-profile__email m-link"
                              >
                                mark.andre@gmail.com
                              </a>
                            </div>
                          </div>
                        )}
                        {lastSegment === "new" && (
                          <div className="m-card-profile">
                            <div className="m-card-profile__title m--hide">
                              Your Profile
                            </div>

                            <div className="m-card-profile__pic">
                              <div className="m-card-profile__pic-wrapper">
                                <img
                                  src="http://place-hold.it/150x150"
                                  alt="Image New"
                                />
                              </div>
                            </div>
                            <div className="m-card-profile__details">
                              <span className="m-card-profile__name">
                                New Gift
                              </span>
                            </div>
                          </div>
                        )}
                        <ul className="m-nav m-nav--hover-bg m-portlet-fit--sides">
                          <li className="m-nav__separator m-nav__separator--fit" />
                          <li className="m-nav__section m--hide">
                            <span className="m-nav__section-text">Section</span>
                          </li>
                          <li className="m-nav__item">
                            <a
                              href="?page=header/profile&amp;demo=default"
                              className="m-nav__link"
                            >
                              <i className="m-nav__link-icon flaticon-profile-1" />
                              <span className="m-nav__link-title">
                                <span className="m-nav__link-wrap">
                                  <span className="m-nav__link-text">
                                    Upload picture
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="m-portlet m-portlet--full-height m-portlet--tabs  ">
                      <div className="m-form m-form--fit m-form--label-align-right">
                        <div className="m-portlet__body">
                          <div className="form-group m-form__group m--margin-top-10 m--hide">
                            <div
                              className="alert m-alert m-alert--default"
                              role="alert"
                            >
                              {/* Alert here */}
                            </div>
                          </div>

                          <div className="form-group m-form__group row">
                            <label
                              htmlFor="name"
                              className="col-md-2 col-form-label"
                            >
                              Full Name
                            </label>
                            <div className="col-md-7">
                              <input
                                id="name"
                                className="form-control m-input"
                                type="text"
                                value="Mark Andre"
                              />
                            </div>
                          </div>
                          <div className="form-group m-form__group row">
                            <label
                              htmlFor="occupation"
                              className="col-md-2 col-form-label"
                            >
                              Occupation
                            </label>
                            <div className="col-md-7">
                              <input
                                id="occupation"
                                className="form-control m-input"
                                type="text"
                                value="CTO"
                              />
                            </div>
                          </div>
                          <div className="form-group m-form__group row">
                            <label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                            >
                              Company Name
                            </label>
                            <div className="col-md-7">
                              <input
                                className="form-control m-input"
                                type="text"
                                value=""
                              />
                              <span className="m-form__help">
                                If you want your invoices addressed to a
                                company. Leave blank to use your full name.
                              </span>
                            </div>
                          </div>
                          <div className="form-group m-form__group row">
                            <label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                            >
                              Phone No.
                            </label>
                            <div className="col-md-7">
                              <input
                                className="form-control m-input"
                                type="text"
                                value="+456669067890"
                              />
                            </div>
                          </div>

                          <div className="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x" />

                          <div className="form-group m-form__group row">
                            <label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                            >
                              Address
                            </label>
                            <div className="col-md-7">
                              <input
                                className="form-control m-input"
                                type="text"
                                value="L-12-20 Vertex, Cybersquare"
                              />
                            </div>
                          </div>
                          <div className="form-group m-form__group row">
                            <label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                            >
                              City
                            </label>
                            <div className="col-md-7">
                              <input
                                className="form-control m-input"
                                type="text"
                                value="San Francisco"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="m-portlet__foot m-portlet__foot--fit">
                          <div className="m-form__actions">
                            <div className="row">
                              <div className="col-md-2" />
                              <div className="col-md-7">
                                <button
                                  type="reset"
                                  className="btn btn-primary m-btn m-btn--air m-btn--custom"
                                >
                                  Save changes
                                </button>&nbsp;&nbsp;
                                <button
                                  type="reset"
                                  className="btn btn-secondary m-btn m-btn--air m-btn--custom"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ContentContainer>
          </div>
          <FooterAdmin />
        </div>
      </div>
    );
  }
}

export default AdminGiftpage;
