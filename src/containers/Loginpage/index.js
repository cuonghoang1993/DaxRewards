import React, { Component } from "react";

class Loginpage extends Component {
  render() {
    return (
      <div className="user-auth">
        <div className="container">
          <div id="banner">
            <div className="intro-text">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className="panel panel-default panel-driver">
                    <div className="panel-heading">Log In</div>
                    <div className="panel-body">
                      <div
                        className="simple_form user"
                        acceptCharset="UTF-8"
                        method="post"
                      >
                        <input name="utf8" type="hidden" value="✓" />
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="fWBj9RM8dH1IYkLw9M41rMH9jpc2sNjsvbLHmw8/Kw1CcMzM5xTpsRSE7m6PlYo6bLKMgS7lPX/kquCmN/Kc8g=="
                        />
                        <div className="form-group col-md-12">
                          <div className="form-group password required grab_id">
                            <label
                              className="control-label password required"
                              htmlFor="grab_id"
                              style={{ border: "none", color: "#4b4b4b" }}
                            >
                              <abbr title="required">*</abbr> Grab ID
                            </label>
                            <input
                              className="form-control password required"
                              type="password"
                              name="grab_id"
                              id="grab_id"
                            />
                          </div>
                          <div className="form-group password required user_id">
                            <label
                              className="control-label password required"
                              htmlFor="user_password"
                              style={{ border: "none", color: "#4b4b4b" }}
                            >
                              <abbr title="required">*</abbr> CMND
                            </label>
                            <input
                              className="form-control password required"
                              type="password"
                              name="user_id"
                              id="user_id"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-xs-12">
                            <input
                              type="submit"
                              name="commit"
                              value="Log in"
                              className="btn btn-success"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
