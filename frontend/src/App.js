import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SampleRequestPage from "./pages/SampleRequestPage";
import TrialRequestPage from "./pages/TrialRequestPage";
import OrderNowPage from "./pages/OrderNowPage";
import BlogPage from "./pages/BlogPage";
import NewsPage from "./pages/NewsPage";
import FAQPage from "./pages/FAQPage";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sample-request" element={<SampleRequestPage />} />
            <Route path="/trial-request" element={<TrialRequestPage />} />
            <Route path="/order-now" element={<OrderNowPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;