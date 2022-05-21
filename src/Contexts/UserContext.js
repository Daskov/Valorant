import React, { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../Helpers/const";
import axios from "axios";
import {
  collection,
  query,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const userContext = createContext();

const initState = {
  agents: [],
  agentDetails: null,
  user: null,
  feedbacks: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_AGENTS":
      return { ...state, agents: action.payload };
    case "GET_AGENT_DETAILS":
      return { ...state, agentDetails: action.payload };
    case "CHECK_USER":
      return { ...state, user: action.payload };
    case "GET_FEEDBACKS":
      return { ...state, feedbacks: action.payload };
    default:
      return state;
  }
};

const UserContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const db = getFirestore();

  // const getAgents = async () => {
  //   const response = [];
  //   const q = query(collection(getFirestore(), "agents"));

  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     response.push(doc.data());
  //   });
  //   const action = {
  //     type: "GET_AGENTS",
  //     payload: response,
  //   };
  //   dispatch(action);
  // };

  const getAgents = async () => {
    const response = await axios(`${API}${window.location.search}`);
    const action = {
      type: "GET_AGENTS",
      payload: response.data,
    };
    dispatch(action);
  };

  const getAgentDetails = async (id) => {
    const docRef = doc(getFirestore(), "agents", `${id}`);
    const docSnap = await getDoc(docRef);
    const action = {
      type: "GET_AGENT_DETAILS",
      payload: docSnap.data(),
    };
    dispatch(action);
  };

  const addFeedback = async (newFeedback) => {
    await addDoc(collection(db, "feedbacks"), newFeedback).then((docRef) => {
      let feedback = doc(db, "feedbacks", docRef.id);
      updateDoc(feedback, {
        id: docRef.id,
      });
      console.log(feedback);
    });
    getFeedbacks();
  };

  const getFeedbacks = async () => {
    const response = [];
    const q = query(collection(getFirestore(), "feedbacks"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });
    const action = {
      type: "GET_FEEDBACKS",
      payload: response,
    };
    dispatch(action);
  };

  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = 0;
  const agent = state.agents.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalCount = state.agents.length;

  const handlePagination = (page) => {
    setCurrentPage(currentPage + 1);
  };

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <userContext.Provider
      value={{
        getAgents,
        getAgentDetails,
        handlePagination,
        authWithGoogle,
        logOut,
        addFeedback,
        getFeedbacks,
        totalCount,
        agent,
        productsPerPage,
        agents: state.agents,
        agentDetails: state.agentDetails,
        user: state.user,
        feedbacks: state.feedbacks,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserContext;
