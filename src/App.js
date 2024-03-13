import React from "react";
import Topbar from "./Containers/Topbar/Topbar";
import "./App.css";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div className="container">
      <Topbar />
      <Home />
    </div>
  );
};

export default App;
