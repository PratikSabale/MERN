import React from "react";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <div>MainLayout</div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainLayout;
