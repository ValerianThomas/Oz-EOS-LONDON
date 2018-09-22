import React, { Component } from 'react'
import Switch from "react-switch";



export default class Permission extends Component {
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
    this.handleChange = this.handleChange.bind(this);
  }
      handleChange(checked) {
        this.setState({ checked });
      }
  render() {
    const {permissions}= this.state
    console.log(permissions)
    
    return (

      <div className="permission-container">
      { permissions.map((permissions,index)=>(
        <div className="permission" key={index}>
        <div className="row-permission">
          <div className="permision-title">
            <h3>
              {permissions.permissionTitle}
            </h3>
          </div>
          <div className="permission-description">
            <p className="descrpition__inner__permission">
              {permissions.description}
            </p>
          </div>
          <Switch 
          uncheckedIcon={false}
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
          />
        </div>
        </div>
      ))}
      </div>
    )
  }
}
