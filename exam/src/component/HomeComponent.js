import React, { Component } from "react";
import Home from "./Home";
import Gallery from "./Gallery";
import Aboutme from "./Aboutme";
import ViewGallery from "./ViewGallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/ViewGallery/:id" element={<ViewGallery />} />
        {/* <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Main;
