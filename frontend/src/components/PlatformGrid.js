import React from 'react';
import {Link, Redirect} from "react-router-dom";


export default class PlatformGrid extends React.Component{
	render(){
		return(
				<div className="row platformRow">
					{this.props.data.map((item, index) => (
						<div className="col-4 platformItem" key={index}>
								<Link to={"/permissions/"+item.client} style={{flexDirection: "column", flex: 1, display: "flex", alignItems: "center"}}>
									<img src={item.picture} style={{ height: 100, width:100 }} />
									<h4>{item.client_name}</h4>
								</Link>
						</div>
					))}
				</div>
			)
	}

}