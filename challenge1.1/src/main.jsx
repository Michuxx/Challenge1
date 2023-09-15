import React from "react";
import ReactDOM from "react-dom/client";
import "./SuccessedApp-Style.css";
import App from "./App";
import SuccessedApp from "./successedApp";
import { BrowserRouter, Routes, HashRouter, Route } from "react-router-dom";
import "./App.css";

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
