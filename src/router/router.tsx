import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home.page";
import { MoreInfoPage } from "../pages/more-info.page";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Mais-informações" element={<MoreInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
