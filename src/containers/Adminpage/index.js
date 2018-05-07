import React, { Component } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import FooterAdmin from "../../components/FooterAdmin";
import AsideMenu from "../../components/AsideMenu";
import ContentContainer from "../../components/ContentContainer";
import ContentInner from "../../components/ContentInner";

class Adminpage extends Component {
  render() {
    return (
      <div className="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-light m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default m-scroll-top--shown">
        <div className="m-grid m-grid--hor m-grid--root m-page">
          <HeaderAdmin />
          <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <AsideMenu />
            <ContentContainer title={"Danh sách quà tặng"}>
              <ContentInner />
            </ContentContainer>
          </div>
          <FooterAdmin />
        </div>
      </div>
    );
  }
}

export default Adminpage;
