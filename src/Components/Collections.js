import React from 'react';
import style from '../styles/Home.module.css';
import Navbar from './Navbar';

const Collections = () => {
  const handleClick = () => {
    // Handle click event for the collections button
    // Add your logic here
  };

  return (
    <div className={style.container}>
      <div className={style.collections}>
        <Navbar />
        <p className={style.collectionButton} onClick={handleClick}>
        <p className={style.likesButton} onClick={handleClick}>
          Collections
        </p>
        </p>
      </div>
    </div>
  );
};

export default Collections;
