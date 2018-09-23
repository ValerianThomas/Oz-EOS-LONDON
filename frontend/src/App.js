import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TemplateGenerator from "./screens/TemplateGenerator";
import Platforms from './screens/Platforms'
import Permissions from "./screens/Permissions";

import accounts from "./eos/accounts";
import setTemplate from "./eos/setTemplate";
import setPermissions from "./eos/setPermissions";

class App extends React.Component {

    async componentDidMount(){
        let result = await setTemplate(0, {picture: "aaa", name: "facebook", body: [
          {name: "personnala", description: "personnal informatioan", permissions: [
            {name: "getUserndzadame", description: "fetch yozdazdur username", state: 0}
          ]},
          {name: "persoazdnnal2", description: "persoazdaznnal2 information", permissions: [
            {name: "getUseradzphon", description: "fetch azdazdayour userphon", state: 0}
          ]}
        ]})

        result = await setTemplate(1, {picture: "aaa", name: "facebook", body: [
          {name: "personnal", description: "personnal information", permissions: [
            {name: "getUsername", description: "fetch your username", state: 0}
          ]},
          {name: "personnal2", description: "personnal2 information", permissions: [
            {name: "getUserphon", description: "fetch your userphon", state: 0}
          ]}
        ]})

        result = await setPermissions(0, accounts[1].name, [
          {name: "personnal", description: "personnal information", permissions: [
            {name: "getUsername", description: "fetch your username", state: 1}
          ]}
            ,
          {name: "personnal2", description: "personnal2 information", permissions: [
            {name: "getUserphon", description: "fetch your userphon", state: 0}
          ]}
        ])


    }

    render() {
        return (
            <Router>
            	<Switch>
                    <Route path='/templateGenerator' component={TemplateGenerator}/>
                    <Route path='/permissions/:client' component={Permissions}/>
                    <Route path='/' component={Platforms}/>
            	</Switch>
            </Router>
                    
        )
    }

}

export default App
