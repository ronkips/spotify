import React, { useState, useRef } from "react";
import style from "../styles/Footer.module.css";
import Image from "next/image";

import Slider from "./Slider";
import ControlPanel from "./Control/ControlPanel";
// import Play from "./Control/Play";
import Volume from "./volume";
const Footer = () => {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // using useRef
  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    // audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };
  const forward = () => {
    const audio = audioRef.current;
    const newTime = audio.currentTime + 10; // Forward by 10 seconds
    if (newTime < audio.duration) {
      audio.currentTime = newTime;
      setCurrentTime(newTime.toFixed(2));
      setPercentage((newTime / audio.duration) * 100);
    }
  };

  const geCurrentDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);

    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className={style.footer}>
      <Image
        className={style.footer_image}
        src="/face.svg"
        alt="album"
        width={49}
        height={49}
      />

      <div className={style.f_title}>Seasons in</div>
      <div className={style.f_subtitle}>James</div>
      {/* <div className={style.f_slider}></div> */}
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={geCurrentDuration}
        onLoadedData={(e) => {
          setDuration(e.target.duration.toFixed(2));
        }}
        src="/musiki.mp3"
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
        forward={forward}
      />
      {/* <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      /> */}
      {/* <div className={style.next}>
        <Image src="/next.svg" width={16} height={16} alt="see you" />
      </div> */}
      <div className={style.f_volumebutton}>
        <Volume />
      </div>
    </div>
  );
};

export default Footer;
