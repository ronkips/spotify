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
          <div className={style.hlikes}>300 Likes</div>
        </div>
        <div className={style.htitle2}>Top charts</div>
        <div className={style.hcontainer3}>
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
          <div className={style.hcategoryin}>
            <Image
              src="/Rectangle1.png"
              alt="music pic"
              width={153}
              height={153}
            />
            <span className={style.hcategoryintitle}>Life in a bubble</span>
          </div>
          <div className={style.hcategoryin}>
            <Image
              src="/Rectangle1.png"
              alt="music pic"
              width={153}
              height={153}
            />
            <span className={style.hcategoryintitle}>Life in a bubble</span>
          </div>
          <div className={style.hcategoryin}>
            <Image
              src="/Rectangle1.png"
              alt="music pic"
              width={153}
              height={153}
            />
            <span className={style.hcategoryintitle}>Life in a bubble</span>
          </div>
          <div className={style.hcategoryin}>
            <Image
              src="/Rectangle1.png"
              alt="music pic"
              width={153}
              height={153}
            />
            <span className={style.hcategoryintitle}>Life in a bubble</span>
          </div>
          <div className={style.hcategoryin}>
            <Image
              src="/Rectangle1.png"
              alt="music pic"
              width={153}
              height={153}
            />
            <span className={style.hcategoryintitle}>Life in a bubble</span>
          </div>
          <div className={style.hcategoryin}>
            <Image
              src="/Rectangle1.png"
              alt="music pic"
              width={153}
              height={153}
            />
            <span className={style.hcategoryintitle}>Life in a bubble</span>
          </div>
          <div className={style.hcategoryin}>
            <Image
              src="/Rectangle1.png"
              alt="music pic"
              width={153}
              height={153}
            />
            <span className={style.hcategoryintitle}>Life in a bubble</span>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
