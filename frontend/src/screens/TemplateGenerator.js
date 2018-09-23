import React from 'react'
import {Link, Redirect} from "react-router-dom";
import _ from "lodash"

import setTemplate from "../eos/setTemplate";

import accounts from "../eos/accounts";

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

    async saveTemplate() {
        setTemplate(0, this.props.client, this.state.permissions)
    }

    createCategory() {
        let permissions = this.state.permissions;
        let exists = false

        permissions.categories.map(category => {

            if (category.name === this.state.category) {
                exists = true
                this.setState({currentCategoryName: this.state.category})
            }
        });

        if (exists == false && this.state.category !== "") {
            permissions.categories.push({
                name: this.state.category,
                description: this.state.categoryDescription,
                permissions: []
            })
            this.setState({permissions})
            this.setState({currentCategoryName: this.state.category})
            console.log(this.state);
        }
    }

    addPermissionToCategory() {
        let permissions = this.state.permissions
        permissions.categories.map(category => {
            if (category.name === this.state.currentCategoryName) {
                category.permissions.push({
                    name: this.state.permission,
                    status: 0,
                    description: this.state.description,
                })
            }
        });

        this.setState({permissions})
        console.log(this.state);
    }


    renderPermissions(categories, index) {
        if (categories[index].permissions) {
            if (categories[index].permissions.length > 0) {
                return categories[index].permissions.map(
                    (perm, index) =>
                        (<div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                              data-parent="#accordion">
                            <div className="card-body">
                                <div>{perm.name}</div>
                            </div>
                        </div>)
                )
            }
        }
    }

    renderTemplate() {
        let permissions = this.state.permissions
        if (permissions.categories.length > 0) {
            return permissions.categories.map((cat, index) => (
                <div class="card ">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                <div>{cat.name}</div>
                            </button>
                        </h5>
                    </div>
                    {this.renderPermissions(permissions.categories, index)}
                </div>
            ))
        }
        else
            return (<div></div>)
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className={"col-4 col-sm-3 p-4 col-template"}>
                        <div className={"template-col-title"}>
                            <h2 className={"mb-4"}>Create a template</h2>
                        </div>
                        <form>
                            <div>
                                <h5 className={"text-muted"}>Category</h5>
                                <input type="text"
                                       placeholder=""
                                       className={"form-control mb-2"}
                                       value={this.state.category}
                                       onChange={ev => this.setState({category: ev.target.value})}
                                       required
                                />
                                <button
                                    className={"btn btn-link col-12 mb-4 text-left"}
                                    onClick={() => this.createCategory()}>+ Create a new category
                                </button>
                            </div>
                            <h5 className={"text-muted"}>Permission title</h5>
                            <div className={""}>
                                <div>
                                    <input type="email"
                                           placeholder=""
                                           className={"form-control mb-2"}
                                           value={this.state.permission}
                                           onChange={ev => this.setState({permission: ev.target.value})}
                                           required
                                    />
                                </div>
                                <div>
                                    <h5 className={"text-muted"}>Permission description</h5>
                                    <input type="text"
                                           className={"form-control mb-2 inputTemplate"}
                                           value={this.state.description}
                                           onChange={ev => this.setState({description: ev.target.value})}
                                           required
                                    />
                                </div>
                            </div>
                            <button
                                className={"btn btn-link col-12 mb-4 text-left"}
                                onClick={() => this.addPermissionToCategory()}>+ Add permission
                                to curent category
                            </button>
                        </form>

                        <button
                            className={"btn text-light col-12 mt-4 btnSuccess"}
                            onClick={() => this.saveTemplate()}>Save my template
                        </button>
                    </div>
                    <div className={"col-5 mt-4"}>
                        <div id="accordion">
                            {this.renderTemplate()}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default TemplateGenerator