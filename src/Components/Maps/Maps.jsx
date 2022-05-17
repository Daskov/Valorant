import React, { useEffect } from "react";
import mapsBg from "../../Assets/IntroImages/mapsBg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Maps.css";
const Maps = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="footer__block">
      <div className="container">
        <div className="footer__block-content">
          <div data-aos="fade-up" className="links">
            <img
              className="logo-val"
              src="https://i.imgur.com/4eQsuwy.png"
              alt=""
            />
            <img
              className="logo-rio"
              src="https://i.imgur.com/MurzKAt.png"
              alt=""
            />
            <img
              className="logo-teen"
              src="https://i.imgur.com/SbRaIV1.png"
              alt=""
            />
          </div>
          <div className="footer-text">
            <ul data-aos="fade-up">
              <li>Privacy notice</li>
              <li>Term of service</li>
              <li>Cookie prefrence</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <p>
          © 2021 Riot Games, Inc. Riot Games, VALORANT, and any associated logos
          are trademarks, service marks, and/or registered trademarks of Riot
          Games, Inc.
        </p>
      </footer>
    </div>
  );
};

export default Maps;
