import React from "react";
import style from "../styles/Home.module.css";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
