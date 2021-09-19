import React from 'react';
import './VideoItem.css'

const VideoItem = ({video , onSelectedVideo}) => {
    return (
        <div className='item video-item' onClick={onSelectedVideo.bind(this,video)}>
        
        <img  className="ui image" src={video.snippet.thumbnails.medium.url}/>    
        <div className="content">
        <div className="header">
        {video.snippet.title}
        </div>
        
        </div>
            
        </div>
    );
}

export default VideoItem;