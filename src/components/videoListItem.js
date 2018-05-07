import React from 'react';

//Pulling multiple properties off of props object, es6.
const VideoListItem = ({video, onVideoSelect}) => {									
		// const video = props.video  - {video} replaces all of this
		const imageUrl = video.snippet.thumbnails.default.url

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
		<div className="video-list media">
			<div className="media-left">
				<img alt="thumbnail" className="media-object" src={imageUrl}/>
			</div>		
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>
		</div>

		</li>
  )
}

export default VideoListItem