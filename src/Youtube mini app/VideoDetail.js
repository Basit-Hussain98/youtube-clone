import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (

        <section> 
        
        <div className="ui embed ">
        <iframe width="560" height="315" src={videoSrc} ></iframe>
        </div>
               <div className='ui segment' >

        <h4 className="header">{video.snippet.title}</h4> 
        <p>{video.snippet.description}</p>   
        </div>
        </section>

    );
}

export default VideoDetail;
