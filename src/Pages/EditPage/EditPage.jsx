import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminContext } from "../../Contexts/AdminContext";
import "../AdminPage/AdminPage.css";

const EditPage = () => {
  const data = useContext(adminContext);
  const { getAgentToEdit, saveEditedAgent, agentsToEdit } = data;
  const params = useParams();
  const navigate = useNavigate();

  const [editedAgent, setEditedAgent] = useState(agentsToEdit);
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in editedAgent) {
      let value = editedAgent[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Fill out the fields!");
          return;
        }
      }
    }
    saveEditedAgent(editedAgent);
    navigate("/admin-page");
  };

  useEffect(() => {
    getAgentToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedAgent(agentsToEdit);
  }, [agentsToEdit]);

  if (!editedAgent) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="agents-cards">
      <form onSubmit={handleSubmit} className="agent-form edit-form">
        <input
          onChange={(e) =>
            setEditedAgent({ ...editedAgent, name: e.target.value })
          }
          value={editedAgent.name}
          type="text"
          placeholder="Agent's name"
        />
        <select
          onChange={(e) =>
            setEditedAgent({ ...editedAgent, role: e.target.value })
          }
          value={editedAgent.role}
        >
          <option>Choose role</option>
          <option value="Sentinel">Sentinel</option>
          <option value="Controller">Controller</option>
          <option value="Initiator">Initiators</option>
          <option value="Duelist">Duelist</option>
        </select>
        <input
          onChange={(e) =>
            setEditedAgent({ ...editedAgent, iconImg: e.target.value })
          }
          value={editedAgent.iconImg}
          type="text"
          placeholder="put icon url"
        />
        <input
          onChange={(e) =>
            setEditedAgent({ ...editedAgent, fullImg: e.target.value })
          }
          value={editedAgent.fullImg}
          type="text"
          placeholder="put full img url"
        />
        <textarea
          onChange={(e) =>
            setEditedAgent({ ...editedAgent, biography: e.target.value })
          }
          value={editedAgent.biography}
          cols="30"
          rows="10"
        ></textarea>
        <button>SAVE</button>
      </form>
    </div>
  );
};

export default EditPage;
