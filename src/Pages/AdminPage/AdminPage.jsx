import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../../Contexts/AdminContext";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import "./AdminPage.css";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
const AdminPage = () => {
  const data = useContext(adminContext);
  const { addAgent, getAgents, deleteAgent, agents } = data;
  const navigate = useNavigate();
  const [newAgent, setNewAgent] = useState({
    name: "",
    role: "",
    iconImg: "",
    fullImg: "",
    biography: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newAgent) {
      let val = newAgent[key];
      if (typeof val === "string") {
        if (!val.trim()) {
          alert("Fill out the fields");
          return;
        }
      }
    }

    addAgent(newAgent);
    setNewAgent({
      name: "",
      role: "",
      iconImg: "",
      fullImg: "",
      biography: "",
    });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.email === "daskov2412@gmail.com") {
        console.log("auth");
      } else {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <>
      <div className="agents-cards">
        <div className="container">
          <div className="card-form">
            <form onSubmit={handleSubmit} className="agent-form">
              <input
                onChange={(e) =>
                  setNewAgent({ ...newAgent, name: e.target.value })
                }
                value={newAgent.name}
                type="text"
                placeholder="Agent's name"
              />
              <select
                onChange={(e) =>
                  setNewAgent({ ...newAgent, role: e.target.value })
                }
                value={newAgent.role}
              >
                <option>Choose role</option>
                <option value="Sentinel">Sentinel</option>
                <option value="Controller">Controller</option>
                <option value="Initiator">Initiators</option>
                <option value="Duelist">Duelist</option>
              </select>
              <input
                onChange={(e) =>
                  setNewAgent({ ...newAgent, iconImg: e.target.value })
                }
                value={newAgent.iconImg}
                type="text"
                placeholder="put icon url"
              />
              <input
                onChange={(e) =>
                  setNewAgent({ ...newAgent, fullImg: e.target.value })
                }
                value={newAgent.fullImg}
                type="text"
                placeholder="put full img url"
              />
              <textarea
                onChange={(e) =>
                  setNewAgent({ ...newAgent, biography: e.target.value })
                }
                value={newAgent.biography}
                cols="30"
                rows="10"
              ></textarea>
              <button>ADD</button>
            </form>
            <div className="admin-cards">
              {agents.map((item) => (
                <div key={item.id} className="admin-card">
                  <h5>{item.name}</h5>
                  <img src={item.iconImg} alt={item.name} />
                  <div className="btns">
                    <button
                      onClick={() => deleteAgent(item.id)}
                      className="del-btn"
                    >
                      <MdDelete />
                    </button>
                    <Link to={`/edit-page/${item.id}`}>
                      <button className="edit-btn">
                        <BiEdit />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
