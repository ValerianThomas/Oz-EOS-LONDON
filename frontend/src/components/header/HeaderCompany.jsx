import React, { Component } from 'react'

 class HeaderCompany extends Component {
  render() {
    return (
      <div className="header-company ">
          <div className="company-name">
          <img src="" alt=""/>
              <h2>{this.props.client_name}</h2>

          </div>
          <div className="head-title">
            <h3>Right of Acces</h3>
          </div>
          <div className="head-text">
            <p>
            Categories of data processed (e.g., name, address, online browsing behavior)
            Any third party recipients of this personal data, both backward or forward looking, especially recipients in third countries (i.e. countries outside of the EU)            
            </p>
          </div>
          </div>
    )
  }
}
export default HeaderCompany;