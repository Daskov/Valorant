import React from "react";
import "./MainPage.css";
import omenImg from "../../Assets/IntroImages/omenImg.png";
import AboutGame from "../../Components/AboutGame/AboutGame";
import Agents from "../../Components/Agents/Agents";
import Maps from "../../Components/Maps/Maps";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <div className="intro-block">
        <div className="container">
          <div className="intro__block-content">
            <div className="intro__text">
              <h3>A 5v5 CHARACTER -BASED TACTICAL SHOOTER</h3>
              <h1>VALORANT</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita quos error dolorem. Sit ut eius, optio dolores a dicta
                id! Voluptates rerum perspiciatis, minus nemo velit in
                accusantium deserunt delectus placeat magni quibusdam
                blanditiis?
              </p>
            </div>
            <div className="download__button">
              <h2>WHY DON’T YOU TRY IT NOW ?</h2>
              <Link to="/payment-page">
                <button className="btn">
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">BUY THE GAME</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <img className="omen-img" src={omenImg} alt="" />
          <span id="txt" className="bg-text">
            TEST YOUR SKILLS
          </span>
        </div>
      </div>
      <AboutGame />
      <Agents />
      <Maps />
    </>
  );
};

export default MainPage;
