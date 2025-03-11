import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import s from "./App.module.scss";
import Contact from "./components/body/contacts/contact.tsx";
import Galery from "./components/body/galery/galery.tsx";
import OurTeam from "./components/body/ourTeam/ourTeam.tsx";
import MainReviews from "./components/body/reviews/index.tsx";
import WhyChooseUsBlock from "./components/body/whyChooseUsBlock/whyChooseUsBlock.tsx";
import Footer from "./components/footer/footer.tsx";
import MainContent from "./components/header/mainContent/header.tsx";
import Topbar from "./components/header/topbar/topbar.tsx";
import PriceBlock from "./components/price-list/comp/PriceBlock.tsx";
import ScrollToTop from "./components/scroll/scrollToTop.tsx";
import Portfolio from "./pages/portfolio.tsx";
import { RootState } from "./store/store.ts";
import { setTargetSection } from "./store/viewSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const targetSection = useSelector((state: RootState) => state.view.targetSection);

  useEffect(() => {
    if (targetSection && location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
        dispatch(setTargetSection(null)); // Сбрасываем состояние
      }, 100);
    }
  }, [targetSection, location.pathname, dispatch]);
  return (
    <div className={s.App}>
      <ScrollToTop />
      <Topbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainContent />
            <PriceBlock />
            <OurTeam />
            <WhyChooseUsBlock />
            <Galery />
            <MainReviews />
          </>
        } />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
