import React from "react";
import "./styles.scss";
import cover1 from "../../assets/images/cover1.jpg";
import cover2 from "../../assets/images/cover2.jpg";
import cover3 from "../../assets/images/cover3.jpg";

export const Home = () => {
  return (
    <div className="home">
      <h2>ATech makes your website look amazing</h2>
      <div className="home-container">
        <div className="hex-container">
          <div className="hexagon">
            <div className="shape">
              <img src={cover1} />
              <div className="content">
                <div>
                  <h2>Web Development</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos cumque nihil exercitationem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hexagon">
            <div className="shape">
              <img src={cover3} />

              <div className="content">
                <div>
                  <h2>App Development</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos cumque nihil exercitationem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hexagon">
            <div className="shape">
              <img src={cover2} />
              <div className="content">
                <div className="content-text">
                  <h2>Web Design</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos cumque nihil exercitationem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
