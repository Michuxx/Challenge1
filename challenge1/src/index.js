import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./SuccessedApp-Style.css";
import App from "./App";
import SuccessedApp from "./successedApp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, HashRouter, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="SuccessedApp" element={<SuccessedApp />} />
      </Routes>
    </HashRouter>
    {/* <SucccessedApp /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
