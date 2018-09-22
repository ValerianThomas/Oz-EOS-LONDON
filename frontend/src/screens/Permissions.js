import React from 'react'
import {Link, Redirect} from "react-router-dom";
import _ from "lodash"

import accounts from "../eos/accounts";

import findPermByUserAndClient from "../eos/findPermByUserAndClient";

export default class Permissions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: undefined,
            body: [],
        };
    }

    async componentDidMount(){
        this.setState((prev) => {...prev, loading: true});
        try{
            let permissions = await findPermByUserAndClient(accounts[0].name, this.props.client);
            this.setState((prev) => {...prev, loading: false, body: permissions});
        }catch(err){
            this.setState((prev) => {...prev, loading; false, error: err});
        }
    }

    render() {
        console.log(this.state);
        return (
            <p>Permissions</p>
        )
    }
}