import React from "react";
import style from "../../src/styles/Home.module.css";
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

// import { motion } from "framer-motion";

const Home = () => {
  const items = [
    {
      pic: "/rk.png",
      title: "bubble",
      subtitle: "The Van"
    },
    {
      pic: "/rk.png",
      title: "maintain",
      subtitle: "The Van"
    },
    {
      pic: "/rk.png",
      title: "latest song",
      subtitle: "The Van"
    },
    {
      pic: "/rk.png",
      title: "latest song",
      subtitle: "Krisx"
    },
    {
      pic: "/rk.png",
      title: "latest song",
      subtitle: "The Van"
    },
    {
      pic: "/Rectangle1.png",
      title: "latest song",
      subtitle: "The Van"
    },
    {
      pic: "/Rectangle1.png",
      title: "latest song",
      subtitle: "The Van"
    },
    {
      pic: "/Rectangle1.png",
      title: "sanze",
      subtitle: "The Van"
    }
  ];

  const myItems = [
    {
      recPic: "/rec.png",
      recTitle: "Golden age of 80s",
      recName: "sean Swadder",
      recTime: "2:34:45",
      recCircle: "/stroke.svg"
    },
    {
      recPic: "/rec.png",
      recTitle: "Raggae n blue",
      recName: "DJ YK",
      recTime: "2:24:45",
      recCircle: "/stroke.svg"
    },
    {
      recPic: "/rec.png",
      recTitle: "Tommorrow's tune",
      recName: "Obi datti",
      recTime: "2:04:45",
      recCircle: "/stroke.svg"
    },
    {
      recPic: "/rec.png",
      recTitle: "Golden age of 80s",
      recName: "sean Swadder",
      recTime: "2:34:45",
      recCircle: "/stroke.svg"
    }
  ];

  // const InfiniteAnimation = () => {
  //   return (
  //     <div style={{ overflow: "hidden" }}>
  //       <motion.div
  //         animate={{ x: "-100%" }}
  //         transition={{
  //           duration: 10,
  //           ease: "linear",
  //           repeat: Infinity,
  //           repeatType: "loop",
  //           repeatDelay: 0
  //         }}
  //       >
  //         {items.map((item, index) => {
  //           return (
  //             <SwiperSlide key={index}>
  //               <div className={style.hcategoryin}>
  //                 <Image
  //                   src={item.pic}
  //                   alt="music pic"
  //                   width={153}
  //                   height={153}
  //                 />
  //                 <span className={style.hcategoryintitle}>{item.title}</span>
  //                 <span className={style.hcategoryinsub_title}>
  //                   {item.subtitle}
  //                 </span>
  //               </div>
  //             </SwiperSlide>
  //           );
  //         })}
  //       </motion.div>
  //     </div>
  //   );
  // };

  return (
    <div className={style.container} id="home">
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
            <div className={style.phot}>
              <img src="/phot.png" alt="phot" />
            </div>

            <div className={style.hlikes}>300 Likes</div>
          </div>
        </div>
        <div className={style.htitle2}>Top charts</div>
        <div className={style.hcontainer3}>
          {myItems.map((item, index) => {
            return (
              <div className={style.hmusic} key={index}>
                <button>
                  <Image
                    className={style.rectangle17}
                    src={item.recPic}
                    width={63}
                    height={63}
                    alt="home"
                  />
                </button>

                <span className={style.rectitle}>{item.recTitle}</span>
                <span className={style.recname}>{item.recName}</span>
                <div className={style.rectime}>{item.recTime}</div>
                <div className={style.reccircle}>
                  <Image
                    className={style.stroke}
                    src={item.recCircle}
                    width={15}
                    height={14}
                    alt="love"
                  />
                </div>
              </div>
            );
          })}
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
                    <span className={style.hcategoryinsub_title}>
                      {item.subtitle}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={style.htitle4}>Popular in your area</div>
        <div className={style.hcategory2}>
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
                    <span className={style.hcategoryinsub_title}>
                      {item.subtitle}
                    </span>
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
