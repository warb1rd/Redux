import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import API_KEY from './config_keys.js';
import SearchBar from './components/searchBar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList.js'																												
import VideoDetail from './components/videoDetail.js'																												
import './style/style.css'

class App extends Component{																				//Component produces HTML 
	constructor(props){
		super(props)

		this.state={
			videos: [],
			selectedVideo: null
		}	
		this.videoSearch("surfboards")
	}

		videoSearch(term){
				YTSearch({key: API_KEY, term: term}, (apiData)=>{
				this.setState({
				videos: apiData,
				selectedVideo: apiData[0]
			})
		})
		}

	render(){
		const videoSearch=_.debounce((term) => {this.videoSearch(term)}, 300)					// it'll call the videoSearch once every 300ms
		return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
      </div>  
    )                                     																				//jsx gets transpiled to vanilla js
	}
}

// Take the generated HTML and put in on the page in the DOM
ReactDOM.render(<App />, document.getElementById('root'));

