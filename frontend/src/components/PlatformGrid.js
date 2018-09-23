import React from 'react';

const data = [{client_name:"Coca-cola"},{client_name:"Coca-cola"},{client_name:"Coca-cola"}]
export default class PlatformGrid extends React.Component{
	render(){
		return(
				<div>
					{data.map(item => (<p>{item.client_name}</p>))}
				</div>
			)
	}

}