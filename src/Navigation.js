import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AgentsPage from "./Pages/AgentsPage/AgentsPage";
import AgentDetails from "./Pages/AgentDetails/AgentDetails";
import AdminPage from "./Pages/AdminPage/AdminPage";
import EditPage from "./Pages/EditPage/EditPage";
import Navbar from "./Components/Navbar/Navbar";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/agents-page" element={<AgentsPage />} />
        <Route path="/details/:id" element={<AgentDetails />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/edit-page/:id" element={<EditPage />} />
        <Route path="/payment-page" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
