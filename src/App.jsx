import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import EnquiryForm from "./components/EnquiryForm";
import Privacy from "./screens/Privacy";
import Terms from "./screens/Terms";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <EnquiryForm />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/privacy" Component={Privacy} />
          <Route path="/terms" Component={Terms} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
