import React from "react";
import style from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Mousewheel } from "swiper";
// import "./Testimonial.css";
// import Footer from "./Footer";
const Home = () => {
  const items = [
    {
      pic: "/rk.png",
      title: "bubble"
    },
    {
      pic: "/rk.png",
      title: "maintain"
    },
    {
      pic: "/rk.png",
      title: "latest song"
    },
    {
      pic: "/rk.png",
      title: "latest song"
    },
    {
      pic: "/rk.png",
      title: "latest song"
    },
    {
      pic: "/Rectangle1.png",
      title: "latest song"
    },
    {
      pic: "/Rectangle1.png",
      title: "latest song"
    },
    {
      pic: "/Rectangle1.png",
      title: "sanze"
    }
  ];
  return (
    <div className={style.container}>
      <div className={style.home}>
        <Navbar />
        <Sidebar />
        <div className={style.hcontainer}>
          <Image
            className={style.vector}
            src="/Vector.svg"
            width={420}
            height={200}
            alt="vector"
          />
          <div className={style.hhead}>Currated playlist</div>
          <div className={style.hhead2}>R & B Hits</div>
          <div className={style.htitle}>
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </div>
          <Image
            className={style.esma}
            src="/Esma.png"
            width={343}
            height={521}
            alt="home"
          />
          <div className={style.likescontainer}>
            <Image
              className={style.heartlike}
              src="/heart.svg"
              width={13}
              height={13}
              alt="home"
            />
   
            <Image
              className={style.phot}
              src="/phot.png"
              width={20}
              height={20}
              alt="phot"
            />
            <div className={style.hlikes}>300 Likes</div>
          </div>
        </div>
        <div className={style.htitle2}>Top charts</div>
        <div className={style.hcontainer3}>
          <div className={style.hmusic}>
            <button>
              <Image
                className={style.rectangle17}
                src="/rec.png"
                width={63}
                height={63}
                alt="home"
              />
            </button>

            <span className={style.rectitle}>Golden age of 80s</span>
            <span className={style.recname}>Sean swadder</span>
            <div className={style.rectime}>2:34:45</div>
            <div className={style.reccircle}>
              <Image
                className={style.stroke}
                src="/stroke.svg"
                width={15}
                height={14}
                alt="love"
              />
            </div>
          </div>
          <div className={style.hmusic}>
            <Image
              className={style.rectangle17}
              src="/rec.png"
              width={63}
              height={63}
              alt="home"
            />
            <span className={style.rectitle}>Golden age of 80s</span>
            <span className={style.recname}>Sean swadder</span>
            <div className={style.rectime}>2:34:45</div>
            <div className={style.reccircle}>
              <Image
                className={style.stroke}
                src="/stroke.svg"
                width={15}
                height={14}
                alt="love"
              />
            </div>
          </div>
        </div>
        <div className={style.htitle3}>New releases.</div>
        <div className={style.hcategory}>
          <Swiper
            modules={[Mousewheel]}
            slidesPerView={7}
            spaceBetween={50}
            mousewheel={true}
            direction={"horizontal"}
            // scrollbar={{ draggable: true }}
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={style.hcategoryin}>
                    <Image
                      src={item.pic}
                      alt="music pic"
                      width={153}
                      height={153}
                    />
                    <span className={style.hcategoryintitle}>{item.title}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
