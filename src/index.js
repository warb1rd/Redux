import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './config_keys.js';
import SearchBar from './components/searchBar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList.js'																												

class App extends Component{																				//Component produces HTML 
	constructor(props){
		super(props)
		this.state={
			videos: []
		}

		YTSearch({key: API_KEY, term: "surfboards"}, (apiData)=>{
			this.setState({
				videos: apiData
			})
		})
	}


	render(){
		return (
      <div>
        <SearchBar />
				<VideoList videos={this.state.videos} />
      </div>  
    )                                     													//jsx gets transpiled to vanilla js
	}
}

// Take the generated HTML and put in on the page in the DOM
ReactDOM.render(<App />, document.getElementById('root'));

