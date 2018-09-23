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
          <div className="permision-title col-2">
            <h3>
              {permission.name}
            </h3>
          </div>
          <div className="permission-description col-5 col-offset-1">
            <p className="descrpition__inner__permission">
              {permission.description}
            </p>
          </div>
          <div className="col-2">
            <Switch 
            uncheckedIcon={false}
            onChange={() => {this.props.handleChange(index)}}
            checked={permission.state === 1}
            id="normal-switch"
            />
          </div>
        </div>
        </div>
      ))}
      </div>
    )
  }
}
