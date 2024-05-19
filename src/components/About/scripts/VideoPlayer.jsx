import { useState, useRef, useEffect } from 'react';

import "./video.css"

import videoTrailer from "../../../assets/videos/Voltron_ Legendary Defender _ Official Trailer [HD] _ Netflix.mp4"

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const videoRef = useRef(null);
  const controlsRef = useRef(null);
  const videoContainerRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedData = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const toggleFullScreenMode = () => {
    const video = videoRef.current;

    if (!isFullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    setIsMuted(!isMuted);
    video.muted = !video.muted;
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    const newVolume = e.target.value;
    setVolume(newVolume);
    video.volume = newVolume;
    video.muted = newVolume === 0;
    setIsMuted(newVolume === 0);
  };

  const formatDuration = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const targetLinkYoutube = () => {
    alert("oi")
  }

  return (
    <div className="container-main mt-5" ref={videoContainerRef}>
      <div>
        <div className={`video-container ${isPlaying ? '' : 'paused'}`} data-volume-level={isMuted ? 'muted' : (volume >= 0.5 ? 'high' : 'low')}>
          <video
            ref={videoRef}
            id="video-player"
            src={videoTrailer}
            type="video/mp4"
            onClick={togglePlay}
          ></video>
          <div ref={controlsRef} className="video-controls-container">
            <button className="play-pause-btn" onClick={togglePlay}>
              <i className={`play-icon fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            <div className="volume-container">
              <button className="mute-btn" onClick={toggleMute}>
                <i className={`fa-solid ${isMuted ? 'fa-volume-off' : (volume >= 0.5 ? 'fa-volume-high' : 'fa-volume-low')}`}></i>
              </button>
              <input className="volume-slider" type="range" min="0" max="1" step="any" value={volume} onChange={handleVolumeChange} />
            </div>
            <div className="duration-container">
              <div className="current-time">{formatDuration(currentTime)}</div>
              /<div className="total-time">{formatDuration(duration)}</div>
            </div>
            <button className="full-screen-btn" onClick={toggleFullScreenMode}>
              <i className="fa-solid fa-expand"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer






