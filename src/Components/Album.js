import React from "react";
import style from "../styles/Album.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Album = () => {
  return (
    <div className={style.container}>
      <div className={style.album}>
        <Image
          className={style.background}
          src="/background.png"
          alt="home"
          width={1300}
          height={100}
        />
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
};

export default Album;
