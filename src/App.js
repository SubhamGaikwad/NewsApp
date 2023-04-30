import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  s = 5;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<News key="general" category="general" />}
          ></Route>
          <Route
            path="/business"
            element={<News key="business" category="business" />}
          ></Route>
          <Route
            path="/entertainment"
            element={<News key="entertainment" category="entertainment" />}
          ></Route>
          <Route
            path="/health"
            element={<News key="health" category="health" />}
          ></Route>
          <Route
            path="/science"
            element={<News key="science" category="science" />}
          ></Route>
          <Route
            path="/sports"
            element={<News key="sports" category="sports" />}
          ></Route>
          <Route
            path="/technology"
            element={<News key="technology" category="technology" />}
          ></Route>
        </Routes>
      </div>
    );
  }
}
