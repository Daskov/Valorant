import React from "react";
import AdminContext from "./Contexts/AdminContext";
import UserContext from "./Contexts/UserContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <UserContext>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </UserContext>
  );
};

export default App;
