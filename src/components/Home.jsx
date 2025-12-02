import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-box">
      <img
        src="https://discovertemplate.com/wp-content/uploads/2021/09/Shopping-E-Commerce-Animated-GIF-Icon-Pack_2.gif"
        alt="Shopping Banner"
        className="home-img"
      />

      <h1 className="home-heading">Welcome to ShopEase</h1>

      <p className="home-text">
        Enjoy the best online shopping experience with top quality products,
        fast delivery, and amazing offers every day.
      </p>
    </div>
  );
}

export default Home;