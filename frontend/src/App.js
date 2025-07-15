import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;