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
      title: "John watts"
    },
    {
      pic: "/Rectangle 27.svg",
      title: "John Watts"
    },
    {
      pic: "/Rectangle 28.svg",
      title: "John Watts"
    },  {
      pic: "/Rectangle 28.svg",
      title: "John Watts"
    },  {
      pic: "/Rectangle 28.svg",
      title: "John Watts"
    },
    {
      pic: "/Rectangle 28.svg",
      title: "John Watts"
    },
    {
      pic: "/Rectangle 29.svg",
      title: "John Wattts"
    }
  ]
  
  return (
    <div className={style.container}>
      <div className={style.Collections}>
      
      <Navbar />
      <Sidebar />
      <div className={style.cbutton}>My collection</div>
      <div className={style.lbutton}>Likes</div>
      <div className={style.ccontainer}>
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
      <div className={style.containeritems}>
        <Image
          src={item.pic}
          alt="music pic"
          width={213}
          height={254}
        />
        {/* <span className={style.hcategoryintitle}>{item.title}</span> */}
      </div>
    </SwiperSlide>
  );
})}
</Swiper>
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

