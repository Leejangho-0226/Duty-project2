// src/app/router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import HomePage from "../pages/HomePage";
import ProrePage from "../pages/services/ProrePage";
import HealingYouPage from "../pages/services/HealingYouPage";
import DutyOnPage from "../pages/services/DutyOnPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃(Header/Footer) */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/prore" element={<ProrePage />} />
          <Route path="/healingyou" element={<HealingYouPage />} />
          <Route path="/dutyon" element={<DutyOnPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
