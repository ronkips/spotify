import React from "react";
import style from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={style.sidebar}>
      <Image
        className={style.logo}
        src="/logo.svg"
        width={18}
        height={18}
        alt="logo"
      />

      <div className={style.side_parent}>
          <Image
            className={style.icon}
            src="/Hom.svg"
            width={22}
            height={22}
            alt="home"
          />
        <Image
          className={style.icon}
          src="/playlist.svg"
          width={18}
          height={18}
          alt="home"
        />

        <Image
          className={style.icon}
          src="/radio.png"
          width={18}
          height={18}
          alt="home"
        />
        <Image
          className={style.icon}
          src="/video.png"
          width={18}
          height={18}
          alt="home"
        />
      </div>
      <div className={style.side_personal}>
        <Image
          className={style.icon}
          src="/frame.svg"
          width={18}
          height={18}
          alt="home"
        />
        <Image
          className={style.icon}
          src="/Logout.svg"
          width={18}
          height={18}
          alt="home"
        />
      </div>
    </div>
  );
};

export default Sidebar;
