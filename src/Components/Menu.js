import React, { useRef, useEffect } from "react";
import style from "../styles/Menu.module.css";
const Menu = ({ Menu_modal, closeMenu }) => {
  const handleClick = () => {
    closeMenu();
  };
  return (
    <div className={`style.Menu_container ${Menu_modal ? "open" : "close"}`}>
      {/* <div className={style.closeIcon} onClick={closeMenu}>
        X
      </div> */}
      <br />
      <br />
      <div onClick={handleClick}>Home</div> <br />
      <br />
      <div>Home</div> <br />
      <br />
      <div>Home</div> <br />
      <br />
      <div>Home</div>
      {/* <div></div> */}
    </div>
  );
};

export default Menu;
