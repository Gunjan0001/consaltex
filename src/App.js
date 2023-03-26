import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from "./components/Preloader";
import Main from "./components/Main";
import Karriere from "./components/Karriere";
import Kunden from "./components/Kunden";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [preload, setpreload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpreload(false);
      document.body.classList.remove("overflow_hidden_preloder");
    }, 2800);
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        {preload && <Preloader />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Karriere" element={<Karriere />} />
          <Route path="/Kunden" element={<Kunden />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
