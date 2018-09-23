import React from 'react';
import {Link, Redirect} from "react-router-dom";


export default class PlatformGrid extends React.Component{
	render(){
		return(
				<div>
					{this.props.data.map((item, index) => (
						<Link to={"/permissions/"+item.client} key={index}>{item.client_name}</Link>
					))}
				</div>
			)
	}

}