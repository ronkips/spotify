import React from "react";
import style from "../styles/Footer.module.css";
import Image from "next/image";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillStepBackward } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import {RiRepeatOneFill} from "react-icons/ri"
const footer = () => {
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
      <div className={style.f_slider}></div>
      <div className={style.f_volume}></div>
      <div className={style.f_volumebutton}>
        <BsFillVolumeUpFill />
      </div>
      <div className={style.button_container}>
        <div className={style.footer_icon}>
          <BsFillVolumeUpFill width={16} height={16} />
        </div>
        <div className={style.footer_icon}>
          <AiFillStepBackward color="white" />
        </div>
        <div className={style.footer_icon}>
          <AiFillPlayCircle colorwhite />
        </div>
        <div className={style.footer_icon}>
          <AiFillStepForward color="white" />
        </div>
        <div className={style.footer_icon}>
          <RiRepeatOneFill color="white" />
        </div>
      </div>
    </div>
  );
};

export default footer;
