import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , onSelectedVideo}) => {
    return (
        <div className='ui relaxed divided list container '>
            
            {
                videos.map(video => {
                    return <VideoItem onSelectedVideo={onSelectedVideo} video={video} key={video.id}/>
                })
            }
        </div>
    );
}

export default VideoList;
