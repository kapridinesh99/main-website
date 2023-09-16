import React from 'react'
import './JoinUs.css'
import YouTube from 'react-youtube';

function VideoPlayer() {
  const videoId = 'vi_jn_4JfgE';

  const opts = {
    height: '360',
    width: '100%',
    playerVars: {
      autoplay: 1, 
    },
  };

  return (
    <article>
        <YouTube videoId={videoId} opts={opts} />
    </article>
  )
}

export default VideoPlayer