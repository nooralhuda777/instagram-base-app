import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import Composer from "./Composer";
import Newsfeed from "./NewsFeed";
import App from "../App"; // Import a Home component

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <RouterRoutes>
        <Route path="/" element={<App />} />
        <Route path="/composer" element={<Composer />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default AppRoutes;
