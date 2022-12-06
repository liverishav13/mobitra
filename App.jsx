import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Vehicles from "./Vehicles";
import Map from "./Map";
import Analytics from "./Analytics";
import Report from "./Report";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
const App=()=>{
  return (
    <>
      <Navbar />
      <Vehicles />
      <Routes>
        <Route exact path="/" component={Vehicles} />
        <Route exact path="/Map" component={<Map/>} />
        <Route exact path="/Analytics" component={<Analytics/>} />
        <Route exact path="/Report" component={<Report/>} />
        <Navigate to="/" />
      </Routes>
    </>
  );
};
export default App;
