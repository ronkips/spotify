import React from "react";
import style from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
