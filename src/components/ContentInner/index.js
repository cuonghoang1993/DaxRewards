import React, { Component } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ContentInner extends Component {
  constructor() {
    super();
    this.state = {
      startDate: Date.now(),
      endDate: Date.now()
    };
  }

  render() {
    return (
      <div className="m-content">
        {/* <div className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible m--margin-bottom-30" role="alert">
                    <div className="m-alert__icon">
                        <i className="flaticon-exclamation m--font-primary"></i>
                    </div>
                </div> */}

        <div className="m-portlet m-portlet--mobile">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <h3 className="m-portlet__head-text">Bảng quà tặng</h3>
              </div>
            </div>
          </div>
          <div className="m-portlet__body">
            {/* begin: Search Form */}
            <div className="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
              <div className="row align-items-center">
                <div className="col-xl-8 order-2 order-xl-1">
                  <div className="form-group m-form__group row align-items-center">
                    <div className="col-md-4">
                      <div className="m-form__group m-form__group--inline">
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
                        <div className="m-form__label">
                          <label>Status:</label>
                        </div>
                        <div className="m-form__control" />
                      </div>
                      <div className="d-md-none m--margin-bottom-10" />
                    </div>
                    <div className="col-md-4">
                      <div className="m-form__group m-form__group--inline">
                        <div className="m-form__label">
                          <label className="m-label m-label--single">
                            Type:
                          </label>
                        </div>
                        <div className="m-form__control" />
                      </div>
                      <div className="d-md-none m--margin-bottom-10" />
                    </div>
                    <div className="col-md-4" />
                  </div>
                </div>
                <div className="col-xl-4 order-1 order-xl-2 m--align-right">
                  <a className="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                    <span>
                      <i className="fa fa-plus" />
                      <span>New Order</span>
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
          </div>
        </div>
      </div>
    );
  }
}

export default ContentInner;
