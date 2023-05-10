import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MyCollectionButton from './MyCollectionButton';

const Collections = () => {
  const [selectedTab, setSelectedTab] = useState('collections');
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClick = () => {
    console.log("Handle Clicked!");
    //TODO: Implement actual functionality if required
  };

  return (
    <div className={styles.container}>
      <div className={styles.collections}>
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        <h3>Collections</h3>
        <MyCollectionButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default Collections;