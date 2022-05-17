import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../Helpers/const";
import {
  collection,
  query,
  getDocs,
  getFirestore,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  setDoc,
  where,
  addDoc,
} from "firebase/firestore";
export const adminContext = createContext();

const initState = {
  agents: [],
  agentsToEdit: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_AGENTS":
      return { ...state, agents: action.payload };
    case "GET_AGENT_TO_EDIT":
      return { ...state, agentsToEdit: action.payload };
    default:
      return state;
  }
};

const AdminContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const db = getFirestore();
  const addAgent = async (newAgent) => {
    // await axios.post(API, newAgent);
    await addDoc(collection(db, "agents"), newAgent).then((docRef) => {
      let agent = doc(db, "agents", docRef.id);
      updateDoc(agent, {
        id: docRef.id,
      });
      console.log(agent);
    });
  };

  const getAgents = async () => {
    const response = [];
    const q = query(collection(getFirestore(), "agents"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });
    const action = {
      type: "GET_AGENTS",
      payload: response,
    };
    dispatch(action);
  };

  const deleteAgent = async (id) => {
    await deleteDoc(doc(getFirestore(), "agents", `${id}`));
    getAgents();
  };

  const getAgentToEdit = async (id) => {
    const docRef = doc(getFirestore(), "agents", `${id}`);
    const docSnap = await getDoc(docRef);
    const action = {
      type: "GET_AGENT_TO_EDIT",
      payload: docSnap.data(),
    };
    dispatch(action);
  };

  const saveEditedAgent = async (editedAgent) => {
    const agentRef = doc(getFirestore(), "agents", `${editedAgent.id}`);
    console.log(editedAgent);
    await updateDoc(agentRef, editedAgent);
  };

  return (
    <adminContext.Provider
      value={{
        addAgent,
        getAgents,
        deleteAgent,
        getAgentToEdit,
        saveEditedAgent,
        agents: state.agents,
        agentsToEdit: state.agentsToEdit,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContext;
