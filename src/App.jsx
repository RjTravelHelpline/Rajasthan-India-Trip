import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import EnquiryForm from "./components/EnquiryForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <EnquiryForm />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
