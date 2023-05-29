import React from "react";
import style from "../../styles/Footer.module.css";
import { CiShuffle } from "react-icons/ci";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillStepBackward } from "react-icons/ai";
import { BsRepeat } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";

const Button = ({ play, isPlaying }) => {
  return (
    <div className={style.btnContainer}>
      <CiShuffle />
      <AiFillStepBackward />
      <div onClick={play} className={isPlaying ? "btn_stop" : "btn_play"} />
      <AiFillStepForward />
      <BsRepeat />
    </div>
  );
};

export default Button;
