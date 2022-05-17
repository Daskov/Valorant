import React, { useEffect } from "react";
import Animate from "../Animate/Animate";
import "./Agents.css";
import characterSec from "../../Assets/IntroImages/characterSec.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Agents = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
      <div className="agents-block">
        <div className="container">
          <h1 id="agents-bg">AGENTS</h1>
          <Animate>
            <h2 id="agents-header">AGENTS</h2>
          </Animate>

          <div className="agents-block-content">
            <div className="inf-agents">
              <p>
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
              <Link to="/agents-page">
                <button className="btn btn--light">
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content agent-btn">AGENTS</span>
                  </span>
                </button>
              </Link>
            </div>
            <div className="fenix-img">
              <img data-aos="fade-up" src={characterSec} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
