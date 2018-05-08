import React, { Component } from "react";

class ContentInner extends Component {
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
                <h3 className="m-portlet__head-text">
                  Bảng {this.props.title}
                </h3>
              </div>
            </div>
          </div>
          <div className="m-portlet__body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default ContentInner;
