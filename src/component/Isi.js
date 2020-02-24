import React, { Component } from 'react';
import { data } from './Data';
import Navbar from './navbar';
import './Isi.css';

class Isi extends Component {
	constructor(props){
		super(props);
		this.state = { datas: [] }
	}

	componentDidMount(){
		const id = this.props.match.params.id
		const jadi = data.filter(dataBaru => dataBaru.id == id);
			this.setState ({ datas: jadi });
	}

	render(){
		return(
			<div>
    			<Navbar />
			<div>
				{
					this.state.datas.map(params => {
						return(
							<div  className="isi">
								<h1>{params.title}</h1>
								<p>{params.author}</p>
								<h4>{params.pubDate}</h4>
								<img src={params.thumbnail} />	
							</div>
						)
					})
				}
			</div>
			</div>
		)
	}
}

export default Isi;