import React from 'react'
import PlatformGrid from '../components/PlatformGrid'
import getAllTemplates from "../eos/getAllTemplates";
import findPermsByUser from "../eos/findPermsByUser";

import accounts from "../eos/accounts"

import NavBar from "../components/navBar";

export default class Platforms extends React.Component {

	constructor(props){
        super(props);
        this.state = {
            loading: false,
            error: undefined,
            avaible: [],
            trusted: [],
            actView: "myPlatform",
        }
    }

    async componentDidMount(){
        this.setState((prev) => { return {...prev, loading: true } });
        try{
            let all = await getAllTemplates();
            all = all.rows;
            let used = await findPermsByUser(0);
            used = used.rows;
            let usedIds = used.map((elem) => {return elem.client});
            let avaible = all.filter((elem) => {
                return !(usedIds.includes(elem.client));
            });
            this.setState((prev) => { return {...prev, loading: false, avaible: avaible, trusted: used} });
        }catch(err){
            this.setState((prev) => { return {...prev, loading: false, error: err} })
        }
    }

    switchTab(newTab){
    	this.setState((prev) => {
    		return {
    			...prev,
    			actView: newTab,
    		}
    	})
    }

	render(){
		let gridData = this.state.actView === "myPlatform" ? this.state.trusted : this.state.avaible;

		return(
			<div>
				<NavBar />
				<ul className="nav nav-tabs">
				  <li className="nav-item">
				  	{
				  		this.state.actView === "myPlatform" ?
				    	<a onClick={this.switchTab.bind(this, "myPlatform")} className="nav-link active" href="#">My platform</a> :
				    	<a onClick={this.switchTab.bind(this, "myPlatform")} className="nav-link" href="#">My platform</a>
				  	}
				  </li>
				  <li className="nav-item">
				    {
				  		this.state.actView !== "myPlatform" ?
				    	<a onClick={this.switchTab.bind(this, "discover")} className="nav-link active" href="#">Discover</a> :
				    	<a onClick={this.switchTab.bind(this, "discover")} className="nav-link" href="#">Discover</a>
				  	}
				  </li>
				</ul>
				<div className="PlatformsWrapper">
					<PlatformGrid data={gridData}/>
				</div>
			</div>
			)
	}
}