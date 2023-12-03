import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Home />
              </React.Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Login />
              </React.Fragment>
            }
          />
          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
