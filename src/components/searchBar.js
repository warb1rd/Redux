import React, { Component } from 'react';

class SearchBar extends Component {

	state={
		term: ""
	}
	//Event object describes the context/info about the event that occured
	//Can get access to the value of the input
	onInputChange(term){															
		this.setState({term})
		this.props.onSearchTermChange(term)
	}

	render(){
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}/>		
			</div>
		)
	}

}

export default SearchBar;