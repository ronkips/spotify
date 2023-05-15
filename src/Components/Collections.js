import React from "react";
import style from "../styles/Collections.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MyCollectionButton from "./MyCollectionButton";


const Collections = () => {
  const items = [
    {
      pic: "/Rectangle26.png",
      title: "John watts"
    },
    {
      pic: "/Rectangle27.png",
      title: "John Watts"
    },
    {
      pic: "/Rectangle28.png",
      title: "John Watts"
    },
    {
      pic: "/Rectangle29.png",
      title: "John"
    }
  ]
  return (
    <div className={style.container}>
      <div className={style.Collections}>
      
      <Navbar />
    
      <MyCollectionButton /> {/* Add MyCollectionButton component here */}
        <Sidebar />

        <Footer />
      </div>
    </div>
  );
};

export default Collections;

