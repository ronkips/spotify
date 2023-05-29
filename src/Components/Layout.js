import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
