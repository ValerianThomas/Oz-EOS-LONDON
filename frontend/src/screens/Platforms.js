import React from 'react'
import PlatformGrid from '../components/PlatformGrid'
import getAllTemplates from "../eos/getAllTemplates";
import findPermsByUser from "../eos/findPermsByUser";

export default class Platforms extends React.Component {

	constructor(props){
        super(props);
        this.state = {
            loading: false,
            error: undefined,
            avaible: [],
            trusted: [],
        }
    }

    async componentDidMount(){
        this.setState((prev) => { return {...prev, loading: true } });
        try{
            let all = await getAllTemplates();
            all = all.rows;
            let used = await findPermsByUser(0);
            used = used.rows;
            let avaible = all.filter((elem) => {
                return !((used.map((it) => { return it.prim_key }).includes(elem.prim_key)))
            });
            this.setState((prev) => { return {...prev, loading: false, avaible: avaible, trusted: used} });
        }catch(err){
            this.setState((prev) => { return {...prev, loading: false, error: err} })
        }
    }

	render(){
		console.log(this.state)
		return(
			<div className="PlatformsWrapper">
				<PlatformGrid data={this.state.avaible.concat(this.state.trusted)}/>
			</div>
			)
	}
}