import React from "react";
import style from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Image from "next/image";
// import Footer from "./Footer";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <Navbar />
        <Sidebar />
        <div className={style.hcontainer}>
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
          <div className={style.hlikes}>Likes</div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
