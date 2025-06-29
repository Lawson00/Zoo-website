import React from "react";
import "./HomePage.css";
import dark_arrow from "../../assets/dark-arrow.png";

const HomePage = () => {
  return (
    <div className="homePage container" id="homePage">
      <div className="homePage-text">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          optio eos adipisci, voluptatum animi odit iste. Nesciunt fuga fugiat
          tenetur!
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
