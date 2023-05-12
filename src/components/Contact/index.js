import React from "react";
import "./styles.scss";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFigma,
} from "react-icons/io5";
import c from "../../assets/images/1.jpg";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <form action="">
        <div className="title">
          <h2>Contact us</h2>
        </div>
        <div className="half">
          <div className="item">
            <label for="name">NAME</label>
            <input type="text" id="name" />
          </div>
          <div className="item">
            <label for="email">EMAIL</label>
            <input type="text" id="email" />
          </div>
        </div>
        <div className="full">
          <label for="message">MESSAGE</label>
          <textarea name="" id="message"></textarea>
        </div>
        <div className="action">
          <input type="submit" value="SEND MESSAGE" />
          <input type="reset" value="RESET" />
        </div>
        <div class="icons">
          {" "}
          <a href="">
            <IoLogoFacebook className="logo" />{" "}
          </a>
          <a href="">
            <IoLogoLinkedin className="logo" />{" "}
          </a>
          <a href="">
            <IoLogoInstagram className="logo" />{" "}
          </a>
          <a href="">
            <IoLogoFigma className="logo" />{" "}
          </a>
        </div>
      </form>
    </div>
  );
};
