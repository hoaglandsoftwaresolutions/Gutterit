import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { useGlobalReveal } from "./lib/useGlobalReveal";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Installation from "./pages/services/Installation";
import Cleaning from "./pages/services/Cleaning";
import Repair from "./pages/services/Repair";
import GutterGuards from "./pages/services/GutterGuards";
import PressureWashing from "./pages/services/PressureWashing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FaqPage from "./pages/Faq";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function RevealController() {
  useGlobalReveal();
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RevealController />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/installation" element={<Installation />} />
          <Route path="services/cleaning" element={<Cleaning />} />
          <Route path="services/gutter-repair" element={<Repair />} />
          <Route path="services/gutter-guards" element={<GutterGuards />} />
          <Route
            path="services/pressure-washing"
            element={<PressureWashing />}
          />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
