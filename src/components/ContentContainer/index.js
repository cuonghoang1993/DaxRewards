import React, { Component } from 'react';

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='m-grid--item m-grid--item--fluid m-wrapper'>
        <div className='m-subheader'>
          <div className='d-flex align-items-center'>
            <h3 className="m-subheader--title ">{this.props.title}</h3>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ContentContainer;
