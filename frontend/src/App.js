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
import ProductOverviewPage from "./pages/ProductOverviewPage";
import ClinicalEvidencePage from "./pages/ClinicalEvidencePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import SpecificationsPage from "./pages/SpecificationsPage";
import VideosPage from "./pages/VideosPage";
import ResourceLibraryPage from "./pages/ResourceLibraryPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import SupportPage from "./pages/SupportPage";
import CareersPage from "./pages/CareersPage";
import PartnersPage from "./pages/PartnersPage";
import FindDistributorPage from "./pages/FindDistributorPage";
import SiteMapPage from "./pages/SiteMapPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import IntellectualPropertyPage from "./pages/IntellectualPropertyPage";
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
            <Route path="/product-overview" element={<ProductOverviewPage />} />
            <Route path="/clinical-evidence" element={<ClinicalEvidencePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/specifications" element={<SpecificationsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/resource-library" element={<ResourceLibraryPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/find-distributor" element={<FindDistributorPage />} />
            <Route path="/site-map" element={<SiteMapPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/ip" element={<IntellectualPropertyPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;