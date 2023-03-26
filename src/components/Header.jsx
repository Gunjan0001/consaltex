import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav";
import zunde from "../assets/images/png/zunde.png";
import line from "../assets/images/png/line.png";
import roll from "../assets/images/png/roll.png";
import box3 from "../assets/images/png/box3.png";
import box2 from "../assets/images/png/box2.png";
import box1 from "../assets/images/png/box1.png";
const Header = () => {
  return (
    <>
      <section className="header_bg min_vh_xl_100 bg_primary d-flex flex-column header2_shadow  position-relative pb-5">
        <img
          className="position-absolute position_image d-none d-xxl-flex "
          src={box1}
          alt="box1"
        />
        <Nav />
        <div className="flex-grow-1 d-flex align-items-center mt-3 mt-lg-5 position-relative ">
          <img
            className="position-absolute box_position d-none d-lg-flex circle_animation "
            src={box2}
            alt="box2"
          />
          <Container>
            <div
              className="ms-sm-5 ps-sm-4"
              data-aos="fade-down"
              data-aos-duration="4000"
            >
              <p className="mb-0 common_para para  ms-md-4">
                <span className="ms-5 ps-1">
                  Wie Testosteron für deine Agentur
                </span>
              </p>
            </div>
            <h2
              className="fw_regular ff_poiret fs_6xl text_primary text-center pt-2 pb-2"
              data-aos="fade-down"
              data-aos-duration="4000"
            >
              <strong>
                Wir verhelfen{" "}
                <span className="element  px-3 pb-1">Agenturen</span>
              </strong>
            </h2>
            <h2
              className="fw_regular ff_poiret fs_6xl text_primary text-center pb-xl-5 mb-xl-5 translate-middle-y mt-4 pt-md-5"
              data-aos="fade-down"
              data-aos-duration="4000"
            >
              <strong> zu Rekordumsätzen</strong>
            </h2>
            <Row className=" mt-md-5 my-md-0 position-relative ">
              <img
                className="position-absolute w-25 position_box3 d-none circle_animation  d-lg-flex "
                src={box3}
                alt="box3"
              />
              <Col md={7}>
                <div className="header_shadow mt_260">
                  <img
                    className="w-100   headerzunde_set z_index_4 "
                    data-aos="fade-right"
                    data-aos-duration="4000"
                    src={zunde}
                    alt="zunde"
                  />
                </div>
              </Col>
              <Col md={5}>
                <div
                  className="mt-4"
                  data-aos-duration="4000"
                  data-aos="fade-left"
                >
                  <p className="common_para mb-0 mw_329 mx-auto mx-md-0 text-center text-md-start ">
                    Zünde die Wachstumsrakete und katapultiere deinen Umsatz in
                    eine neue Dimension!
                  </p>
                  <article className="d-flex  justify-content-center justify-content-md-start ">
                    <button className="common_btn d-flex align-items-center gap-3  mt-4">
                      <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                        <strong>Sprich jetzt mit unserem Team</strong>
                      </p>
                      <img src={line} alt="line" />
                    </button>
                  </article>
                  <div className="mt-lg-5 pt-lg-5 text-center text-md-start ms-md-5 mt-3 d-none  d-md-block">
                    <img className="mt-md-5 pt-lg-5 " src={roll} alt="roll" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
