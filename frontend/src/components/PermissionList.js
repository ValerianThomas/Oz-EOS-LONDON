import React, { Component } from 'react'
import Switch from "react-switch";

export default class PermissionList extends Component {
  constructor(props){
    super(props);
    this.state ={
      permissions:[

        {
          "id":1,
          "permissionTitle": "Persona Data",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae.",
          "checked": true
        },
        {  
          "id":2,
          "permissionTitle": "Processing",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae.",
          "checked": false
        },
        {
          "id":3,
          "permissionTitle": "Right of access",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae.",
          "checked": false
        },
        {
          "id":4,
          "permissionTitle": "data erasure",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae.",
          "checked": true
        }
        
      ] 
    }
  }
  render() {
    const {permissions}= this.state
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
