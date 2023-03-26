import React from "react";
import Header from "./Header";
import Brands from "./Brands";
import Testimonal from "./Testimonal";
import Team from "./Team";
import BackToTop from "./BackToTop";
import Liefern from "./Liefern";
import Schritte from "./Schritte";
import Video from "./Video";
import Fragen from "./Fragen";
import Noch from "./Noch";
import Footer from "./Footer";
import Agentur from "./Agentur";
const Main = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Brands />
        <Agentur />
        <Testimonal />
        <BackToTop />
        <Team />
        <Liefern />
        <Schritte />
        <Video />
        <Fragen />
        <Noch />
        <Footer />
      </div>
    </>
  );
};

export default Main;
