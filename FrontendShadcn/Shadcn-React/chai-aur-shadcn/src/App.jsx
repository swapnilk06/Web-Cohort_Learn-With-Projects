import React from "react";
import "./index.css";
import Home from "./pages/home";
import AccordPage from "./pages/accord";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Home />
      <AccordPage />
    </div>
  );
};

export default App;
