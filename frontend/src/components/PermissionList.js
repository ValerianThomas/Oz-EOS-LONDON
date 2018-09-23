import React, { Component } from 'react'
import Switch from "react-switch";

export default class PermissionList extends Component {
  
  render() {
    const {permissions}= this.props
    return (

      <div className="permission-container">
      { permissions.map((permission,index)=>(
        <div className="permission" key={index}>
        <div className="row-permission">
          <div className="permision-title">
            <h3>
              {permission.name}
            </h3>
          </div>
          <div className="permission-description">
            <p className="descrpition__inner__permission">
              {permission.description}
            </p>
          </div>
          <Switch 
          uncheckedIcon={false}
          onChange={() => {this.props.handleChange(index)}}
          checked={permission.state === 1}
          id="normal-switch"
          />
        </div>
        </div>
      ))}
      </div>
    )
  }
}
