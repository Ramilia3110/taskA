import React from "react";
import "./styles.scss";
import ab from "../../assets/images/11.jpg";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="heading">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="about-container">
        <section className="about-content">
          <div className="about-img">
            <img src={ab} />{" "}
          </div>
          <div className="about-text">
            <h2>Our goal is to be the best for our clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="" className="read-more">
              Read More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
