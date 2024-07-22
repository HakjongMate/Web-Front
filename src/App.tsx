import React from "react";

import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import IntroducePage from "./pages/IntroducePage";
import CurriculumPage from "./pages/CurriculumPage";
import ReviewPage from "./pages/ReviewPage";
import ApplyPage from "./pages/ApplyPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </>
  );
}

export default App;
