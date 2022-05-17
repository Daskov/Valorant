import React, { useContext, useEffect } from "react";
import "./AgentDetails.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { userContext } from "../../Contexts/UserContext";
import { useParams } from "react-router-dom";

const AgentDetails = () => {
  const data = useContext(userContext);
  const { agentDetails, getAgentDetails } = data;

  const params = useParams();
  useEffect(() => {
    Aos.init({ duration: 800 });
    getAgentDetails(params.id);
  }, []);
  console.log(agentDetails);
  if (!agentDetails) {
    return <h2 className="loading">Loading...</h2>;
  }
  return (
    <>
      <div className="details-block">
        <div className="container">
          <div key={agentDetails}>
            <h1 className="agent-name">{agentDetails.name}</h1>
            <div className="details__block-content">
              <div data-aos="fade-right" className="inf-agent">
                <h3 className="role">// ROLE</h3>
                <p className="role-inf">{agentDetails.role}</p>
                <h3 className="role h-biography">// BIOGRAPHY</h3>
                <p className="biography">{agentDetails.biography}</p>
              </div>
              <img
                data-aos="fade-left"
                src={agentDetails.fullImg}
                alt=""
                className="img-agent"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDetails;
