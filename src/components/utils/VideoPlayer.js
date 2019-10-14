import React from 'react';

function VideoPlayer({style = {}, video = {}}) {
  return(
    <video style={style} controls autoPlay>
      <source src={video.url} format={video.format} />
    </video>
  )
}

export default VideoPlayer
