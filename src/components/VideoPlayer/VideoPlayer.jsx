import React, { useRef } from "react";
import "./videoPlayer.css";
import tech_video from "../../assets/vid.mp4";
// import { useEffect } from "react";
const VideoPlayer = ({ playVideo, setPlayVideo }) => {
  //   useEffect(() => {
  //     console.log(`this is the status of ${playVideo}`);
  //   }, [playVideo]);
  const player = useRef(null);
  function removeVideo(e) {
    if (e.target === player.current) {
      setPlayVideo(false);
    }
  }
  return (
    // <div className="video-player">
    <div
      className={`video-player ${playVideo ? "" : "hide"}`}
      ref={player}
      onClick={removeVideo}
    >
      <video src={tech_video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
