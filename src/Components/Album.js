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
          height={288.97}
        />
        <Navbar />
        <Sidebar />
        <Image
          className={style.pic}
          src="/aimage.png"
          alt="home"
          width={284}
          height={100}
        />
        <div className={style.acontainer}>
          <span className={style.h2}>Tomorrow’s tunes</span>
          <span className={style.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </span>
          <div className={style.atimeline}>64 songs ~ 16 hrs+</div>
        </div>
        <div className={style.abutton}>
          <div className={style.abutton1}>
            <button>
              <Image src="/Play.svg" alt="play" width={13.33} height={13.33} />
            </button>
            <span className={style.abutton1i}>Play all</span>
          </div>
          <div className={style.abutton2}>
            <button>
              <Image
                src="/music.svg"
                alt="music"
                width={13.33}
                height={13.33}
              />
            </button>
            <span className={style.abutton2i}>Add to collection</span>
          </div>
          <div className={style.abutton3}>
            <button>
              <Image src="/roho.svg" alt="heart" width={13.33} height={12.67} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
