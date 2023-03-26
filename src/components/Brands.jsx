import React from "react";
import hgk from "../assets/images/png/hgk.png";
import trust from "../assets/images/png/trust.png";
import lab from "../assets/images/png/lab.png";
import fibeka from "../assets/images/png/fibeka.png";
import media from "../assets/images/png/media.png";
const Brands = () => {
  return (
    <section className="bg_primary py-lg-5 overflow-hidden">
      <div
        className="d-flex justify-content-center mt-sm-5 pt-sm-5 position_para"
        data-aos="fade-down"
        data-aos-duration="4000"
      >
        <p className="mb-0 common_para para mt-lg-5   ms-md-4 ">
          <span className="ms-5 ps-1">Wie Testosteron für deine Agentur</span>
        </p>
      </div>
      <div
        className=" overflow-auto "
        data-aos="zoom-in-up"
        data-aos-duration="4000"
      >
        <div className=" d-flex justify-content-between mt-4 w_1370 ms-auto px-3 align-items-center  ">
          <div className="">
            <img className="w-100" src={hgk} alt="hgk" />
          </div>
          <div className="">
            <img className="w-100" src={trust} alt="trust" />
          </div>
          <div className="">
            <img className="w-100" src={lab} alt="lab" />
          </div>
          <div className="">
            <img className="w-100" src={fibeka} alt="fibeka" />
          </div>
          <div className="">
            <img className="w-100" src={media} alt="media" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
