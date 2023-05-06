import React from "react";
import g1 from "./../../assets/images/1.jpg";
import g2 from "./../../assets/images/2.jpg";
import g3 from "./../../assets/images/3.jpg";
import g4 from "./../../assets/images/4.jpg";
import g5 from "./../../assets/images/5.jpg";
import g6 from "./../../assets/images/6.jpg";
import g7 from "./../../assets/images/7.jpg";
import g8 from "./../../assets/images/8.jpg";
import g9 from "./../../assets/images/9.jpg";
import g10 from "./../../assets/images/10.jpg";
import g11 from "./../../assets/images/11.jpg";
import g12 from "./../../assets/images/12.jpg";
import "./styles.scss";

export const Carousel = () => {
  const leftPerspectives = [
    { x: -10, z: -4 },
    { x: -20, z: -8 },
    { x: -30, z: -12 },
    { x: -40, z: -16 },
    { x: -50, z: -20 },
    { x: 10, z: -4 },
  ];

  const rightPerspectives = [
    { x: 10, z: -4 },
    { x: 20, z: -8 },
    { x: 30, z: -12 },
    { x: 40, z: -16 },
    { x: 50, z: -20 },
    { x: -10, z: -4 },
  ];

  const leftCards = document.querySelectorAll(".left .item");
  const rightCards = document.querySelectorAll(".right .item");

  const translateImage = (target, p) => {
    target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
  };

  const animateCards = (c, perspectives) => {
    const count = parseInt(c.dataset.counter);
    translateImage(c, perspectives[count - 1]);
    c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
  };

  const loop = () => {
    setInterval(() => {
      leftCards.forEach((c) => {
        animateCards(c, leftPerspectives);
      });

      rightCards.forEach((c) => {
        animateCards(c, rightPerspectives);
      });
    }, 1000);
  };

  loop();

  return (
    <div className="carousel">
      <div className="gallery">
        <div className="left">
          <div className="inner">
            <img className="item" srs={g1} data-counter="1" />
            <img className="item" src={g2} data-counter="2" />
            <img className="item" src={g3} data-counter="3" />
            <img className="item" src={g4} data-counter="4" />
            <img className="item" src={g5} data-counter="5" />
            <img className="item" src={g6} data-counter="6" />
          </div>
        </div>
        <div className="right">
          <div className="inner">
            <img className="item" srs={g7} data-counter="1" />
            <img className="item" src={g8} data-counter="2" />
            <img className="item" src={g9} data-counter="3" />
            <img className="item" src={g10} data-counter="4" />
            <img className="item" src={g11} data-counter="5" />
            <img className="item" src={g12} data-counter="5" />
          </div>
        </div>
      </div>
    </div>
  );
};
