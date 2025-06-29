import React from "react";
import "./About.css";
// import play_icon from "../../assets/0.avif";
import about_img from "../../assets/1.avif";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayVideo, playVideo }) => {
  // console.log(playVideo);
  return (
    <div className="about" id="aboutPage">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => setPlayVideo(true)}
        />
        {/* <img src="▶" alt="" className="play-icon" /> */}
        {/* <button className="play-icon btn">▶</button> */}
      </div>
      <div className="about-right">
        <h3>ABOUT ZOO</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          explicabo cumque nesciunt nostrum pariatur adipisci debitis a quos
          praesentium deleniti nulla, nihil quam quo quaerat sit, placeat alias
          in doloribus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          est laudantium vitae dolorem dicta provident, enim nostrum consectetur
          natus harum, commodi ipsum? Maxime eos eaque perferendis nihil magni
          deleniti vitae?
        </p>
      </div>
    </div>
  );
};

export default About;
