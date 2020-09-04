import React from 'react';

const VideoDetatil=({video})=>{
    if(! video){
        return <div>Loading...</div>
    }
    return <div>{video.snippet.title}</div>
};

export default VideoDetatil;