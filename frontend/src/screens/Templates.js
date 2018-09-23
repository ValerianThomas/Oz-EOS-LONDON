import React from 'react'
import {Link, Redirect} from "react-router-dom";
import _ from "lodash"

import getAllTemplates from "../eos/getAllTemplates";
import findPermsByUser from "../eos/findPermsByUser";

class Templates extends React.Component {

    

    render() {
        console.log(this.state)
        return (
            <p>hello</p>
        )
    }
}

export default Templates