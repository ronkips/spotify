import React from "react";
import style from "../styles/Collections.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MyCollectionButton from "./MyCollectionButton";
import likesButton from "@/Likesbutton";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Mousewheel } from "swiper";
import Image from "next/image";
import { pagination } from "swiper";

const Collections = () => {
  const items = [
    {
      pic: "/Rectangle 26.svg",
      title: "Limits",
      subtitle: "John watts"
    },
    {
      pic: "/Rectangle 27.svg",
      title: "Limits",
      subtitle: "John watts"
    },
    {
      pic: "/Rectangle 28.svg",
      title: "Limits",
      subtitle: "John watts"
    },
    {
      pic: "/Rectangle 28.svg",
      title: "Limits",
      subtitle: "John watts"
    },
    {
      pic: "/Rectangle 28.svg",
      title: "Limits",
      subtitle: "John watts"
    },
    {
      pic: "/Rectangle 28.svg",
      title: "Limits",
      subtitle: "John watts"
    },
    {
      pic: "/Rectangle 29.svg",
      title: "Limits",
      subtitle: "John watts"
    }
  ];

  return (
    <div className={style.container}>
      <div className={style.Collections}>
        <Navbar />
        <Sidebar />
        <div className={style.cbutton}>My collection</div>
        <div className={style.lbutton}>Likes</div>
        <div className={style.ccontainer}>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
            // navigation
            // pagination={true}
            mousewheel
            slidesPerView={4}
            spaceBetween={2}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            // scrollbar={{ draggable:true }}
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index} className={style.containeritems}>
                  <Image
                    className={style.containerpic}
                    src={item.pic}
                    alt="music pic"
                    width={213}
                    height={254}
                  />
                  <span className={style.containertitle}>{item.title}</span>
                  <span className={style.containersub_title}>John watts</span>
                </SwiperSlide>
              );
            })}

          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Collections;
