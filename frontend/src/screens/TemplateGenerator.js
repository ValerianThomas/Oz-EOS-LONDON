import React from 'react'
import {Link, Redirect} from "react-router-dom";
import _ from "lodash"

class TemplateGenerator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            permissions: {
                client: "",
                description: "",
                categories: []
            },
            permission: "",
            description: "",
            currentCategoryName: "",
            category: "",
            categoryDescription: ""
        }
    }

    saveTemplate() {

    }

    createCategory() {
        let permissions = this.state.permissions;
        permissions.categories.push({
            name: this.state.category,
            description: this.state.categoryDescription,
            permissions: []
        })
        this.setState({permissions})
        this.setState({currentCategoryName: this.state.category})
        console.log(this.state);
    }


    addPermissionToCategory() {
        console.log(this.state);
        let permissions = this.state.permissions
        console.log("ok", permissions.categories);
        console.log(typeof(permissions.categories));
        permissions.categories.map(category => {
            if (category.name === this.state.currentCategoryName) {
                category.permissions.push({
                    name: this.state.permission,
                    status: false,
                    description: this.state.description
                })
            }
        });

        this.setState({permissions})
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: 'white',
                        width: '40%',
                        padding: '32px',
                        margin: '100px auto 0px',
                        justifyContent: 'center',
                        maxWidth: '400px',
                        minWidth: '280px',
                        borderRadius: '5px'
                    }}>
                    <div>
                        <h1 className={"mb-4"}>Create my template</h1>
                    </div>
                    <form>
                        <div>
                            <h4 className={"text-muted"}>Category</h4>
                            <input type="email"
                                   placeholder=""
                                   className={"form-control mb-2"}
                                   value={this.state.category}
                                   onChange={ev => this.setState({category: ev.target.value})}
                                   required
                            />

                        </div>
                        <div>
                            <h4 className={"text-muted"}>Permission</h4>
                            <input type="email"
                                   placeholder=""
                                   className={"form-control mb-2"}
                                   value={this.state.permission}
                                   onChange={ev => this.setState({permission: ev.target.value})}
                                   required
                            />

                        </div>
                        <div>
                            <h4 className={"text-muted"}>Description</h4>
                            <input type="text"
                                   className={"form-control mb-4"}
                                   value={this.state.description}
                                   onChange={ev => this.setState({description: ev.target.value})}
                                   required
                            />
                        </div>
                    </form>
                    <button
                        className={"btn btn-dark col-12 mb-2"}
                        onClick={() => console.log(this.state)}>log state
                    </button>
                    <button
                        className={"btn btn-dark col-12 mb-2"}
                        onClick={() => this.addPermissionToCategory()}>addPermission
                    </button>
                    <button
                        className={"btn btn-dark col-12 mb-2"}
                        onClick={() => this.createCategory()}>createCategory
                    </button>
                    <button
                        className={"btn btn-dark col-12 mb-2"}
                        onClick={() => this.saveTemplate()}>sauver mon template
                    </button>
                </div>
                {/*<div>
                    {this.state.permissions.map( el => {

                    })}
                </div>*/}
            </div>
        )
    }
}

export default TemplateGenerator