import React from "react";
import Footer from "./Footer";
import Kundenhead from "./Kundenhead";
import Nav from "./Nav";
const Kunden = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Nav HideLogo={"d-none"} />
        <Kundenhead />
        <Footer />
      </div>
    </>
  );
};

export default Kunden;
