import React from "react";
import style from "../styles/Home.module.css";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Image
        className={style.logo}
        src="/logo.svg"
        width={18}
        height={18}
        alt="logo"
      />
      <div className={style.side_parent}></div>
      <div className={style.side_personal}></div>
    </div>
  );
};

export default Sidebar;
