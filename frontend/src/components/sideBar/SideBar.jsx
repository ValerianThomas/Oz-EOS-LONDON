import React, { Component } from 'react'

 class SideBar extends Component {
  render() {
    return (
      <div className="sideBar col-xs-1">
        <div className="profil_image">
          <img src="http://tinygraphs.com/squares/helloworld" alt="" className="avatar"/>
        </div>
      </div>
    )
  }
}
export default SideBar;