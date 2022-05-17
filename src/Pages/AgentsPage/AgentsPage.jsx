import React, { useContext, useEffect } from "react";
import "./AgentsPage.css";
import firstAgent from "../../Assets/AgentsImages/firstAgent.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { userContext } from "../../Contexts/UserContext";
import FiltersBlock from "../../Components/FiltersBlock/FiltersBlock";
import Pagination from "../../Components/Pagination/Pagination";
const AgentsPage = () => {
  const data = useContext(userContext);
  const { getAgents, agents, agent } = data;

  useEffect(() => {
    Aos.init({ duration: 800 });
    getAgents();
  }, []);
  return (
    <>
      <div className="agents__block">
        <div className="container">
          <div data-aos="zoom-in" className="agents__block-content">
            <h1>SELECT AN AGENT!</h1>
            <FiltersBlock />
            <div className="select-agents">
              {agent.map((item) => (
                <Link key={item.id} to={`/details/${item.id}`}>
                  <div className="agent">
                    <div className="bg">
                      <img width={150} src={item.iconImg} alt="" />
                      <span className="span-name">{item.name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentsPage;
