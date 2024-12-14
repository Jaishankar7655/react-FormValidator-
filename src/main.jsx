import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PesonalForm from "./Components/PesonalForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Form" element={<PesonalForm />} />
      </Routes>
    </Router>
  </StrictMode>
);