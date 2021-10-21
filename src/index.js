import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Reservation from "./components/Reservation";
import "./style/main.scss";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Reservation />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
