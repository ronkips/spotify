import React from "react";
import style from "../styles/Collections.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MyCollectionButton from "./MyCollectionButton";

import { Mousewheel } from "swiper";
import Image from "next/image";

const Collections = () => {
  const items = [
    {
      pic: "/Rectangle 26.svg",
      title: "John watts",
      subtitle: "Hello"
    },
    {
      pic: "/Rectangle 27.svg",
      title: "John Watts",
      subtitle: "Hello"
    },
    {
      pic: "/Rectangle 28.svg",
      title: "John Watts",
      subtitle: "Hello"
    }
    // {
    //   pic: "/Rectangle 28.svg",
    //   title: "John Watts"
    // },
    // {
    //   pic: "/Rectangle 28.svg",
    //   title: "John Watts",
    //   subtitle: "Hello"
    // },
    // {
    //   pic: "/Rectangle 28.svg",
    //   title: "John Watts",
    //   subtitle: "Hello"
    // },
    // {
    //   pic: "/Rectangle 29.svg",
    //   title: "John Wattts",
    //   subtitle: "Hello"
    // }
  ];

  return (
    <div className={style.container}>
      <div className={style.Collections}>
        <Navbar />
        <Sidebar />
        <div className={style.cbutton}>My collection</div>
        <div className={style.lbutton}>Likes</div>
        <div className={style.ccontainer}>
          {/* {items.map((item, index) => {
            return (
              <div className={style.containeritems} key={index}>
                <Image
                  className={style.containerpic}
                  src={item.pic}
                  alt="music pic"
                  width={153}
                  height={153}
                />
                <span className={style.containertitle}>{item.title}</span>
                <span className={style.containersub_title}>hello world</span>
              </div>
            );
          })} */}
          <div className={style.containeritems}>
            <Image
              className={style.containerpic}
              src="/Rectangle 26.svg"
              alt="music pic"
              width={213}
              height={234}
            />
            <span className={style.containertitle}>hello world</span>
            <span className={style.containersub_title}>hello world</span>
          </div>{" "}
          <div className={style.containeritems}>
            <Image
              className={style.containerpic}
              src="/Rectangle 26.svg"
              alt="music pic"
              width={213}
              height={234}
            />
            <span className={style.containertitle}>hello world</span>
            <span className={style.containersub_title}>hello world</span>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Collections;
