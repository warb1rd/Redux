import React, { Component } from 'react';

class SearchBar extends Component {

	state={
		term: ""
	}
	//Event object describes the context/info about the event that occured
	//Can get access to the value of the input
	onInputChange(event){															
		this.setState({
			term: event.target.value
		})
	}

	render(){
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={this.onInputChange.bind(this)}/>
				
			</div>
		)
	}

}

export default SearchBar;