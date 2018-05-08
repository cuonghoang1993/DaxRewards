import React, { Component } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

import HeaderAdmin from "../../components/HeaderAdmin";
import FooterAdmin from "../../components/FooterAdmin";
import AsideMenu from "../../components/AsideMenu";
import ContentContainer from "../../components/ContentContainer";
import ContentInner from "../../components/ContentInner";

class AdminGiftpage extends Component {
  constructor() {
    super();

    this.state = {
      startDate: moment(),
      endDate: moment().add(1, "days")
    };
  }

  render() {
    return (
      <div className="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-light m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default m-scroll-top--shown">
        <div className="m-grid m-grid--hor m-grid--root m-page">
          <HeaderAdmin />
          <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <AsideMenu />
            <ContentContainer title={"Danh mục quà tặng"}>
              <ContentInner title={"quà tặng"}>
                {/* begin: Search Form */}
                <div className="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
                  <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-xl-1">
                      <div className="form-group m-form__group row align-items-center">
                        <div className="col-md-11">
                          <div className="m-form__group m-form__group--inline">
                            <div className="m-form__label">
                              <label>Danh mục quà tặng:</label>
                            </div>
                            <DateRangePicker
                              startDate={this.state.startDate}
                              startDateId="your_unique_start_date_id"
                              endDate={this.state.endDate}
                              endDateId="your_unique_end_date_id"
                              onDatesChange={({ startDate, endDate }) =>
                                this.setState({ startDate, endDate })
                              }
                              focusedInput={this.state.focusedInput}
                              onFocusChange={focusedInput =>
                                this.setState({ focusedInput })
                              }
                            />
                          </div>
                          <div className="d-md-none m--margin-bottom-10" />
                        </div>
                        <div className="col-md-1">
                          <div className="m-form__group m-form__group--inline">
                            <div className="m-form__label" />
                            <div className="m-form__control" />
                          </div>
                          <div className="d-md-none m--margin-bottom-10" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 order-1 order-xl-2 m--align-right">
                      <a className="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                        <span>
                          <i className="fa fa-file" />
                          <span>Nhập file</span>
                        </span>
                      </a>
                      <div className="m-separator m-separator--dashed d-xl-none" />
                    </div>
                    <div className="col-lg-2 order-1 order-xl-2 m--align-right">
                      <a className="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                        <span>
                          <i className="fa fa-file" />
                          <span>Xuất file</span>
                        </span>
                      </a>
                      <div className="m-separator m-separator--dashed d-xl-none" />
                    </div>
                    <div className="col-lg-2 order-1 order-xl-2 m--align-right">
                      <a className="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                        <span>
                          <i className="fa fa-plus" />
                          <span>Thêm quà</span>
                        </span>
                      </a>
                      <div className="m-separator m-separator--dashed d-xl-none" />
                    </div>
                  </div>
                </div>
                {/* end: Search Form */}

                {/* begin: Datatable */}
                <div
                  className="m_datatable m-datatable m-datatable--default m-datatable--brand m-datatable--loaded"
                  id="ajax_data"
                />
                {/* end: Datatable */}
              </ContentInner>
            </ContentContainer>
          </div>
          <FooterAdmin />
        </div>
      </div>
    );
  }
}

export default AdminGiftpage;
