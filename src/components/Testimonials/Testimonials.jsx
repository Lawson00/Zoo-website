import React, { useRef } from "react";
import "./Testimonials.css";
import next_arrow from "../../assets/next-icon.png";
import back_arrow from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  function slideForward() {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  }
  function slideBackward() {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  }

  return (
    <div className="testimonials" id="testimonialPage">
      <button className="back-btn" onClick={slideBackward}>
        <img src={back_arrow} alt="" />
      </button>
      <button className="forward-btn" onClick={slideForward}>
        <img src={next_arrow} alt="" />
      </button>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="">
                  <h3>Lawson Samson</h3>
                  <span>Code City, Ghana</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                eligendi!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div className="">
                  <h3>Gideon Asare</h3>
                  <span>Code City, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a
                tempore officia reprehenderit placeat. Facere, earum dolorum
                architecto laborum nisi vero expedita, amet officia sint
                exercitationem mollitia autem nesciunt. Nisi?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div className="">
                  <h3>Yaw Tutu</h3>
                  <span>Code City, Dubia</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a
                tempore officia reprehenderit placeat. Facere, earum dolorum
                architecto laborum nisi vero expedita, amet officia sint
                exercitationem mollitia autem nesciunt. Nisi?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div className="">
                  <h3>Solomon Oppong</h3>
                  <span>Code City, Canada</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a
                tempore officia reprehenderit placeat. Facere, earum dolorum
                architecto laborum nisi vero expedita, amet officia sint
                exercitationem mollitia autem nesciunt. Nisi?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
