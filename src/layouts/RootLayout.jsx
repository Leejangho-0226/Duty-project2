// src/layouts/RootLayout.jsx
import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/common/BackToTop";

export default function RootLayout() {
  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />

      {/* 모든 페이지 공통 Top 버튼 */}
      <BackToTop />
    </>
  );
}
