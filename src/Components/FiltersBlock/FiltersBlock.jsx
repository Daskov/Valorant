import React, { useContext, useState } from "react";
import "./FiltersBlock.css";
import { userContext } from "../../Contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const FiltersBlock = () => {
  const data = useContext(userContext);

  const { getAgents } = data;

  const location = useLocation();

  const navigate = useNavigate();

  const filter = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState(filter.get("q") || "");

  const [roleValue, setRoleValue] = useState(filter.get("role") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setRoleValue(filter.get("role") || "");
    getAgents();
  };

  const resetFilter = () => {
    setSearchValue("");
    setRoleValue("");
    navigate("/agents-page");
    getAgents();
  };

  return (
    <div className="filters-block">
      <div className="container">
        <div className="filters__block-content">
          <form name="search">
            <input
              value={searchValue}
              onChange={(e) => handleFilters("q", e.target.value)}
              type="text"
              className="input"
              name="txt"
            />
            <br />
            <select
              value={roleValue}
              onChange={(e) => handleFilters("role", e.target.value)}
              className="select"
            >
              <option value="">CHOOSE ROLE</option>
              <option value="Sentinel">Sentinel</option>
              <option value="Controller">Controller</option>
              <option value="Initiator">Initiators</option>
              <option value="Duelist">Duelist</option>
            </select>
          </form>
          <button onClick={resetFilter}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default FiltersBlock;
