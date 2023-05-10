import React from 'react';
import style from '../styles/Home.module.css';
import Navbar from './Navbar';

const Collections = () => {
  return (
    <div className={style.container}>
    <div className={style.collections}>
      <Navbar />
    </div>
    </div>
  )
}

export default Collections