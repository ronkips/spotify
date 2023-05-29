import React from "react";
// import Card from "./Card";
import Album from "./Album";
import Home from "./Home";
import Link from "next/link";
import Card from "./Card";
import Collections from "./Collections";
import Footer from "./Footer";
import Layout from "./Layout";
const App = () => {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
