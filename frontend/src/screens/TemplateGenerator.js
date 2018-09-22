import React from 'react'
import {Link, Redirect} from "react-router-dom";
import _ from "lodash"

class TemplateGenerator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            permissions: {},
            permission: "",
            description: "",
            currentCategoryName: "",
            category: ""
        };
    }

    addPermisson() {
        this.addElementToCategory(
            this.currentCategoryName,
            this.state.permission,
            this.state.description
        )
        this.setState({permission: ""})
        this.setState({description: ""})
    }

    createCategory() {
        let permissions = this.state.permissions;
        permissions[this.state.category] = {}
        this.setState({permissions})
        this.setState({currentCategoryName: this.state.category})
        console.log(this.state);
    }

    addPermissionToCategory() {
        let permissions = this.state.permissions
        _.assign(permissions[this.state.currentCategoryName], {
            [this.state.permissions]: {
                status: false,
                descrption: this.state.description
            }
        })
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
                            <h4 className={"text-muted"}>Desccription</h4>
                            <input type="password"
                                   className={"form-control mb-4"}
                                   value={this.state.escription}
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
                </div>
            </div>
        )
    }
}

export default TemplateGenerator