import React from 'react';
import VideoListItem from './videoListItem.js'

const VideoList = (props) => {

    const videoItems = props.videos.map((v) => {
				return( 
					<VideoListItem 
						onVideoSelect={props.onVideoSelect}
						key={v.etag} 
						video={v} />
				)
    })
    return (
				<ul className="col-md-4 list-group">
					{videoItems}
				</ul>
    )
}

export default VideoList;