import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import BuyerPage from "./pages/BuyerPage"
import Favorites from './pages/Favorites';
import SellerPage from './pages/SellerPage';
import DevPortal from "./pages/DevPortal";

function App() {
  const user = localStorage.getItem("user");
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="buyer" element={!user ? <Login /> : <BuyerPage />} />
          <Route path="favorites" element={!user ? <Login /> : <Favorites />} />
          <Route path="seller" element={!user ? <Login /> : <SellerPage />} />
          <Route path="dev" element={!user ? <Login /> : <DevPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
