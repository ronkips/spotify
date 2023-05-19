import React from "react";
import style from "../../styles/Footer.module.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Play = () => {
  return (
    <div className={style.footerplay}>
      <AiFillPlayCircle
        color="#FACD66"
        box-shadow="0px 0px 18px rgba(255, 255, 255, 0.3)"
      />
    </div>
  );
};

export default Play;
