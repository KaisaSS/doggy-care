import React from "react";
// Styles
import "./home.css";
import HomeAbout from "./HomeAbout";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <HomeAbout />
      </div>
    </div>
  );
};

export default Home;
