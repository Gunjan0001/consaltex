import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Karrierehead from "./Karrierehead";
const Karriere = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Nav HideLogo={"d-none"} />
        <Karrierehead />
        <Footer />
      </div>
    </>
  );
};

export default Karriere;
