import React from "react";
import style from "../../styles/Footer.module.css";
import VolumeUp from "@mui/icons-material/VolumeUp";



const Button = ({ play, isPlaying }) => {
  return (
    <div className={style.btnContainer}>
      <div onClick={play} className={isPlaying ? "btn_stop" : "btn_play"} />
    </div>
  );
};

export default Button;
