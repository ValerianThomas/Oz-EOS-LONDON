import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TemplateGenerator from "./screens/Permissions";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={TemplateGenerator}/>
                </Switch>
            </Router>
        )
    }

}

export default App
