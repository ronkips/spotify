import React from "react";
import style from "../styles/Album.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Image from "next/image";
import pic from "../../public/music.svg";
import icon from "../../public/Heart.png";
import menu from "../../public/icon.svg";

const Album = () => {
  const albums = [
    {
      image: pic,
      icon: icon,
      title: "Closa ~ Ybee ",
      time: "4:17",
      genre: "Obi datti",
      menu: menu
    },
    {
      image: pic,
      time: "4:17",
      icon: icon,
      title: "Closa ~ Ybee ",
      genre: "Obi datti",
      menu: menu
    },
    {
      image: pic,
      time: "4:17",
      icon: icon,
      title: "Closa ~ Ybee ",
      genre: "Obi datti",
      menu: menu
    },
    {
      image: pic,
      time: "4:17",
      icon: icon,
      title: "Closa ~ Ybee ",
      genre: "Obi datti",
      menu: menu
    },
    {
      image: pic,
      time: "4:17",
      icon: icon,
      title: "Closa ~ Ybee ",
      genre: "Obi datti",
      menu: menu
    }
  ];

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
        {/* music sectiom */}
        <div className={style.music_container}>
          {/* <div className={style.music_inside}> */}
          {albums.map((item, index) => {
            return (
              <div className={style.music_inside} key={index}>
                <div className={style.inside}>
                  <Image
                    className={style.inside1}
                    src={item.image}
                    alt="music"
                    width={13.33}
                    height={13.33}
                  />
                  <Image
                    className={style.inside2}
                    src={item.icon}
                    alt="music"
                    width={13.33}
                    height={13.33}
                  />
                  <span className={style.inside3}>{item.title}</span>
                  <span className={style.inside4}>{item.genre}</span>
                  <span className={style.inside5}>{item.time}</span>
                  <Image
                    className={style.inside_icon}
                    src={item.menu}
                    alt="music"
                    width={13.33}
                    height={13.33}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Album;
