import React from 'react';
import style from '../styles/modules/css';
import Navbar from '../Navbar';

const Album = () => {
  return (
    <div className={style.container}>
    <div className={style.album}>
      <Navbar />
    </div>  
    </div>
  )
}

export default Album