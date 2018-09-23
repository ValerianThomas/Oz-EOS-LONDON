import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TemplateGenerator from "./pages/index";
import Platforms from './screens/Platforms'

class App extends React.Component {

    render() {
        return (
            <Router>
            	<Switch>
            		<Route exact path='/' component={TemplateGenerator}/>
                    <Route path='/platforms' component={Platforms}/>
            	</Switch>
            </Router>
                    
        )
    }

}

export default App
