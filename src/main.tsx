import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import TermsOfUse from "./TermsOfUse.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
