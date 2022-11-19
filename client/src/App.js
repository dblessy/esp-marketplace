import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import BuyerPage from "./pages/BuyerPage"
import Favorites from './pages/Favorites';
import SellerPage from './pages/SellerPage';
import DevPortal from "./pages/DevPortal";
import axios from "axios";

function App() {
  const user = localStorage.getItem("user");
  // Request interceptors for API calls
  axios.interceptors.request.use(
      config => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
  );
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buyer" element={!user ? <Home /> : <BuyerPage />} />
          <Route path="favorites" element={!user ? <Home /> : <Favorites />} />
          <Route path="seller" element={!user ? <Home /> : <SellerPage />} />
          <Route path="dev" element={!user ? <Home /> : <DevPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
