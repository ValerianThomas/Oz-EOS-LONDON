import React, { Component } from 'react';

import setTemplate from "../eos/setTemplate";
import getAllTemplates from "../eos/getAllTemplates";

import setPermissions from "../eos/setPermissions";

import accounts from "../eos/accounts";

import findPermByUserAndClient from "../eos/findPermByUserAndClient";
import findPermsByUser from "../eos/findPermsByUser";

// Index component
class Index extends Component {

  async componentDidMount(){
    let result = await setTemplate(0, {name: "facebook", body: [
      {name: "personnal", description: "personnal information", permissions: [
        {name: "getUsername", description: "fetch your username", state: 0}
      ]}
    ]})
    result = await setPermissions(1, accounts[0].name, [
      {name: "personnal", description: "personnal information", permissions: [
        {name: "getUsername", description: "fetch your username", state: 1}
      ]}
    ])
  }

  render() {

    return (
      <div>
        <p>hello</p>
      </div>
    );
  }

}

export default Index;
