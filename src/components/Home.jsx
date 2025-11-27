import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-box">
      <img
        src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
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