import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <video className="w-full h-full aspect-square" autoPlay={true} loop muted>
        <source src="/recordplayer.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeos em HTML5.
      </video>
    </div>
  );
};

export default VideoPlayer;