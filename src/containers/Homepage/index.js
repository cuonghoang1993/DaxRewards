import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GrabFixer from "../../images/grab-auto-green-fixer.png";
import GrabRetail from "../../images/grab-green-retail.png";
import GrabHealth from "../../images/grab-health-green.png";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      modal: ""
    };
  }

  openModal(e, modalName) {
    e.preventDefault();
    document.body.classList.add("modal-open");
    this.setState({ modal: modalName });
  }

  closeModal() {
    this.setState({ modal: "" });
  }

  render() {
    if (this.state.modal === "") {
      document.body.classList.remove("modal-open");
    }

    return (
      <div className="index">
        <Header />
        <section className="bg-light-gray">
          <div
            className="row"
            style={{
              paddingBottom: "20px"
            }}
          >
            <div className="row partner-tile-section">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div
                  className="row"
                  style={{
                    paddingTop: "20px"
                  }}
                >
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-34")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/34/digi.PNG"
                              alt="Digi"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Digi - RM100 Rebates &amp; Free Fuel
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabRetail} alt="Online retail green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-45")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/45/texas_chicken_logo-230x120px-01.jpg"
                              alt="Texas chicken logo 230x120px 01"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">Texas Chicken</p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabRetail} alt="Online retail green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-46")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/46/iflix.PNG"
                              alt="Iflix"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Up to 9 months Free Subscription
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                &nbsp;
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabHealth} alt="Travel v2 green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-35")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/35/Picture8.jpg"
                              alt="Picture8"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                KLM City Auto - Up to 12% Off
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-36")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/36/Wiches_logo.jpeg"
                              alt="Wiches logo"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Wiches Grab &amp; Go - 10% Off
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabRetail} alt="Online retail green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-37")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/37/Picture7.png"
                              alt="Picture7"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Akina Tyre - Up to 15% Off
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-38")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/38/1.png"
                              alt="1"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">DMK Auto Spa Car Wash</p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-39")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/39/logo.jpg"
                              alt="Logo"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Crystal Kool - Up to 40% Off
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-40")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/40/Picture9.png"
                              alt="Picture9"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">GSH Tyre - Up to 15% Off</p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-41")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/41/Picture10.jpg"
                              alt="Picture10"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">S_titude Hair Studio</p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabHealth} alt="Travel v2 green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-42")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/42/Your_Physio_logo.jpg"
                              alt="Your physio logo"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Your Physio- Free Check up
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabHealth} alt="Health green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-43")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/43/Picture11.png"
                              alt="Picture11"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Car Exterior Wash from RM5
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-44")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="ribbon-wrapper">
                          <div className="ribbon">NEW!</div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/44/SP_HUAT.png"
                              alt="Sp huat"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">SP Huat- Up to 10% Off</p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-27")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/27/logo-colour-1500pix.jpg"
                              alt="Logo colour 1500pix"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                Subsidized Medical Treatment
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabHealth} alt="Health green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-25")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/25/dc86c6b5-b840-4056-a6cb-c219cdd7e138_dark.png"
                              alt="Dc86c6b5 b840 4056 a6cb c219cdd7e138 dark"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">
                                PETRONAS Syntium Lubricants from RM96
                              </p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-28")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/28/ASB_jpeg_2.jpg"
                              alt="Asb jpeg 2"
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">Buy 1 Free 1</p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabHealth} alt="Travel v2 green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href=""
                    onClick={e => this.openModal(e, "partnerSilverModal-4")}
                  >
                    <div
                      className="col-md-3 col-xs-6 padding-card"
                      style={{
                        padding: "0px 2.5px 10px 2.5px"
                      }}
                    >
                      <div className="partner-card">
                        <div className="row">
                          <div className="col-md-12 col-xs-12 card-image-container">
                            <img
                              src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/4/Petron_Engine_Oils__Petron_Font_CAPS_.jpg"
                              alt="Petron engine oils  petron font caps "
                            />
                          </div>
                          <div className="col-md-10 col-xs-10 card-description-container">
                            <div className="card-container">
                              <p className="brand">Up to 30% Discount</p>
                              <div
                                style={{
                                  color: "grey"
                                }}
                              >
                                <i>selected cities only</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-xs-2 card-icon-container">
                            <img src={GrabFixer} alt="Grab auto green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
          <div
            id="partnerSilverModal-34"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-34" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/34/digi.PNG"
                    alt="Digi"
                  />
                  <h2 className="partner-name">
                    Digi - RM100 Rebates &amp; Free Fuel
                  </h2>
                  <p />
                  <p>
                    Calling all Driver-Partners! Enjoy exclusive rebates of up
                    to&nbsp;<b>RM100</b>&nbsp;when you sign up for selected Digi
                    Postpaid plans!&nbsp;<br />
                  </p>
                  <div>
                    What's more, receive a&nbsp;<b>
                      RM50 PETRONAS Fuel Gift Card
                    </b>
                    <span>
                      &nbsp;for your refuelling needs!<br />
                    </span>
                    <br />Click 'Get Rewards Here' now to retrieve your Coupon
                    Codes!&nbsp;
                  </div>
                  <p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-45"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-45" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/45/texas_chicken_logo-230x120px-01.jpg"
                    alt="Texas chicken logo 230x120px 01"
                  />
                  <h2 className="partner-name">Texas Chicken</h2>
                  <p />
                  <p />
                  <h3>
                    <b>
                      <span className="wysiwyg-color-green">
                        Up to 10% Off on Combo Meals
                      </span>
                    </b>
                  </h3>Founded in San Antonio, Texas, USA in 1952, Texas Chicken
                  is a highly recognized brand name in the Quick Service
                  Restaurant sector and is one of the largest quick service
                  chicken concepts in the world. Texas Chicken serves up freshly
                  prepared, high quality, authentic American Southern styled
                  fare, to provide customers with value-for-money, complete meal
                  options. The Texas Chicken menu includes flavorful chicken
                  both Original and Spicy, crispy tenders strips, burgers and
                  wraps, classic side dishes and hand-made from scratch
                  honey-butter biscuits.<p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-46"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-46" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/46/iflix.PNG"
                    alt="Iflix"
                  />
                  <h2 className="partner-name">
                    Up to 9 months Free Subscription
                  </h2>
                  <p />
                  <p>
                    <span>
                      <span>
                        Grab is happy to announce that we've partnered
                        with&nbsp;iflix&nbsp;to bring you your favourite shows
                        and movies for&nbsp;
                        <b>FREE</b>!<br />
                        <br />All Silver, Gold, Platinum GrabAllStars
                        driver-partners can now redeem&nbsp;<b>
                          FREE&nbsp;
                        </b>iflix subscription as a reward on the GrabAllStars
                        platform.
                        <br />
                        <br />To know more, refer below:&nbsp;
                      </span>
                      <br />&nbsp;
                    </span>
                    <span>
                      <img
                        width="493"
                        alt=""
                        src="https://gallery.mailchimp.com/6f36643e8f5bd7ed79f99d646/images/f3d5d8bb-6d99-45f5-949b-d2b901ea2246.png"
                      />
                      <br />
                      <br />Click 'Get Rewards Here' to redeem your iflix
                      subscription now!&nbsp;
                    </span>
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-35"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-35" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/35/Picture8.jpg"
                    alt="Picture8"
                  />
                  <h2 className="partner-name">
                    KLM City Auto - Up to 12% Off
                  </h2>
                  <p />
                  <p>
                    <b>
                      <span className="wysiwyg-color-green">
                        Available in Penang ONLY
                      </span>
                    </b>
                    <br />
                    Up to 12% off Tyre change and up to 10% off Engine Oil
                    change<br />
                    <br />
                    Offer Location: Kulim ONLY (available on weekdays only)<br />
                    <br />
                    <b>Tyre Change</b>
                    <b>&nbsp;</b>
                    <br />
                    12% offer for listed tyre and brands (Installation and
                    balancing cost included)<br />
                    GST not included &nbsp;&nbsp;<br />
                    <br />
                    <b>Engine Oil change</b>
                    <b>&nbsp;</b>
                    <br />
                    Up to 10% offer for engine oil change (Oil filter and
                    service labor cost included)&nbsp;<br />
                    <br />
                    <a href="https://www.facebook.com/KLMCATSB/">
                      <b>here</b>
                      to visit KLM City Auto Tyres facebook page
                      <br />
                    </a>
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-36"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-36" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/36/Wiches_logo.jpeg"
                    alt="Wiches logo"
                  />
                  <h2 className="partner-name">
                    Wiches Grab &amp; Go - 10% Off
                  </h2>
                  <p />
                  <p />
                  <div>
                    <b>
                      <span className="wysiwyg-color-green">
                        Available in Penang ONLY
                      </span>
                    </b>
                  </div>Nestled within Bandar Bayan Bar's Suntech area, Wiches
                  Grab &amp; Go fills bellies with sandwiches and assorted
                  Western dishes made fresh daily.&nbsp;You will find fusion of
                  Asian and Western flavours, such as Vietnamese chicken pasta,
                  truffle oil with ebiko pasta, green curry chicken with
                  rice.&nbsp;<br />
                  <br />The must try is their signature is the freshly grilled
                  sandwiches, best to fill your belly and get fully charged for
                  the next job!<br />
                  <br />If you are a coffee lover, this is the place! As they
                  serve freshly brew coffee!<br />
                  <br />Click&nbsp;<a href="https://web.facebook.com/WichesFood/">
                    <b>here</b>
                  </a>
                  <b>&nbsp;</b>to visit Wiches facebook page and 'Get Rewards
                  Here' below to redeem your discount!&nbsp;<br />
                  <p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-37"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-37" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/37/Picture7.png"
                    alt="Picture7"
                  />
                  <h2 className="partner-name">Akina Tyre - Up to 15% Off</h2>
                  <p />
                  <p>
                    <b>
                      <span className="wysiwyg-color-green">
                        Available in Penang ONLY
                      </span>
                    </b>
                    <br />Car tyre is the most crucial parts for safety of
                    driving.&nbsp;<br />Therefore, always get your tyre checked
                    and monitor by the experts!&nbsp;<br />
                    <br />Akina Tyre Snd Bhd was established in 1999 and with
                    these years of hard work they have climbed to become the
                    major tyre service provider in Mainland Penang market.&nbsp;<br />They
                    offer a comprehensive range of products and tyre services<br />
                    <br />Akina Tyre Sdn Bhd is now offering discounted price
                    for tyre service, car service and battery service, ONLY for
                    Grab Driver-Partners!&nbsp;<br />
                    <br />Click&nbsp;
                    <a href="https://web.facebook.com/akinatyrehq/">
                      <b>here</b>
                    </a>&nbsp;to visit Akina Tyre Facebook Page and 'Get Rewards
                    Here' below to redeem the discount!&nbsp;<br />
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-38"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-38" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/38/1.png"
                    alt="1"
                  />
                  <h2 className="partner-name">DMK Auto Spa Car Wash</h2>
                  <p />
                  <p>
                    <span className="wysiwyg-color-green">
                      <b>Available in Penang ONLY</b>
                    </span>
                    <br />To be a 5-Star driver-partner and ensure the best
                    rating for car cleanliness from passengers, make sure your
                    car is always squeaky clean!<br />DMK Auto Spa Car Wash is
                    offering a special rate just for our Driver-Partners!&nbsp;<br />
                    <br />Click&nbsp;<a href="https://web.facebook.com/dmk.autospa">
                      <b>here</b>
                    </a>
                    <b>&nbsp;</b>to visit DMK Autospa Facebook Page and Click
                    'Get Rewards Here' below to redeem your discount!<br />
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-39"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-39" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/39/logo.jpg"
                    alt="Logo"
                  />
                  <h2 className="partner-name">Crystal Kool - Up to 40% Off</h2>
                  <p />
                  <p>
                    <span className="wysiwyg-color-green">
                      <b>Available in Penang ONLY</b>
                    </span>
                    <br />Crystal Kool is offering discount specially for our
                    Driver-Partners!<br />Crystal Kool is the tinted specialist
                    in Penang island that provides the best quality tinted
                    service.&nbsp;<br />
                    <br />30% Off on CRYSTAL series, INCREDIBLE series, SOLAR
                    series, PREMIER series<br />40% Off on IR BLACK series,
                    SILVER series, DIAMOND BLACK series<br />
                    <br />Click
                    <a>here</a>
                    to visit Crystal Kool Facebook page and Click 'Get Rewards
                    Here' below to redeem your discount!
                  </p>
                  <div />
                  <p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-40"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-40" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/40/Picture9.png"
                    alt="Picture9"
                  />
                  <h2 className="partner-name">GSH Tyre - Up to 15% Off</h2>
                  <p />
                  <p>
                    <b>
                      <span className="wysiwyg-color-green">
                        Available in Penang ONLY
                      </span>
                    </b>
                    <br />Car tyre is the most crucial parts for safety of
                    driving.&nbsp;<br />
                    <span>
                      Therefore, always get your tyre checked and monitor by the
                      experts!&nbsp;<br />
                    </span>
                    <br />Goh Swee Hin (Komtar) has been operating for over 65
                    years, building trust and reputation over the years to
                    become the no.1 trusted tyre provider in Penang.&nbsp;<br />They
                    offer a comprehensive range of products and tyre services,
                    designed for performance, safety and reliability.&nbsp;<br />
                    <br />Goh Swee Hin (Komtar) is now giving a discounted price
                    for tyre service, car service and battery service, ONLY for
                    Grab Driver-Partners!&nbsp;<br />
                    <br />Click&nbsp;<a href="https://web.facebook.com/Goh-Swee-Hin-Komtar-596344630573574/">
                      <b>here</b>
                    </a>&nbsp;to visit Goh Swee Hin (Komtar) Facebook Page and
                    Click 'Get Rewards Here' below to redeem the discount!<br />
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-41"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-41" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/41/Picture10.jpg"
                    alt="Picture10"
                  />
                  <h2 className="partner-name">S_titude Hair Studio</h2>
                  <p />
                  <p>
                    Need a haircut? Visit S_titude Hair Studio to get the best
                    look!<br />
                    <br />S_titude Hair Studio is offering Haircut + Wash and
                    Haircut + Wash + Dye to all Grab Driver-Partners at a
                    discounted price!<br />
                    <br />Click&nbsp;<a href="https://www.facebook.com/StitudeHairStudio/">
                      <b>here</b>
                    </a>
                    <b>&nbsp;</b>to visit S_titude Hair Studio Facebook Page
                    and&nbsp;Click 'Get Rewards Here' below to redeem the
                    discount!
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-42"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-42" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/42/Your_Physio_logo.jpg"
                    alt="Your physio logo"
                  />
                  <h2 className="partner-name">Your Physio- Free Check up</h2>
                  <p />
                  <p>
                    <span className="wysiwyg-color-green">
                      <b>Available in Penang ONLY&nbsp;</b>
                    </span>
                    <br />Having neck pain or backache after long hours of
                    driving?&nbsp;<br />Just visit Your Physio and have a free
                    check up worth
                    <b>RM80</b>!&nbsp;<br />
                    <br />If necessary, Grab Driver-Partners are entitled to
                    <b>50%</b>
                    discount on treatments.&nbsp;<br />More to add, the clinic
                    is just next to Grab Driver Centre in Penang!<br />
                    <br />Click&nbsp;<a href="https://www.facebook.com/yourphysiopng/">
                      <b>here</b>
                    </a>&nbsp;to visit Your Physio Facebook Page and&nbsp;Click
                    'Get Rewards Here' below to redeem the discount!
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-43"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-43" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/43/Picture11.png"
                    alt="Picture11"
                  />
                  <h2 className="partner-name">Car Exterior Wash from RM5</h2>
                  <p />
                  <p>
                    <b>
                      <span className="wysiwyg-color-green">
                        Available in Penang ONLY
                      </span>
                    </b>
                    <br />A fast and quality assured car wash service for those
                    who are in a rush.<br />Quick and quality car wash by
                    Rainforest Car Care Centre ensures all Grab Driver-Partners'
                    cars are squeaky clean and ready for the next booking!&nbsp;<br />
                    <br />Click&nbsp;<a href="https://www.facebook.com/RAINFORESTCCC/">
                      <b>here</b>
                    </a>
                    <b>&nbsp;</b>to visit Rainforest Car Care Centre Facebook
                    page and&nbsp;&nbsp;Click 'Get Rewards Here' below to redeem
                    the discount!
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-44"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-44" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/44/SP_HUAT.png"
                    alt="Sp huat"
                  />
                  <h2 className="partner-name">SP Huat- Up to 10% Off</h2>
                  <p />
                  <p>
                    Up 10% Exclusive Grab Auto Discounts for All
                    Driver-Partners!<br />Located at Lebuh Macallum, Penang is
                    the car aircond repair and service workshop which has been
                    operating for the 3rd generation of the family, and was
                    building its reliable and friendly service reputation since
                    then.&nbsp;<br />
                    <br />Click 'Get Rewards Here' below to redeem the discount!<br />
                  </p>
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-27"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-27" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/27/logo-colour-1500pix.jpg"
                    alt="Logo colour 1500pix"
                  />
                  <h2 className="partner-name">Subsidized Medical Treatment</h2>
                  <p />
                  <p>
                    <span>
                      Enjoy subsidized medical treatment as a Grabber!&nbsp;<br />
                      <br />We understand that the rising medical cost can be
                      burdensome.&nbsp;<br />Hence,&nbsp;<b>
                        <span className="wysiwyg-color-green">Grab</span>
                      </b>&nbsp;is partnering with&nbsp;<b>
                        <span className="wysiwyg-color-green">
                          Lourdes Group of Clinics&nbsp;
                        </span>
                      </b>and&nbsp;<b>
                        <span className="wysiwyg-color-green">
                          Lourdes Medical Centre&nbsp;
                        </span>
                      </b>to bring you cheaper consultation and medication.
                    </span>
                  </p>
                  <ul>
                    <br />
                    <li>
                      Consultation and Medication of Common Illnesses*:&nbsp;<b>
                        RM35 nett per visit
                      </b>
                      <br />
                    </li>
                    <br />
                    <li>
                      Injections / Laboratory tests / X-rays / ECG
                      (Electrocardiogram):&nbsp;<b>10% discount</b>
                      <br />
                    </li>
                    <br />
                    <li>
                      Hospitalization at Lourdes Medical Centre:&nbsp;<b>
                        10% discount
                      </b>&nbsp;
                    </li>
                    <br />
                  </ul>Common illnesses*:&nbsp;Fever, Pharyngitis / Sore Throat,
                  Cough &amp; Cold,&nbsp;Food Poisoning, Diarrhea,
                  Headaches.&nbsp;Valid only for doctor's prescribed medicine.
                  Cost of medicine which are not included in&nbsp;doctor's
                  prescription will be borned by Grabber.&nbsp;<p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-25"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-25" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/25/dc86c6b5-b840-4056-a6cb-c219cdd7e138_dark.png"
                    alt="Dc86c6b5 b840 4056 a6cb c219cdd7e138 dark"
                  />
                  <h2 className="partner-name">
                    PETRONAS Syntium Lubricants from RM96
                  </h2>
                  <p />
                  <p />
                  <div>
                    <b>Enjoy exclusive Grab Auto packages as a Grabber!</b>
                  </div>
                  <span>
                    <br />You can now enjoy the same F1 winning formulate
                    performance through PETRONAS-GRAB Lubricants Programs at
                    selected PETRONAS appointed workshop with exclusive PETRONAS
                    Syntium Engine Oil packages!
                    <br />
                    <br />Mineral Oil Package - From RM96 onwards<br />Semi
                    Synthetic Oil Package - From RM148 onwards<br />Fully
                    Synthetic Oil Package - From RM249 onwards<br />*Price
                    inclusive of Engine Oil, Oil Filter &amp; Labor<br />
                    <br />Fight excessive engine heat with PETRONAS Syntium
                    today!
                    <div>
                      <br />
                    </div>
                  </span>
                  <p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-28"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-28" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/28/ASB_jpeg_2.jpg"
                    alt="Asb jpeg 2"
                  />
                  <h2 className="partner-name">Buy 1 Free 1</h2>
                  <p />
                  <p />
                  <div>
                    <b>Buy 1 Free 1 on Bowling Games at Ampang Superbowl</b>
                  </div>
                  <div>
                    <br />
                  </div>
                  <div>
                    You deserve a break! Spend some quality time with your
                    family and friends at Ampang Superbowl.
                  </div>
                  <p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="partnerSilverModal-4"
            className={`modal voucher-modal fade${
              this.state.modal === "partnerSilverModal-4" ? " in" : ""
            }`}
            role="dialog"
          >
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Redeem Voucher<button
                      type="button"
                      className="close"
                      onClick={() => this.closeModal()}
                    >
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                          fontSize: "23px"
                        }}
                      />
                    </button>
                  </h4>
                </div>
                <div
                  className="modal-body"
                  style={{
                    textAlign: "center"
                  }}
                >
                  <img
                    className="img-responsive"
                    height="100"
                    src="https://rails-starter-kit.s3.amazonaws.com/uploads/partner/logo/4/Petron_Engine_Oils__Petron_Font_CAPS_.jpg"
                    alt="Petron engine oils  petron font caps "
                  />
                  <h2 className="partner-name">Up to 30% Discount</h2>
                  <p />
                  <p />
                  <div>
                    <b>
                      Up to 30% Discount on exclusive Engine Oil Service
                      Package.<br />
                      <br />
                    </b>
                  </div>Special Engine Oil Change Package&nbsp;<br />Semi
                  Synthetic from RM108 onwards<br />Fully Synthetic from RM178
                  onwards<br />
                  <i>*All Inclusive Engine Oil, Oil Filter, Labor &amp; GST</i>
                  <p />
                  <p />
                  <a
                    className="btn btn-success btn-redemption"
                    style={{
                      textAlign: "center"
                    }}
                    data-method="get"
                    href="/redemption"
                  >
                    Get Rewards Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {this.state.modal !== "" && (
          <div
            onClick={() => this.setState({ modal: "" })}
            className="modal-backdrop fade in"
          />
        )}
      </div>
    );
  }
}

export default Homepage;
