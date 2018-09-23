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
        let result = await setTemplate(0, {picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png", name: "facebook", body: [
          {name: "personnala", description: "personnal informatioan", permissions: [
            {name: "getUserndzadame", description: "fetch yozdazdur username", state: 0}
          ]},
          {name: "persoazdnnal2", description: "persoazdaznnal2 information", permissions: [
            {name: "getUseradzphon", description: "fetch azdazdayour userphon", state: 0}
          ]}
        ]})

        console.log(result);

        result = await setTemplate(1, {picture: "https://a.slack-edge.com/ae7f/img/services/twitter_512.png", name: "twitter", body: [
          {name: "personnal", description: "personnal information", permissions: [
            {name: "getUsername", description: "fetch your username", state: 0}
          ]},
          {name: "personnal2", description: "personnal2 information", permissions: [
            {name: "getUserphon", description: "fetch your userphon", state: 0}
          ]}
        ]})

        console.log(result);

        result = await setTemplate(2, {picture: "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p200x200/29244385_2118857225012944_2202035917412106240_n.png?_nc_cat=106&oh=0a181040f883376ad131ad2496e7d63f&oe=5C287754", name: "bumkin", body: [
          {name: "personnal", description: "personnal information", permissions: [
            {name: "getUsername", description: "fetch your username", state: 0}
          ]},
          {name: "personnal2", description: "personnal2 information", permissions: [
            {name: "getUserphon", description: "fetch your userphon", state: 0}
          ]}
        ]})

        console.log(result);

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
