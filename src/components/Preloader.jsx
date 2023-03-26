import React from "react";
import circular from "../assets/images/png/circular.png";

function preloader() {
  return (
    <div>
      <div className="min-vh-100 bg-black loding_position ">
        <img className="w-25 animation_loding" src={circular} alt="loading" />
      </div>
    </div>
  );
}

export default preloader;
