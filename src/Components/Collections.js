import React from "react";
import style from "../styles/Collections.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MyCollectionButton from "./MyCollectionButton";
import likesButton from "@/Likesbutton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
    // {
    //   pic: "/Rectangle 28.svg",
    //   title: "John Watts",
    //   subtitle: "Hello"

    // }, {
    //   pic: "/Rectangle 28.svg",
    //   title: "John Watts",
    // }, {
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
  ]

  return (
    <div className={style.container}>
      <div className={style.Collections}>

        <Navbar />
        <Sidebar />
        <div className={style.cbutton}>My collection</div>
        <div className={style.lbutton}>Likes</div>
        <div className={style.ccontainer}>
          {/* <div className={style.containeritems}>
            <Swiper
              modules={[Mousewheel]}
              slidesPerView={4}
              spaceBetween={30}
              mousewheel={true}
              direction={"horizontal"}
            // scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={style.containerpic}>
                      <Image
                        className={style.containeritems}
                        src={item.pic}
                        alt="music pic"
                        width={213}
                        height={254}
                      />
                      <span className={style.containertitle}>{item.title}</span>
                      <span className={style.containersub_title}>{item.subtitle}</span>

                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div> */}
          <div className={style.containeritems}>
            <div classname={style.containerpic}>

              <Image
                src="/Rectangle 26.svg"
                alt="music pic"
                width={213}
                height={254}
              />
              <span className={style.containertitle}>hello world</span>
              <span className={style.containersub_title}>hello world</span>

            </div>
          </div>
        </div>

        {/* <MyCollectionButton /> */}
        {/* Add MyCollectionButton component here */}
        {/* <Sidebar /> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Collections;

