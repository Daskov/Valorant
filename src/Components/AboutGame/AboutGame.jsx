import React, { useEffect, useRef, useState } from "react";
import "./AboutGame.css";
import inf from "../../Assets/IntroImages/inf.png";
import Character from "../../Assets/IntroImages/Character.png";
import Animate from "../Animate/Animate";
import introVideo from "../../Assets/IntroImages/introVideo.mp4";

const AboutGame = () => {
  return (
    <>
      <div className="about-game">
        <div className="container">
          <h1 id="about-game-bg">ABOUT GAME</h1>
          <Animate>
            <h2 id="ab-txt">ABOUT THE GAME</h2>
          </Animate>
          <div className="about__game-content">
            <div className="inf-block">
              <p id="abgame">
                Blend your style and experience on a global, competitive stage.
                You have 13 rounds to attack and defend your side using sharp
                gunplay and tactical abilities. And, with one life per-round,
                you'll need to think faster than your opponent if you want to
                survive. Take on foes across Competitive and Unranked modes as
                well as Deathmatch and Spike Rush. Blend your style and
                experience on a global, competitive stage. You have 13 rounds to
                attack and defend your side using sharp gunplay and tactical
                abilities. And, with one life per-round, you'll need to think
                faster than your opponent if you want to survive. Take on foes
                across Competitive and Unranked modes as well as Deathmatch and
                Spike Rush.
              </p>
              <div className="game-inf">
                <img width={182} src={inf} alt="" />
              </div>
            </div>
            <div className="video">
              <img src={Character} alt="" />
              <div className="video-border">
                <video
                  preload="auto"
                  no-controls
                  autoPlay
                  loop
                  playsInline
                  muted
                >
                  <source src={introVideo} />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGame;
