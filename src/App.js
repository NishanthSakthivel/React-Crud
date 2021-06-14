import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import RenderItemsList from './components/renderItemsList'
import AddItem from "./components/AddItem";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={RenderItemsList} />
        <Route path="/additems"  component={AddItem} />
      </div>
    </Router>
  );
}

export default App;
