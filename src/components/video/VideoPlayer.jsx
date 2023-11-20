import React, { useRef } from 'react';
import tw from 'twin.macro';


const VideoContainer = tw.div` w-full py-2 h-full`
const Video = tw.video`w-full h-full top-0 left-0`
const VideoPlayer = ({ src, width, height, className }) => {
  
  return (
    <VideoContainer>
      <Video autoPlay={true} muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default VideoPlayer;
