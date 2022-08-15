import React from "react";
import LogoPart from "./components/LogoPart/LogoPart";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="fullContainer">
      <div className="appContainer">
      <LogoPart />
      <Table />
    </div>
    <Footer />
    </div>
  )
}

export default App;
