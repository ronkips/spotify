import React from "react";
import style from "../../styles/Footer.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons";
import Play from "./Play";

const Button = ({ play, isPlaying }) => {
  return (
    <div className={style.btnContainer}>
      <div onClick={play} className={isPlaying ? "btn_stop" : "btn_play"} />
    </div>
  );
};

export default Button;
