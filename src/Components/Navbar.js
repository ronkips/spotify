import React from "react";
import style from "../styles/Home.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={style.nav}>
      <Image
        className={style.search}
        src="/search.svg"
        width={18}
        height={18}
        alt="search"
      />
      <input
        className={style.minput}
        type="text"
        placeholder="Search artists"
      />
    </div>
  );
};

export default Navbar;
