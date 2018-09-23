import React from 'react'
import {Link, Redirect} from "react-router-dom";
import _ from "lodash"

import accounts from "../eos/accounts";

import findPermByUserAndClient from "../eos/findPermByUserAndClient";

import CategoryList from './../components/CategoryList';
import SideBar from '../components/sideBar/SideBar';
import HeaderCompany from './../components/header/HeaderCompany';
import PermissionList from './../components/PermissionList';


import setTemplate from "../eos/setTemplate";
import setPermissions from "../eos/setPermissions";


export default class Permissions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: undefined,
            body: undefined,
            selectedCategory: 0,
        };
    }

    async componentDidMount(){

        let result = await setTemplate(1, {name: "facebook", body: [
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

        this.setState((prev) => {return {...prev, loading: true}});
        try{
            let permissions = await findPermByUserAndClient(accounts[0].name, this.props.client || accounts[1].name);
            console.log(permissions);
            this.setState((prev) => {return {...prev, loading: false, body: permissions}});
        }catch(err){
            this.setState((prev) => {return {...prev, loading: false, error: err}});
        }
    }

    onChange(categoryIndex, permissionIndex){
        this.setState((prev) => {
            return {...prev, body: {...prev.body, categories: 
                prev.body.categories.map((category, cIndex) => {
                    if(cIndex !== categoryIndex){
                        return category;
                    }//else
                    return { ...category, permissions: category.permissions.map((permission, pIndex) => {
                        if(pIndex !== permissionIndex){
                            return permission;
                        }//else
                        return {...permission, state: permission.state === 0 ? 1 : 0}
                    })}
                })
            }}
        })
    }

    render() {
        return this.state.body ?  (
            <div className="category-content">
                <div className="row">

                        <SideBar />
                        <CategoryList categories={this.state.body.categories} onSelect={(index) => { this.setState((prev) => {return { ...prev, selectedCategory: index}}) }} />
                        <div className="container-wrapper col-lg">
                            <HeaderCompany />
                            {
                                this.state.body && this.state.body.categories.length > 0 ?
                                <PermissionList permissions={this.state.body.categories[this.state.selectedCategory].permissions}
                                                handleChange={(permId) => { this.onChange(this.state.selectedCategory, permId) }} /> :
                                null
                            }
                        </div>
                </div>
            </div>
        ) : null
    }
}