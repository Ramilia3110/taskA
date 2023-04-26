import React from "react";
import "./styles.scss";
import v from "../../assets/videos/v.mp4";

export const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-container">
        <div className="leftSide">
          <div class="cover-content">
            <h2 class="cover__title">The Best Way to empower your bussiness</h2>
            <p class="cover__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button class="cover__btn">Explore Offers</button>
          </div>
        </div>
        <div className="rightSide">
          <i style={{ color: "#fff" }}></i>
          <video src={v} autoPlay loop muted />
        </div>
      </div>
    </div>
  );
};
